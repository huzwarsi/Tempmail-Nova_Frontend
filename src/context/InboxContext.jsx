import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import API from '../services/api';
import { getSocket } from '../services/socket';

const InboxContext = createContext();

export const InboxProvider = ({ children }) => {
  const [currentAddress, setCurrentAddress] = useState(
    localStorage.getItem('tempmail_current_address') || ''
  );
  const [inboxDetails, setInboxDetails] = useState(null);
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [availableDomains, setAvailableDomains] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newEmailNotice, setNewEmailNotice] = useState(false);

  // Play audio notification ping on new email
  const playNotificationPing = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      // Audio context fallback
    }
  };

  // Fetch available domains
  const fetchDomains = useCallback(async () => {
    try {
      const { data } = await API.get('/domain/public');
      setAvailableDomains(data.domains);
    } catch (err) {
      console.warn('Failed to load public domains');
    }
  }, []);

  // Fetch emails for current inbox (optional showLoading parameter prevents background polling from flickering loaders)
  const fetchEmails = useCallback(async (address, showLoading = true) => {
    if (!address) return;
    if (showLoading) setLoading(true);
    try {
      const { data } = await API.get(`/email/inbox/${address}`);
      setEmails(data.emails);
    } catch (err) {
      console.warn('Error loading emails for inbox:', address);
    } finally {
      if (showLoading) setLoading(false);
    }
  }, []);

  // Generate random new inbox
  const generateRandomInbox = async () => {
    setLoading(true);
    try {
      const { data } = await API.post('/inbox/random', {});
      setCurrentAddress(data.inbox.address);
      setInboxDetails(data.inbox);
      localStorage.setItem('tempmail_current_address', data.inbox.address);
      setSelectedEmail(null);
      await fetchEmails(data.inbox.address, true);
    } catch (err) {
      console.error('Failed to generate random inbox:', err);
    } finally {
      setLoading(false);
    }
  };

  // Create custom inbox
  const createCustomInbox = async (customUsername, requestedDomain) => {
    setLoading(true);
    try {
      const { data } = await API.post('/inbox/custom', {
        customUsername,
        requestedDomain,
      });
      setCurrentAddress(data.inbox.address);
      setInboxDetails(data.inbox);
      localStorage.setItem('tempmail_current_address', data.inbox.address);
      setSelectedEmail(null);
      await fetchEmails(data.inbox.address, true);
      return data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete current inbox
  const deleteCurrentInbox = async () => {
    if (!currentAddress) return;
    try {
      await API.delete(`/inbox/${currentAddress}`);
      await generateRandomInbox();
    } catch (err) {
      console.error('Failed to delete inbox:', err);
    }
  };

  // Socket.io Real-time Event Subscription + Auto-Refresh Polling
  useEffect(() => {
    fetchDomains();

    if (!currentAddress) {
      generateRandomInbox();
      return;
    }

    // Load emails immediately on mount
    fetchEmails(currentAddress, true);

    const socket = getSocket();
    socket.emit('join_inbox', currentAddress);

    // Handle real-time new email via Socket.io
    const handleNewEmail = (newEmail) => {
      if (newEmail.inboxAddress?.toLowerCase() === currentAddress?.toLowerCase()) {
        setEmails((prev) => [newEmail, ...prev]);
        setNewEmailNotice(true);
        playNotificationPing();
        setTimeout(() => setNewEmailNotice(false), 5000);
      }
    };

    socket.on('email_received', handleNewEmail);

    // Silent background polling every 5 seconds (showLoading = false so spinner doesn't flicker)
    const pollInterval = setInterval(() => {
      fetchEmails(currentAddress, false);
    }, 5000);

    return () => {
      socket.emit('leave_inbox', currentAddress);
      socket.off('email_received', handleNewEmail);
      clearInterval(pollInterval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAddress]);

  return (
    <InboxContext.Provider
      value={{
        currentAddress,
        setCurrentAddress,
        inboxDetails,
        emails,
        selectedEmail,
        setSelectedEmail,
        availableDomains,
        loading,
        newEmailNotice,
        generateRandomInbox,
        createCustomInbox,
        deleteCurrentInbox,
        fetchEmails,
      }}
    >
      {children}
    </InboxContext.Provider>
  );
};

export const useInbox = () => useContext(InboxContext);
