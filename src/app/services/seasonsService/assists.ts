import { Assist } from '../../types/assist';
import { httpClient } from '../httpClient';

interface AssistsResponse {
  results: Assist[]
}

export async function assists() {
  const { data } = await httpClient.get<AssistsResponse>('top_assists/totals/2023');
  
  return data;
}