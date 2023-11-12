import { Player } from '../../types/player';
import { httpClient } from '../httpClient';

interface AssistsResponse {
  results: Player[]
}

export async function assists() {
  const { data } = await httpClient.get<AssistsResponse>('top_assists/totals/2023');
  
  return data;
}