import {useActions} from "@/shared/hooks"
import {useAppSelector} from "@/store"
import {useGetProductsQuery} from "@/store/services/products"

export const useProductsData = () => {
  const {data, customData, sort} = useAppSelector((state) => state.products)
  const {isLoading, isError, refetch} = useGetProductsQuery(
    {sort},
    {
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      pollingInterval: 60_000
    }
  )

  const {setProductsSort} = useActions()

  return {
    data: data.concat(customData),
    customData,
    sort,
    isLoading,
    isError,
    setProductsSort,
    refetch
  }
}
