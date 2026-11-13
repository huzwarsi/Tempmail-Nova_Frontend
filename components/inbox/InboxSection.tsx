'use client';

import React from 'react';
import InboxList from './InboxList';
import EmailViewer from './EmailViewer';
import { useInbox } from '../../context/InboxContext';

export default function InboxSection() {
  const { selectedEmail, setSelectedEmail } = useInbox();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl sm:max-w-4xl mx-auto">
        {selectedEmail ? (
          <EmailViewer
            email={selectedEmail}
            onBack={() => setSelectedEmail(null)}
            onDelete={() => setSelectedEmail(null)}
          />
        ) : (
          <InboxList />
        )}
      </div>
    </div>
  );
}

