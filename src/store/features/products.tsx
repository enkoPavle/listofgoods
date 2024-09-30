import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Product} from '@/types/products';

const initialState: Product[] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (_, {payload}: PayloadAction<Product[]>) => payload,
    resetProducts: () => initialState,
  },
});

export const {setProducts} = productsSlice.actions;

export default productsSlice;
