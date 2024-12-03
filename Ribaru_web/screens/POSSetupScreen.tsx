import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface POSSettings {
  receiptHeader: string;
  receiptFooter: string;
  taxRate: number;
  printerName: string;
  printerType: string;
  showLogo: boolean;
  enableTips: boolean;
  tipPresets: number[];
  allowCustomAmount: boolean;
  requireSignature: boolean;
  emailReceipts: boolean;
}

export function POSSetupScreen() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState<POSSettings>({
    receiptHeader: 'Welcome to Our Store',
    receiptFooter: 'Thank you for your business!',
    taxRate: 8.25,
    printerName: 'Star TSP100',
    printerType: 'thermal',
    showLogo: true,
    enableTips: true,
    tipPresets: [10, 15, 20],
    allowCustomAmount: true,
    requireSignature: true,
    emailReceipts: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your save logic here
    console.log('Saving POS settings:', settings);
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
        <h1 className="text-2xl font-bold text-gray-900">POS Setup</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Receipt Settings</h2>
          
          <div>
            <label htmlFor="receiptHeader" className="block text-sm font-medium text-gray-700 mb-1">
              Receipt Header
            </label>
            <textarea
              id="receiptHeader"
              value={settings.receiptHeader}
              onChange={(e) => setSettings({ ...settings, receiptHeader: e.target.value })}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="receiptFooter" className="block text-sm font-medium text-gray-700 mb-1">
              Receipt Footer
            </label>
            <textarea
              id="receiptFooter"
              value={settings.receiptFooter}
              onChange={(e) => setSettings({ ...settings, receiptFooter: e.target.value })}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="taxRate" className="block text-sm font-medium text-gray-700 mb-1">
              Tax Rate (%)
            </label>
            <input
              type="number"
              id="taxRate"
              value={settings.taxRate}
              onChange={(e) => setSettings({ ...settings, taxRate: parseFloat(e.target.value) })}
              step="0.01"
              min="0"
              max="100"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Show Logo on Receipt</h3>
              <p className="text-sm text-gray-500">Display your business logo at the top of receipts</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.showLogo}
                onChange={(e) => setSettings({ ...settings, showLogo: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Printer Settings</h2>

          <div>
            <label htmlFor="printerName" className="block text-sm font-medium text-gray-700 mb-1">
              Printer Name
            </label>
            <input
              type="text"
              id="printerName"
              value={settings.printerName}
              onChange={(e) => setSettings({ ...settings, printerName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="printerType" className="block text-sm font-medium text-gray-700 mb-1">
              Printer Type
            </label>
            <select
              id="printerType"
              value={settings.printerType}
              onChange={(e) => setSettings({ ...settings, printerType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="thermal">Thermal Printer</option>
              <option value="impact">Impact Printer</option>
              <option value="inkjet">Inkjet Printer</option>
            </select>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
          <h2 className="text-lg font-medium text-gray-900">Payment Settings</h2>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Enable Tips</h3>
              <p className="text-sm text-gray-500">Allow customers to add tips to their payment</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.enableTips}
                onChange={(e) => setSettings({ ...settings, enableTips: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {settings.enableTips && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tip Presets (%)
              </label>
              <div className="flex gap-2">
                {settings.tipPresets.map((tip, index) => (
                  <input
                    key={index}
                    type="number"
                    value={tip}
                    onChange={(e) => {
                      const newPresets = [...settings.tipPresets];
                      newPresets[index] = parseInt(e.target.value);
                      setSettings({ ...settings, tipPresets: newPresets });
                    }}
                    className="w-20 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                    max="100"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Allow Custom Amount</h3>
              <p className="text-sm text-gray-500">Let customers enter custom tip amounts</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.allowCustomAmount}
                onChange={(e) => setSettings({ ...settings, allowCustomAmount: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Require Signature</h3>
              <p className="text-sm text-gray-500">Require customer signature for card payments</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.requireSignature}
                onChange={(e) => setSettings({ ...settings, requireSignature: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Email Receipts</h3>
              <p className="text-sm text-gray-500">Send receipts to customer email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.emailReceipts}
                onChange={(e) => setSettings({ ...settings, emailReceipts: e.target.checked })}
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
