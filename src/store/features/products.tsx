import {productsApi} from "../services/products"

import isEqual from "react-fast-compare"

import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import {Product, ProductSortValue} from "@/types/products"

const initialState: {
  data: Product[]
  sort: ProductSortValue
} = {
  data: [],
  sort: "asc"
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (
      _,
      {payload}: PayloadAction<{data: Product[]; sort: ProductSortValue}>
    ) => payload,
    setProductsSort: (state, {payload}: PayloadAction<ProductSortValue>) => {
      state.sort = payload
    },
    resetProducts: () => initialState
  },
  extraReducers: (buider) => {
    buider.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, {payload}) => {
        if (!isEqual(state.data, payload)) {
          return {
            sort: state.sort,
            data: payload
          }
        }
      }
    )
  }
})

export const {setProducts, setProductsSort} = productsSlice.actions

export default productsSlice
