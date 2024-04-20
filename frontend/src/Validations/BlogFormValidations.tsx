import * as Yup from 'yup';

export const CreateBlogValidation = Yup.object().shape({
    title: Yup.string().required('Name is required'),
    description: Yup.string().required('Name is required'),
})

export const EditBlogValidation = Yup.object().shape({
    title: Yup.string().required('Name is required'),
    description: Yup.string().required('Name is required'),
})