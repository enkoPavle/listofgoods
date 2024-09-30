import {ProductSchemaType} from '@/features/products/schemas';
import {appApi} from '@/store/services/app';
import {Product} from '@/types/products';

export const productsApi = appApi.injectEndpoints({
  endpoints: build => ({
    getProducts: build.query<Product[], void>({
      query: () => ({
        url: `/products`,
      }),
      providesTags: ['Products'],
    }),
    getProduct: build.query<Product, Product['id']>({
      query: productId => ({
        url: `products/${productId}`,
      }),
    }),
    getProductCategories: build.query<string[], void>({
      query: () => ({
        url: `/products/categories`,
      }),
    }),
    createProduct: build.mutation<Pick<Product, 'id'>, ProductSchemaType>({
      query: body => ({
        url: `/products`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetProductCategoriesQuery,
  useCreateProductMutation,
} = productsApi;
