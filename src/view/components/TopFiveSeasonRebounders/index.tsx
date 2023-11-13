import { Shield } from '@phosphor-icons/react';
import { useTopFiveSeasonReboundersController } from './useTopFiveSeasonReboundersController';

export function TopFiveSeasonRebounders() {
  const { topFiveRebounders } = useTopFiveSeasonReboundersController();

  return (
    <article className='w-[calc(100vw-2.25rem)] lg:w-full min-w-[350px] bg-white rounded-lg flex flex-col gap-2 p-4'>
      <header className='w-full flex items-center justify-between'>
        <h3 className='font-bold text-xl'>Top Rebounders</h3>
        <Shield size={24} />
      </header>
      <main>
        {topFiveRebounders?.map(rebounder => (
          <div key={rebounder.id} className='w-full flex items-center justify-between'>
            <p>{rebounder.player_name}</p>
            <p><span className='font-bold'>{rebounder.DRB}</span> rebounds</p>
          </div>
        ))}
      </main>
    </article>
  );
}