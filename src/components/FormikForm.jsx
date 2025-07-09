import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignUpSchema } from '../utils/validations';
import PrimaryButton from './PrimaryButton';
import { auth } from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const FormikForm = ({ mode = 'signup', onSuccess }) => {
  const navigate = useNavigate();
  const isSignup = mode === 'signup';
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        const authFunction = isSignup ? createUserWithEmailAndPassword : signInWithEmailAndPassword;

        authFunction(auth, values.email, values.password)
          .then((userCredential) => {
            console.log(`${isSignup ? 'Signup' : 'Login'} successful`, userCredential.user);
            if (isSignup) {
              navigate('/personalinfo');
            } else if (onSuccess) {
              onSuccess();
            }
          })
          .catch((error) => {
            setSubmitting(false);
            if (error.code === 'auth/email-already-in-use') {
              setErrors({ email: 'This email is already registered.' });
            } else if (error.code === 'auth/invalid-email') {
              setErrors({ email: 'Please enter a valid email address.' });
            } else if (error.code === 'auth/wrong-password') {
              setErrors({ password: 'Incorrect password.' });
            } else if (error.code === 'auth/user-not-found') {
              setErrors({ email: 'User not found.' });
            } else if (error.code === 'auth/weak-password') {
              setErrors({ password: 'Password should be at least 6 characters.' });
            } else {
              setErrors({ email: error.message });
            }
          });
      }}
    >
      {() => (
        <Form className='space-y-4'>
          {/* Email */}
          <div className='w-full'>
            <Field
              name='email'
              type='email'
              placeholder='Email Address'
              className='w-full px-4 py-4 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-gray-500'
            />
            <ErrorMessage name='email' component='div' className='text-red-500 text-sm mt-1' />
          </div>

          {/* Password */}
          <div className='relative w-full'>
            <Field
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className='w-full px-4 py-4 border border-[#DDDDDD] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#5932EA] placeholder:text-sm placeholder:text-gray-500 pr-10'
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-4 top-3 cursor-pointer text-gray-500 text-xl'
            >
              <i className={`pi ${showPassword ? 'pi-eye-slash' : 'pi-eye'}`}></i>
            </span>
            <ErrorMessage name='password' component='div' className='text-red-500 text-sm mt-1' />
          </div>

          {/* Submit Button */}
          <PrimaryButton
            content={isSignup ? 'Create Account' : 'Login to Dashboard'}
            type='submit'
          />

          <div className='flex gap-[12px] items-center mt-2'>
            <input type='checkbox' id='news' />
            <label htmlFor='news' className='text-[#1A0710D9]'>
              {isSignup ? 'Send me news and promotions' : 'Remember me'}
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
