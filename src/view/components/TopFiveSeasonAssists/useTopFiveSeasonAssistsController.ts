import { useQuery } from '@tanstack/react-query';
import { seasonsService } from '../../../app/services/seasonsService';

export function useTopFiveSeasonAssistsController() {
  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['season', 'assists'],
    queryFn: () => seasonsService.assists()
  });

  const topFiveAssists = data?.results.slice(0, 5);

  return {
    data,
    topFiveAssists,
    isLoading,
    isError
  };
}