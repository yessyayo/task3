import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PrimaryButton from '../components/PrimaryButton';
import Header2 from '../components/Header2';
import { infoSchema } from '../utils/infovalidation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PersonalInfoForm = () => {
  const navigate = useNavigate();
  const birthdayRef = useRef(null);

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#FBFBFB] px-4'>
      <div className='w-full max-w-md bg-white px-6 md:px-10 py-6 rounded-[24px] shadow-[#5C636B14] flex flex-col gap-8'>
        <Header2 text='Personal information' text2='2 of 3' />
        <Formik
          initialValues={{
            fullName: '',
            gender: '',
            phoneNumber: '',
            countryCode: '+234',
            birthday: null,
          }}
          validationSchema={infoSchema}
          onSubmit={(values) => {
            console.log('Form submitted:', values);
            alert(`Submitted: ${JSON.stringify(values, null, 2)}`);
            navigate('/addressform');
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className='space-y-6'>
              {/* Full Name */}
              <div>
                <Field
                  name='fullName'
                  type='text'
                  placeholder='Full name'
                  className='w-full border border-[#DDDDDD] px-4 py-4 rounded-[12px]'
                />
                <ErrorMessage name='fullName' component='div' className='text-red-500 text-sm' />
              </div>

              {/* Gender */}
              <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                <label className='text-[16px] font-bold'>Gender:</label>
                <div className='flex gap-4'>
                  <label className='flex gap-2 items-center'>
                    <Field type='radio' name='gender' value='Male' />
                    Male
                  </label>
                  <label className='flex gap-2 items-center'>
                    <Field type='radio' name='gender' value='Female' />
                    Female
                  </label>
                </div>
              </div>
              <ErrorMessage name='gender' component='div' className='text-red-500 text-sm' />

              {/* Phone Number */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <Field
                  as='select'
                  name='countryCode'
                  className='w-full sm:w-[100px] border border-[#DDDDDD] px-4 py-4 rounded-[12px]'
                >
                  <option value='+234'>+234</option>
                  <option value='+1'>+1</option>
                  <option value='+44'>+44</option>
                </Field>
                <Field
                  name='phoneNumber'
                  type='tel'
                  placeholder='Enter phone'
                  className='flex-1 border border-[#DDDDDD] px-4 py-4 rounded-[12px]'
                />
              </div>
              <ErrorMessage name='phoneNumber' component='div' className='text-red-500 text-sm' />

              {/* Birthday */}
              <div>
                <div className='relative w-full'>
                  <DatePicker
                    selected={values.birthday}
                    onChange={(date) => setFieldValue('birthday', date)}
                    placeholderText='Birthday'
                    className='w-full border border-[#DDDDDD] px-4 py-4 rounded-[12px] pr-44'
                    dateFormat='MMMM d, yyyy'
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode='select'
                    minDate={new Date('1800-01-01')}
                    maxDate={new Date()}
                    ref={birthdayRef}
                  />
                  <span className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 flex items-center gap-2'>
                    <span className='text-sm'>Optional</span>
                    <button type='button' onClick={() => birthdayRef.current?.setFocus()}>
                      <i className='pi pi-calendar'></i>
                    </button>
                  </span>
                </div>
                <p className='text-[13px] text-[#1A0710A6] mt-1'>
                  Let us know about your birthday so as not to miss a gift
                </p>
              </div>

              {/* Submit */}
              <PrimaryButton content='Save information' type='submit' />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
