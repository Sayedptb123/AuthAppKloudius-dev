import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import AppTextInput from '../components/AppTextInput';
import FormError from '../components/FormError';

import styles from '../styles/globalStyles';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setError('');
          await login(values.email, values.password);
        } catch (e) {
          setError(e.message);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
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

         
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton} disabled={isSubmitting}>
        <Text style={styles.buttonTitle}>{isSubmitting ? 'Logging in...' : 'Login'}</Text>
      </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.link}>Go to Signup</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}
