import { useQuery } from '@tanstack/react-query';
import { seasonsService } from '../../../app/services/seasonsService';

export function useReboundersController() {
  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['season', 'rebounders'],
    queryFn: () => seasonsService.rebounders()
  });

  return {
    data: data?.results,
    isLoading,
    isError
  };
}