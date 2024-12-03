import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Edit2, Trash2, Plus, UserCircle } from 'lucide-react-native';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Staff';
  status: 'Active' | 'Inactive';
  lastActive: string;
}

export function UserManagementScreen() {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  
  const [users] = useState<User[]>([
    { 
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      lastActive: '2h ago'
    },
    { 
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Manager',
      status: 'Active',
      lastActive: '1d ago'
    },
    { 
      id: '3',
      name: 'Bob Wilson',
      email: 'bob@example.com',
      role: 'Staff',
      status: 'Inactive',
      lastActive: '5d ago'
    },
  ]);

  const handleEdit = (userId: string) => {
    router.push(`/users/edit/${userId}`);
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
        return '#0029FF';
      case 'Manager':
        return '#9333EA';
      case 'Staff':
        return '#16A34A';
      default:
        return '#666666';
    }
  };

  const getRoleBackgroundColor = (role: User['role']) => {
    switch (role) {
      case 'Admin':
        return '#E6EAFF';
      case 'Manager':
        return '#F3E8FF';
      case 'Staff':
        return '#DCFCE7';
      default:
        return '#F5F5F5';
    }
  };

  const getStatusColor = (status: User['status']) => {
    return status === 'Active' ? '#16A34A' : '#DC2626';
  };

  const getStatusBackgroundColor = (status: User['status']) => {
    return status === 'Active' ? '#DCFCE7' : '#FEE2E2';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Management</Text>
      </View>

      <View style={styles.subHeader}>
        <Text style={styles.subHeaderTitle}>Team Members</Text>
        <Text style={styles.subHeaderDescription}>Manage your team members and their roles</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.userList}>
          {users.map((user) => (
            <View key={user.id} style={styles.userCard}>
              <View style={styles.userInfo}>
                <View style={styles.userAvatar}>
                  <UserCircle size={32} color="#666666" />
                </View>
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>{user.name}</Text>
                  <Text style={styles.userEmail}>{user.email}</Text>
                </View>
              </View>

              <View style={styles.userMeta}>
                <View style={[
                  styles.badge,
                  { backgroundColor: getRoleBackgroundColor(user.role) }
                ]}>
                  <Text style={[
                    styles.badgeText,
                    { color: getRoleColor(user.role) }
                  ]}>{user.role}</Text>
                </View>

                <View style={[
                  styles.badge,
                  { backgroundColor: getStatusBackgroundColor(user.status) }
                ]}>
                  <Text style={[
                    styles.badgeText,
                    { color: getStatusColor(user.status) }
                  ]}>{user.status}</Text>
                </View>

                <Text style={styles.lastActive}>{user.lastActive}</Text>
              </View>

              <View style={styles.userActions}>
                <TouchableOpacity 
                  onPress={() => handleEdit(user.id)}
                  style={styles.actionButton}
                >
                  <Edit2 size={20} color="#0029FF" />
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => confirmDelete(user.id)}
                  style={styles.actionButton}
                >
                  <Trash2 size={20} color="#DC2626" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => router.push('/users/add')}
      >
        <Plus size={24} color="#FFFFFF" />
        <Text style={styles.addButtonText}>Add User</Text>
      </TouchableOpacity>

      <Modal
        visible={showDeleteModal}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Delete</Text>
            <Text style={styles.modalText}>
              Are you sure you want to delete this user? This action cannot be undone.
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowDeleteModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.deleteButton]}
                onPress={handleDelete}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEBFF',
    gap: 16,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
  },
  subHeader: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEBFF',
  },
  subHeaderTitle: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
    marginBottom: 4,
  },
  subHeaderDescription: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
  },
  content: {
    flex: 1,
  },
  userList: {
    padding: 16,
    gap: 12,
  },
  userCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
  },
  userEmail: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
  },
  userMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Medium',
  },
  lastActive: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
    marginLeft: 'auto',
  },
  userActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  actionButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F5F5FF',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#0029FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  addButtonText: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Medium',
    color: '#FFFFFF',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    width: '90%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Medium',
    color: '#000000',
    marginBottom: 8,
  },
  modalText: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
    marginBottom: 24,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  modalButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: '#F5F5FF',
  },
  cancelButtonText: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#666666',
  },
  deleteButton: {
    backgroundColor: '#DC2626',
  },
  deleteButtonText: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#FFFFFF',
  },
});
