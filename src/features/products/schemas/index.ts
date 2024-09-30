import * as Yup from 'yup';

export const productSchema = Yup.object({
  title: Yup.string()
    .min(3, 'Title must be at least 3 characters long')
    .required('Title is required'),
  price: Yup.number()
    .min(0, 'Price must be a positive number')
    .required('Price is required'),
  description: Yup.string()
    .min(10, 'Description must be at least 10 characters long')
    .required('Description is required'),
});

export type ProductSchemaType = Yup.InferType<typeof productSchema>;
