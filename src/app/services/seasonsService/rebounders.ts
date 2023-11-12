import { Player } from '../../types/player';
import { httpClient } from '../httpClient';

interface AssistsResponse {
  results: Player[]
}

export async function rebounders() {
  const { data } = await httpClient.get<AssistsResponse>('top_rebounds/totals/2023');

  return data;
}