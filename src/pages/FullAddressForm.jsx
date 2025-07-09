import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignUpSchema } from '../utils/adderessvalidation';
import PrimaryButton from '../components/PrimaryButton';
import Header2 from '../components/Header2'; 

const FullAddressForm = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#FBFBFB] px-4'>
      <div className='w-full max-w-md bg-white px-4 md:px-10 py-8 rounded-[24px] shadow-[#5C636B14] flex flex-col gap-8'>
        <Header2 text='Add address' text2='3 of 3' />

        <Formik
          initialValues={{ street: '', apartment: '', city: '', state: '', zip: '' }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            alert(`submitted values: ${JSON.stringify(values, null, 2)}`);
            navigate('/registrationsuccess');
          }}
        >
          {() => (
            <Form className='space-y-5'>
              {/* Street */}
              <div>
                <Field
                  name='street'
                  placeholder='Street address'
                  className='w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-gray-500'
                />
                <ErrorMessage name='street' component='div' className='text-red-500 text-sm mt-1' />
              </div>

              {/* Apartment */}
              <div>
                <Field
                  name='apartment'
                  placeholder='Apartment (optional)'
                  className='w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-gray-500'
                />
              </div>

              {/* City */}
              <div>
                <Field
                  name='city'
                  placeholder='City'
                  className='w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-gray-500'
                />
                <ErrorMessage name='city' component='div' className='text-red-500 text-sm mt-1' />
              </div>

              {/* State and Zip */}
              <div className='flex flex-col md:flex-row gap-4'>
                {/* State */}
                <div className='w-full'>
                  <Field
                    name='state'
                    placeholder='State'
                    className='w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-gray-500'
                  />
                  <ErrorMessage name='state' component='div' className='text-red-500 text-sm mt-1' />
                </div>

                {/* Zip */}
                <div className='w-full'>
                  <Field
                    name='zip'
                    placeholder='Zip Code'
                    className='w-full px-4 py-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-gray-500'
                  />
                  <ErrorMessage name='zip' component='div' className='text-red-500 text-sm mt-1' />
                </div>
              </div>

              {/* Submit Button */}
              <PrimaryButton content='Save information' type='submit' />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FullAddressForm;
