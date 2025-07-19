import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthContext } from '../context/AuthContext';
import { AuthContextType } from '../hooks/useAuth';
import { useAuth } from '../hooks/useAuth';

import AppTextInput from '../components/AppTextInput';
import FormError from '../components/FormError';
import styles from '../styles/globalStyles';

type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
};

type SignupScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Signup'>;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const { signup } = useAuth();


  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const handleSignup = async (
    values: { name: string; email: string; password: string },
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    try {
      setErrorMessage('');
      await signup(values.name, values.email, values.password);
    } catch (error: any) {
      setErrorMessage(error.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) =>
        handleSignup(values, setSubmitting)
      }
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
            label="Name"
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            error={errors.name}
            touched={touched.name}
          />

          <AppTextInput
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={errors.email}
            touched={touched.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <AppTextInput
            label="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
            touched={touched.password}
            secureTextEntry={!isPasswordVisible}
          />

          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Text style={styles.toggle}>
              {isPasswordVisible ? 'Hide' : 'Show'} Password
            </Text>
          </TouchableOpacity>

          <FormError error={errorMessage} />

          <TouchableOpacity
            onPress={handleSubmit as () => void}
            style={styles.submitButton}
            disabled={isSubmitting}
          >
            <Text style={styles.buttonTitle}>
              {isSubmitting ? 'Signing up...' : 'Signup'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default SignupScreen;
