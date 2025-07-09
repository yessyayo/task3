import * as Yup from 'yup';

export const infoSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    gender: Yup.string().required('Gender is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    countryCode: Yup.string().required('Country code is required'),
    birthday: Yup.date().nullable(),
});