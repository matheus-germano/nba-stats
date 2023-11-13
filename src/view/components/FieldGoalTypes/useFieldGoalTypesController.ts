import { useQuery } from '@tanstack/react-query';
import { seasonsService } from '../../../app/services/seasonsService';
import { Player } from '../../../app/types/player';

export function useFieldGoalTypesController() {
  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['season', 'scorers'],
    queryFn: () => seasonsService.scorers()
  });

  const topFiveScorers: Player[] | undefined = data?.results.slice(0, 5);
  
  return {
    data,
    topFiveScorers,
    isLoading,
    isError
  };
}