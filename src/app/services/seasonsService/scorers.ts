import { Player } from '../../types/player';
import { httpClient } from '../httpClient';

interface ScorersResponse {
  results: Player[]
}

export async function scorers() {
  const { data } = await httpClient.get<ScorersResponse>('playerdata/topscorers/total/season/2023');

  return data;
}