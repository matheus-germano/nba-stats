import { Scorer } from '../../types/scorer';
import { httpClient } from '../httpClient';

interface ScorersResponse {
  results: Scorer[]
}

export async function scorers() {
  const { data } = await httpClient.get<ScorersResponse>('playerdata/topscorers/total/season/2023');

  return data;
}