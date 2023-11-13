import { useQuery } from '@tanstack/react-query';
import { seasonsService } from '../../../app/services/seasonsService';

export function useTopFiveSeasonReboundersController() {
  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['season', 'rebounders'],
    queryFn: () => seasonsService.rebounders()
  });

  const topFiveRebounders = data?.results.slice(0, 5);

  return {
    data,
    topFiveRebounders,
    isLoading,
    isError
  };
}