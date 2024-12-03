import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BusinessProfile {
  businessName: string;
  address: string;
  phone: string;
  email: string;
  taxId: string;
  currency: string;
  timezone: string;
}

export function BusinessProfileScreen() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<BusinessProfile>({
    businessName: 'My Business',
    address: '123 Business St, City, Country',
    phone: '+1234567890',
    email: 'business@example.com',
    taxId: 'TAX123456',
    currency: 'USD',
    timezone: 'UTC-5',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your save logic here
    console.log('Saving business profile:', profile);
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
        <h1 className="text-2xl font-bold text-gray-900">Business Profile</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              value={profile.businessName}
              onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              id="address"
              value={profile.address}
              onChange={(e) => setProfile({ ...profile, address: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="taxId" className="block text-sm font-medium text-gray-700 mb-1">
              Tax ID / Registration Number
            </label>
            <input
              type="text"
              id="taxId"
              value={profile.taxId}
              onChange={(e) => setProfile({ ...profile, taxId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
              Currency
            </label>
            <select
              id="currency"
              value={profile.currency}
              onChange={(e) => setProfile({ ...profile, currency: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
            </select>
          </div>

          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
              Timezone
            </label>
            <select
              id="timezone"
              value={profile.timezone}
              onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="UTC-12">UTC-12</option>
              <option value="UTC-11">UTC-11</option>
              <option value="UTC-10">UTC-10</option>
              <option value="UTC-9">UTC-9</option>
              <option value="UTC-8">UTC-8 (PST)</option>
              <option value="UTC-7">UTC-7 (MST)</option>
              <option value="UTC-6">UTC-6 (CST)</option>
              <option value="UTC-5">UTC-5 (EST)</option>
              <option value="UTC-4">UTC-4</option>
              <option value="UTC-3">UTC-3</option>
              <option value="UTC-2">UTC-2</option>
              <option value="UTC-1">UTC-1</option>
              <option value="UTC+0">UTC+0</option>
              <option value="UTC+1">UTC+1</option>
              <option value="UTC+2">UTC+2</option>
              <option value="UTC+3">UTC+3</option>
              <option value="UTC+4">UTC+4</option>
              <option value="UTC+5">UTC+5</option>
              <option value="UTC+6">UTC+6</option>
              <option value="UTC+7">UTC+7</option>
              <option value="UTC+8">UTC+8</option>
              <option value="UTC+9">UTC+9</option>
              <option value="UTC+10">UTC+10</option>
              <option value="UTC+11">UTC+11</option>
              <option value="UTC+12">UTC+12</option>
            </select>
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
