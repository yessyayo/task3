import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignUpSchema } from '../utils/validations';
import Header2 from '../components/Header2';

const AddressForm = () => {
  const navigate = useNavigate();

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('Latitude:', latitude);
          console.log('Longitude:', longitude);
        },
        (error) => {
          console.error('Location error:', error.message);
          alert('Could not access your location. Please enable permissions.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#FBFBFB] px-4'>
      <div className='w-full max-w-md bg-white px-6 md:px-10 py-8 rounded-[24px] shadow-[#5C636B14] flex flex-col gap-8'>

        <Header2 text='Add address' text2='3 of 3' />

        <Formik
          initialValues={{ address: '' }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            alert(`submitted values: ${JSON.stringify(values, null, 2)}`);
          }}
        >
          {({ values }) => (
            <Form className='space-y-8'>
              {/* Address Field */}
              <div>
                <div className='relative'>
                  <Field
                    name='address'
                    className='w-full border border-[#DDDDDD] px-4 py-4 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-purple-500'
                  />
                  {values.address.trim() === '' && (
                    <label
                      htmlFor='address'
                      className='absolute left-4 top-[18px] text-sm font-medium flex items-center gap-2 text-gray-500 pointer-events-none'
                    >
                      <i className='pi pi-search'></i>
                      Search for address
                    </label>
                  )}
                </div>
                <ErrorMessage name='address' component='div' className='text-red-500 text-sm mt-1' />
                <p className='text-sm mt-1 text-[#1A0710A6]'>
                  Your address is not visible to other users
                </p>
              </div>

              {/* Buttons */}
              <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                {/* Use current location */}
                <button
                  type='button'
                  onClick={handleUseLocation}
                  className='w-full sm:w-auto border border-[#EF498F47] bg-inherit text-[#5932EA] px-4 py-2 rounded-[12px] flex items-center justify-center gap-2 text-sm font-bold'
                >
                  <i className='pi pi-map-marker'></i>
                  Use current location
                </button>

                {/* Add manually */}
                <button
                  type='button'
                  onClick={() => navigate("/fulladdress")}
                  className='w-full sm:w-auto border border-[#EF498F47] bg-inherit text-[#5932EA] px-4 py-2 rounded-[12px] text-sm font-bold'
                >
                  Add manually
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Info Box */}
        <div className='w-full flex flex-col gap-4 mt-10'>
          <h3 className='text-lg font-bold leading-[28px]'>Sharing your address shows:</h3>
          <div className='flex flex-col sm:gap-6 gap-3 text-sm'>
            <span className='flex items-center gap-2'>
              <i className='pi pi-users'></i>
              People near you
            </span>
            <span className='flex items-center gap-2'>
              <i className='pi pi-clock'></i>
              Estimated delivery time
            </span>
            <span className='flex items-center gap-2'>
              <i className='pi pi-dollar'></i>
              Estimate shipping costs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
