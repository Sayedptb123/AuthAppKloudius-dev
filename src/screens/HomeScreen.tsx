import React, { JSX } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles';
import { useAuth } from '../hooks/useAuth';

export default function HomeScreen(): JSX.Element {
  const { user, logout } = useAuth();

  return (
    <View style={[styles.container, { justifyContent: 'space-around' }]}>
      <View>
        <Text style={styles.title}>Welcome, {user?.name}</Text>
        <Text style={styles.label}>{user?.email}</Text>
      </View>
      <TouchableOpacity onPress={logout} style={styles.submitButton}>
        <Text style={styles.buttonTitle}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
