import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
    email: Yup.string()
    .email('invalid email')
    .required('Email is required'),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('password is required')
});
