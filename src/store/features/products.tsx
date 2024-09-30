import {productsApi} from '../services/products';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import isEqual from 'react-fast-compare';
import {Product} from '@/types/products';

const initialState: Product[] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (_, {payload}: PayloadAction<Product[]>) => payload,
    resetProducts: () => initialState,
  },
  extraReducers: buider => {
    buider.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, {payload}) => {
        if (!isEqual(state, payload)) {
          return payload;
        }
      },
    );
  },
});

export const {setProducts} = productsSlice.actions;

export default productsSlice;
