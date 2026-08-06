import React, { useState, useEffect } from 'react';
import API from '../services/api';
import { LayoutDashboard, Globe, Users, Activity, Plus, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('stats'); // 'stats', 'domains', 'users', 'logs'
  const [dashboardData, setDashboardData] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [domainsList, setDomainsList] = useState([]);
  const [logsList, setLogsList] = useState([]);
  const [newDomainName, setNewDomainName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [dashRes, domainsRes, usersRes, logsRes] = await Promise.all([
        API.get('/admin/dashboard'),
        API.get('/domain/public'),
        API.get('/admin/users'),
        API.get('/admin/logs'),
      ]);
      setDashboardData(dashRes.data);
      setDomainsList(domainsRes.data.domains || []);
      setUsersList(usersRes.data.users || []);
      setLogsList(logsRes.data.logs || []);
    } catch (err) {
      console.warn('Failed to load admin stats:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddDomain = async (e) => {
    e.preventDefault();
    if (!newDomainName) return;
    try {
      await API.post('/domain/add', { name: newDomainName });
      setNewDomainName('');
      loadDashboardData();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to add domain');
    }
  };

  const handleDeleteDomain = async (id) => {
    if (!window.confirm('Delete this domain?')) return;
    try {
      await API.delete(`/domain/${id}`);
      loadDashboardData();
    } catch (err) {
      alert('Failed to delete domain');
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto my-20 p-8 glass-panel rounded-3xl text-center space-y-4 border border-slate-200 dark:border-gray-800">
        <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm text-slate-500 dark:text-gray-400">Loading System Metrics...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Header & Navigation Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-gray-800">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Admin Console</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Disposable Mail Administration</h1>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap bg-slate-200 dark:bg-gray-900 p-1.5 rounded-2xl border border-slate-300 dark:border-gray-800 text-xs">
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl font-semibold transition ${
              activeTab === 'stats' ? 'bg-amber-500 text-black shadow' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('domains')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl font-semibold transition ${
              activeTab === 'domains' ? 'bg-amber-500 text-black shadow' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Domains</span>
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl font-semibold transition ${
              activeTab === 'users' ? 'bg-amber-500 text-black shadow' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Users</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl font-semibold transition ${
              activeTab === 'logs' ? 'bg-amber-500 text-black shadow' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>System Logs</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Stats Overview */}
      {activeTab === 'stats' && dashboardData && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-gray-800">
              <div className="text-xs text-slate-500 dark:text-gray-400 font-mono uppercase mb-1">Total Users</div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white">{dashboardData.stats.totalUsers}</div>
            </div>
            <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-gray-800">
              <div className="text-xs text-slate-500 dark:text-gray-400 font-mono uppercase mb-1">Active Inboxes</div>
              <div className="text-3xl font-extrabold text-brand-600 dark:text-brand-400">{dashboardData.stats.activeInboxes}</div>
            </div>
            <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-gray-800">
              <div className="text-xs text-slate-500 dark:text-gray-400 font-mono uppercase mb-1">Total Emails Received</div>
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">{dashboardData.stats.totalEmails}</div>
            </div>
            <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-gray-800">
              <div className="text-xs text-slate-500 dark:text-gray-400 font-mono uppercase mb-1">Spam Blocked</div>
              <div className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">{dashboardData.stats.spamCount}</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Domain Manager */}
      {activeTab === 'domains' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Disposable Domains</h3>

          <form onSubmit={handleAddDomain} className="flex gap-3">
            <input
              type="text"
              required
              placeholder="New Domain Name (e.g. tempmail.local)"
              value={newDomainName}
              onChange={(e) => setNewDomainName(e.target.value)}
              className="flex-1 bg-slate-100 dark:bg-gray-950 border border-slate-200 dark:border-gray-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 font-mono"
            />
            <button
              type="submit"
              className="flex items-center space-x-1.5 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs rounded-xl transition"
            >
              <Plus className="w-4 h-4" />
              <span>Add Domain</span>
            </button>
          </form>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-gray-800 text-slate-500 dark:text-gray-400 font-mono uppercase">
                  <th className="pb-3">Domain Name</th>
                  <th className="pb-3">Default</th>
                  <th className="pb-3">Usage Count</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-gray-800/60 text-slate-700 dark:text-gray-300">
                {domainsList.map((d) => (
                  <tr key={d._id || d.name}>
                    <td className="py-3 font-mono font-semibold text-slate-900 dark:text-white">@{d.name}</td>
                    <td className="py-3">{d.isDefault ? 'YES' : 'NO'}</td>
                    <td className="py-3 text-slate-500 dark:text-gray-400">{d.usageCount || 0}</td>
                    <td className="py-3">
                      <button
                        onClick={() => handleDeleteDomain(d._id)}
                        className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Users List */}
      {activeTab === 'users' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Registered System Users</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-gray-800 text-slate-500 dark:text-gray-400 font-mono uppercase">
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Role</th>
                  <th className="pb-3">Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-gray-800/60 text-slate-700 dark:text-gray-300">
                {usersList.map((u) => (
                  <tr key={u._id}>
                    <td className="py-3 font-semibold text-slate-900 dark:text-white">{u.name}</td>
                    <td className="py-3 font-mono text-slate-500 dark:text-gray-400">{u.email}</td>
                    <td className="py-3">{u.role}</td>
                    <td className="py-3 uppercase text-brand-600 dark:text-brand-400 font-bold">{u.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: System Logs */}
      {activeTab === 'logs' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity Logs</h3>
          <div className="bg-slate-100 dark:bg-gray-950 p-4 rounded-2xl border border-slate-200 dark:border-gray-800 font-mono text-xs text-slate-700 dark:text-gray-400 space-y-2 max-h-96 overflow-y-auto">
            {logsList.length === 0 ? (
              <p className="text-slate-500 dark:text-gray-600">[System Log] No critical error flags logged.</p>
            ) : (
              logsList.map((log, index) => (
                <div key={index} className="flex space-x-3">
                  <span className="text-slate-500 dark:text-gray-600">{new Date(log.createdAt).toLocaleTimeString()}</span>
                  <span className="text-amber-500">[{log.level.toUpperCase()}]</span>
                  <span className="text-slate-800 dark:text-gray-300">{log.message}</span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
