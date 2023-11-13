import { useTopFiveSeasonScorersController } from './useTopFiveSeasonScorersController';

export function TopFiveSeasonScorers() {
  const { topFiveScorers } = useTopFiveSeasonScorersController();

  return (
    <article className='w-full bg-white rounded-lg flex flex-col p-4'>
      <h3 className='font-bold text-xl mb-2'>Top Scorers</h3>
      {topFiveScorers?.map(scorer => (
        <div key={scorer.id} className='w-full flex items-center justify-between'>
          <p>{scorer.player_name}</p>
          <p>{scorer.PTS} points</p>
        </div>
      ))}
    </article>
  );
}