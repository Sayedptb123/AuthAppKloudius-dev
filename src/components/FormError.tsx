import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors'; 

interface FormErrorProps {
  error?: string;
}

const FormError: React.FC<FormErrorProps> = ({ error }) => {
  if (!error) return null;

  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.error, 
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 12,
  },
});

export default FormError;
