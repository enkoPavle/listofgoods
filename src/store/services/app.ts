import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const appApi = createApi({
  reducerPath: 'appApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
  }),
  endpoints: () => ({}),
});
