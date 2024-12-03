import React from 'react';
import { ChevronRight, Store, Users, Settings, CreditCard, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProfileImage } from '../src/components/ProfileImage';

interface SettingsOption {
  title: string;
  path: string;
  icon: React.ReactNode;
  description: string;
}

export default function SettingsScreen() {
  const settingsOptions: SettingsOption[] = [
    { 
      title: 'Business Profile',
      path: '/settings/business',
      icon: <Store className="w-6 h-6 text-blue-600" />,
      description: 'Manage your business details and preferences'
    },
    { 
      title: 'User Management',
      path: '/users',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      description: 'Add and manage staff accounts'
    },
    { 
      title: 'Profile Settings',
      path: '/settings/profile',
      icon: <UserCircle className="w-6 h-6 text-blue-600" />,
      description: 'Update your personal information'
    },
    { 
      title: 'POS Setup',
      path: '/settings/pos',
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      description: 'Configure your point of sale settings'
    },
    { 
      title: 'Account Settings',
      path: '/settings/account',
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      description: 'Manage your account preferences'
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen bg-gray-50">
      <div className="mb-8 text-center">
        <ProfileImage />
        <h1 className="text-2xl font-bold mt-4 text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account and preferences</p>
      </div>

      <div className="space-y-3">
        {settingsOptions.map((option, index) => (
          <Link
            key={index}
            to={option.path}
            className="flex items-center p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-sm"
          >
            <div className="mr-4">
              {option.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{option.title}</h3>
              <p className="text-sm text-gray-500">{option.description}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
