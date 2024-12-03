import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Mail, Shield, Bell } from 'lucide-react';

interface AccountSettings {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  twoFactorEnabled: boolean;
  recoveryEmail: string;
  loginAlerts: boolean;
  dataBackup: boolean;
  activityLog: boolean;
}

export function AccountSettingsScreen() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState<AccountSettings>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false,
    recoveryEmail: 'backup@example.com',
    loginAlerts: true,
    dataBackup: true,
    activityLog: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your save logic here
    console.log('Saving account settings:', settings);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen bg-gray-50">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate('/settings')}
          className="p-2 hover:bg-gray-100 rounded-lg mr-4"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-medium text-gray-900">Password Settings</h2>
          </div>

          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              value={settings.currentPassword}
              onChange={(e) => setSettings({ ...settings, currentPassword: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={settings.newPassword}
              onChange={(e) => setSettings({ ...settings, newPassword: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={settings.confirmPassword}
              onChange={(e) => setSettings({ ...settings, confirmPassword: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.twoFactorEnabled}
                onChange={(e) => setSettings({ ...settings, twoFactorEnabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div>
            <label htmlFor="recoveryEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Recovery Email
            </label>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="recoveryEmail"
                value={settings.recoveryEmail}
                onChange={(e) => setSettings({ ...settings, recoveryEmail: e.target.value })}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-medium text-gray-900">Security Alerts</h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Login Alerts</h3>
              <p className="text-sm text-gray-500">Get notified of new sign-ins to your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.loginAlerts}
                onChange={(e) => setSettings({ ...settings, loginAlerts: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Data Backup</h3>
              <p className="text-sm text-gray-500">Automatically backup your data daily</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.dataBackup}
                onChange={(e) => setSettings({ ...settings, dataBackup: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Activity Log</h3>
              <p className="text-sm text-gray-500">Keep a log of your account activity</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.activityLog}
                onChange={(e) => setSettings({ ...settings, activityLog: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/settings')}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
