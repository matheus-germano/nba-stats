import { useQuery } from '@tanstack/react-query';
import { seasonsService } from '../../../app/services/seasonsService';

export function useAllPlayersController() {
  const {
    data,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['season', 'players'],
    queryFn: () => seasonsService.allPlayers()
  });

  return {
    data: data?.results,
    isLoading,
    isError
  };
}