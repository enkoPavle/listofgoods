import {useCallback, useState} from "react"

export const useRefresh = (refetch: () => void) => {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refresh = useCallback(async () => {
    try {
      setIsRefreshing(true)
      refetch()
    } catch (error) {
      console.log(error)
    } finally {
      setIsRefreshing(false)
    }
  }, [refetch])

  return {isRefreshing, refresh}
}
