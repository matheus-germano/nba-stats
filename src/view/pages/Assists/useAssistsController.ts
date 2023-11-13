import { useQuery } from '@tanstack/react-query';
import { seasonsService } from '../../../app/services/seasonsService';

export function useAssistsController() {
  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['season', 'assists'],
    queryFn: () => seasonsService.assists()
  });

  return {
    data: data?.results,
    isLoading,
    isError
  };
}