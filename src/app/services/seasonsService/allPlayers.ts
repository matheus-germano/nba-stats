import { Player } from '../../types/player';
import { httpClient } from '../httpClient';

interface AllPlayersResponse {
  results: Player[]
}

export async function allPlayers() {
  const { data } = await httpClient.get<AllPlayersResponse>('playerdata/season/2023');
  
  return data;
}