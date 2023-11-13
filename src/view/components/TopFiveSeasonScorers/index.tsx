import { Basketball } from '@phosphor-icons/react';
import { useTopFiveSeasonScorersController } from './useTopFiveSeasonScorersController';

export function TopFiveSeasonScorers() {
  const { topFiveScorers } = useTopFiveSeasonScorersController();

  return (
    <article className='w-[calc(100vw-2.25rem)] lg:w-full min-w-[350px] bg-white rounded-lg flex flex-col gap-2 p-4'>
      <header className='w-full flex items-center justify-between'>
        <h3 className='font-bold text-xl'>Top Scorers</h3>
        <Basketball size={24} />
      </header>
      <main>
        {topFiveScorers?.map(scorer => (
          <div key={scorer.id} className='w-full flex items-center justify-between'>
            <p>{scorer.player_name}</p>
            <p><span className='font-bold'>{scorer.PTS}</span> points</p>
          </div>
        ))}
      </main>
    </article>
  );
}