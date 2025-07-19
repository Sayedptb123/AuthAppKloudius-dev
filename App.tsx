import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import globalStyles, { colors } from './src/styles/globalStyles';

const App = (): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={globalStyles.splashScreen}>
        <StatusBar animated barStyle="dark-content" backgroundColor="#fff" />
        <Text style={globalStyles.splashText}>
          Kl
          <ActivityIndicator
            size={60}
            color={colors.primaryColor}
            style={globalStyles.loader}
          />
          udius
        </Text>
        <Text style={[globalStyles.splashText, styles.subText]}>
          Authapp Demo
        </Text>
      </View>
    );
  }

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  subText: {
    color: '#000',
    fontSize: 28,
  },
});

export default App;
