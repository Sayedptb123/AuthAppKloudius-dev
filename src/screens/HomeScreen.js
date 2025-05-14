import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/globalStyles.js';

export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={[styles.container,{justifyContent:"space-around"}]}>
      <View>
      <Text style={styles.title}>Welcome, {user.name}</Text>
      <Text style={styles.label}>{user.email}</Text>
      </View>
      <TouchableOpacity onPress={logout} style={[styles.submitButton,{}]}>
        <Text style={styles.buttonTitle}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
