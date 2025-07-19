import React, { JSX,useContext, useState,useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthContext } from '../context/AuthContext';
import AppTextInput from '../components/AppTextInput';
import FormError from '../components/FormError';
import styles from '../styles/globalStyles';

interface AuthContextType {
  login: (email: string, password: string) => Promise<void>;
}

interface LoginFormValues {
  email: string;
  password: string;
}

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function LoginScreen({ navigation }: Props): JSX.Element {
  
  const { login } = useContext(AuthContext) as unknown as AuthContextType;

  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setError('');
         const result = await login(values.email, values.password);
if (typeof result === 'string') {
  setError(result);
  return;
}
        } catch (e: any) {
          setError(e.message || 'Something went wrong');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <View style={styles.container}>
          <AppTextInput
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={errors.email}
            touched={touched.email}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <AppTextInput
            label="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
            touched={touched.password}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.toggle}>{showPassword ? 'Hide' : 'Show'} Password</Text>
          </TouchableOpacity>

          <FormError error={error} />

          <TouchableOpacity
            onPress={handleSubmit as () => void}
            style={styles.submitButton}
            disabled={isSubmitting}
          >
            <Text style={styles.buttonTitle}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.link}>Go to Signup</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}
