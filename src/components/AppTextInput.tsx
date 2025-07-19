import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import { colors } from '../styles/colors';

interface AppTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  error,
  touched,
  ...textInputProps
}) => {
  const showError = touched && !!error;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, showError && styles.inputError]}
        {...textInputProps}
      />
      {showError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    fontSize: 16,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    marginTop: 6,
    color: colors.error,
    fontSize: 13,
  },
});

export default AppTextInput;
