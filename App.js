import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import styles from './src/styles/globalStyles';
import { colors} from './src/styles/globalStyles';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.splashScreen}>
        <StatusBar 
          animated={true}
          barStyle="dark-content"
          backgroundColor="#fff"
        />
        <Text style={styles.splashText}>Kl{<ActivityIndicator  size={60} color={colors.primaryColor} style={styles.loader} />}udius</Text>
        <Text style={[styles.splashText,{color:"#000",fontSize:28}]}>Authapp Demo</Text>
        
      </View>
    );
  }

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}


