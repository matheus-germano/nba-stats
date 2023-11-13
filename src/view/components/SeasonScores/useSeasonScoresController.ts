import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { playersService } from '../../../app/services/playersService';
import { seasonsService } from '../../../app/services/seasonsService';
import { Player } from '../../../app/types/player';

export function useSeasonScoresController() {
  const [playerToSearch, setPlayerToSearch] = useState<string>('');

  const {
    data,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['season', 'player'],
    queryFn: () => playersService.seasons({ playerName: playerToSearch }),
    enabled: false
  });

  const {
    data: topScorers,
  } = useQuery({
    queryKey: ['season', 'scorers'],
    queryFn: () => seasonsService.scorers()
  });

  const topFiveScorers: Player[] | undefined = topScorers?.results.slice(0, 5);

  useEffect(() => {
    refetch();
  }, [playerToSearch, refetch]);
  
  return {
    topFiveScorers,
    seasons: data?.results,
    setPlayerToSearch,
    isLoading,
    isError
  };
}