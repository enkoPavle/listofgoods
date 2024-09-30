import {useAppSelector} from '@/store';
import {useGetProductsQuery} from '@/store/services/products';

export const useProductsData = () => {
  const {isLoading, isError, refetch} = useGetProductsQuery(undefined, {
    pollingInterval: 60_000,
  });

  const data = useAppSelector(state => state.products);

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};
