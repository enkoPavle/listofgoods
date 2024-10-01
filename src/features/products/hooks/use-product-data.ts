import {useMemo} from "react"

import {useAppSelector} from "@/store"
import {useGetProductQuery} from "@/store/services/products"

import {Product} from "@/types/products"

export const useProductData = (productId: Product["id"]) => {
  const products = useAppSelector((state) => state.products)
  const {data, isLoading, isError} = useGetProductQuery(productId, {
    skip: !productId
  })

  const product = useMemo(() => {
    if (data) {
      return data
    } else {
      return (
        products.data?.find((product) => product.id === productId) ??
        products.customData?.find((product) => product.id === productId)
      )
    }
  }, [products, data])

  return {
    data: product,
    isLoading,
    isError
  }
}
