import { useQuery } from '@tanstack/react-query';
import { seasonsService } from '../../../app/services/seasonsService';

export function useScorersController() {
  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['season', 'scorers'],
    queryFn: () => seasonsService.scorers()
  });

  return {
    data: data?.results,
    isLoading,
    isError
  };
}