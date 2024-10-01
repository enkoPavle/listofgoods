import {productsApi} from "../services/products"

import isEqual from "react-fast-compare"

import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import {Product, ProductSortValue} from "@/types/products"

const initialState: {
  data: Product[]
  customData: Product[]
  sort: ProductSortValue
} = {
  data: [],
  customData: [],
  sort: "asc"
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (
      state,
      {payload}: PayloadAction<{data: Product[]; sort: ProductSortValue}>
    ) => {
      return {
        sort: payload.sort,
        data: payload.data,
        customData: state.data
      }
    },
    setCustomProduct: (state, {payload}: PayloadAction<Product>) => {
      state.customData = state.customData.concat(payload)
    },
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
            customData: state.customData,
            data: payload
          }
        }
      }
    )
  }
})

export const {setProducts, setCustomProduct, setProductsSort} = productsSlice.actions

export default productsSlice
