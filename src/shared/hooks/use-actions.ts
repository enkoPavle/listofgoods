import {useMemo} from "react"

import {useAppDispatch} from "@/store"
import {setProducts, setCustomProduct, setProductsSort} from "@/store/features/products"

import {bindActionCreators} from "@reduxjs/toolkit"

const rootActions = {
  setProducts,
  setCustomProduct,
  setProductsSort
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
