import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
    street: Yup.string().required('Street address is required'),
    apartment: Yup.string(),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip code is required'),
    
});


