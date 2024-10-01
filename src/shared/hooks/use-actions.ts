import {useMemo} from "react"

import {useAppDispatch} from "@/store"
import {setProducts, setProductsSort} from "@/store/features/products"

import {bindActionCreators} from "@reduxjs/toolkit"

const rootActions = {
  setProducts,
  setProductsSort
}

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
