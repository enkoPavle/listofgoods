import {appApi} from '@/store/services/app';
import {Product} from '@/types/products';

export const chatApi = appApi.injectEndpoints({
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
    createProduct: build.mutation<Product, Product>({
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
  useCreateProductMutation,
} = chatApi;
