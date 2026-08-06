import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

export default function ApiDocs() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeLang, setActiveLang] = useState('curl'); // 'curl', 'js', 'python'

  const copySnippet = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const snippets = {
    createInbox: {
      curl: `curl -X POST http://localhost:5001/api/v1/inbox/custom \\
  -H "X-API-Key: tm_YOUR_DEVELOPER_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"customUsername": "test_bot"}'`,
      js: `const response = await fetch('http://localhost:5001/api/v1/inbox/custom', {
  method: 'POST',
  headers: {
    'X-API-Key': 'tm_YOUR_DEVELOPER_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ customUsername: 'test_bot' })
});
const data = await response.json();
console.log(data);`,
      python: `import requests

url = "http://localhost:5001/api/v1/inbox/custom"
headers = {"X-API-Key": "tm_YOUR_DEVELOPER_KEY"}
data = {"customUsername": "test_bot"}

res = requests.post(url, headers=headers, json=data)
print(res.json())`,
    },
    getMessages: {
      curl: `curl -X GET http://localhost:5001/api/v1/email/inbox/test_bot@tempmail.local \\
  -H "X-API-Key: tm_YOUR_DEVELOPER_KEY"`,
      js: `const res = await fetch('http://localhost:5001/api/v1/email/inbox/test_bot@tempmail.local', {
  headers: { 'X-API-Key': 'tm_YOUR_DEVELOPER_KEY' }
});
const data = await res.json();
console.log(data);`,
      python: `import requests

res = requests.get(
  "http://localhost:5001/api/v1/email/inbox/test_bot@tempmail.local",
  headers={"X-API-Key": "tm_YOUR_DEVELOPER_KEY"}
)
print(res.json())`,
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-4">
          <Terminal className="w-4 h-4 text-emerald-500" />
          <span>REST API Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Developer REST API</h1>
        <p className="text-sm text-slate-600 dark:text-gray-400">
          Automate temporary email generation and message ingestion inside your test suites.
        </p>
      </div>

      {/* Language Selector Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex bg-slate-200 dark:bg-gray-900 p-1.5 rounded-2xl border border-slate-300 dark:border-gray-800 text-xs">
          {['curl', 'js', 'python'].map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-5 py-2 rounded-xl font-bold uppercase tracking-wider transition ${
                activeLang === lang ? 'bg-brand-600 text-white shadow' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Endpoint 1: Create Inbox */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs font-mono">POST</span>
            <span className="font-mono text-sm text-slate-900 dark:text-white font-semibold">/api/v1/inbox/custom</span>
          </div>
          <button
            onClick={() => copySnippet(snippets.createInbox[activeLang], 1)}
            className="flex items-center space-x-1.5 text-xs text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg transition"
          >
            {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedIndex === 1 ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <p className="text-xs text-slate-600 dark:text-gray-400">Generates a new active temporary email address for API key owner.</p>
        <pre className="bg-slate-900 text-brand-300 p-4 rounded-2xl border border-slate-800 font-mono text-xs overflow-x-auto">
          {snippets.createInbox[activeLang]}
        </pre>
      </div>

      {/* Endpoint 2: Fetch Messages */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-gray-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-lg bg-brand-500/20 text-brand-600 dark:text-brand-400 font-bold text-xs font-mono">GET</span>
            <span className="font-mono text-sm text-slate-900 dark:text-white font-semibold">/api/v1/email/inbox/:address</span>
          </div>
          <button
            onClick={() => copySnippet(snippets.getMessages[activeLang], 2)}
            className="flex items-center space-x-1.5 text-xs text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg transition"
          >
            {copiedIndex === 2 ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedIndex === 2 ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <p className="text-xs text-slate-600 dark:text-gray-400">Retrieves array of parsed emails received for target address.</p>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-2xl border border-slate-800 font-mono text-xs overflow-x-auto">
          {snippets.getMessages[activeLang]}
        </pre>
      </div>
    </div>
  );
}
