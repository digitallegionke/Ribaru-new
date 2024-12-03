import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PencilSquareIcon, TrashIcon, PlusIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Staff';
  status: 'Active' | 'Inactive';
  lastActive: string;
}

export default function UserManagementScreen() {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  
  const [users] = React.useState<User[]>([
    { 
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      lastActive: '2 hours ago'
    },
    { 
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Manager',
      status: 'Active',
      lastActive: '1 day ago'
    },
    { 
      id: '3',
      name: 'Bob Wilson',
      email: 'bob@example.com',
      role: 'Staff',
      status: 'Inactive',
      lastActive: '5 days ago'
    },
  ]);

  const handleEdit = (userId: string) => {
    navigate(`/users/edit/${userId}`);
  };

  const confirmDelete = (userId: string) => {
    setUserToDelete(userId);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    if (userToDelete) {
      // Add your delete logic here
      console.log('Delete user:', userToDelete);
      setShowDeleteModal(false);
      setUserToDelete(null);
    }
  };

  const getRoleColor = (role: User['role']) => {
    switch (role) {
      case 'Admin':
        return 'bg-blue-100 text-blue-800';
      case 'Manager':
        return 'bg-purple-100 text-purple-800';
      case 'Staff':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: User['status']) => {
    return status === 'Active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate('/settings')}
          className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <ArrowLeftIcon className="h-6 w-6 text-gray-500" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
              <p className="text-sm text-gray-500">Manage your team members and their roles</p>
            </div>
            <button
              onClick={() => navigate('/users/add')}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Add User
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                      title="Edit user"
                    >
                      <PencilSquareIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => confirmDelete(user.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete user"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Delete</h3>
            <p className="text-sm text-gray-500 mb-4">
              Are you sure you want to delete this user? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
