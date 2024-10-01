import {useCallback, useState} from "react"

export const useRefresh = (refetch: () => void) => {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refresh = useCallback(async () => {
    setIsRefreshing(true)
    refetch()
    setIsRefreshing(false)
  }, [refetch])
  return {isRefreshing, refresh}
}
