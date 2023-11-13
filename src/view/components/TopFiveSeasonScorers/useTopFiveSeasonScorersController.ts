import { useQuery } from '@tanstack/react-query';
import { seasonsService } from '../../../app/services/seasonsService';

export function useTopFiveSeasonScorersController() {
  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['season', 'scorers'],
    queryFn: () => seasonsService.scorers()
  });

  const topFiveScorers = data?.results.slice(0, 5);

  return {
    data,
    topFiveScorers,
    isLoading,
    isError
  };
}