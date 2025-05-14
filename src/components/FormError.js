import React from 'react';
import { Text, StyleSheet } from 'react-native';

const FormError = ({ error }) => {
  if (!error) return null;
  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default FormError;
