import { StyleSheet } from 'react-native';

export const colors = {
  primaryColor: '#00b58e',
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: colors.primaryColor,
    height: 53,
    borderRadius: 6,
    justifyContent: 'center',
    marginTop: 46,
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold' as const,
  },
  label: {
    marginBottom: 5,
    color: colors.primaryColor,
    fontWeight: 'bold' as const,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonTitle: {
    color: colors.white,
    textAlign: 'center' as const,
    fontWeight: 'bold' as const,
  },
  link: {
    color: colors.primaryColor,
    marginTop: 40,
    textAlign: 'center' as const,
    fontWeight: '700' as const,
  },
  toggle: {
    color: '#666',
    marginBottom: 10,
    textAlign: 'right' as const,
  },
  splashScreen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
  splashText: {
    fontSize: 88,
    fontWeight: 'bold' as const,
    color: colors.primaryColor,
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
    color: colors.primaryColor,
  },
});

export default styles;
