import { Player } from '../../types/player';
import { httpClient } from '../httpClient';

interface SeasonsProps {
  playerName: string
}

interface SeasonsResponse {
  results: Player[]
}

export async function seasons({ playerName }: SeasonsProps) {
  const { data } = await httpClient.get<SeasonsResponse>(`playerdata/name/${playerName}`);

  return data;
}