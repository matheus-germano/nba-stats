import { Strategy } from '@phosphor-icons/react';
import { useTopFiveSeasonAssistsController } from './useTopFiveSeasonAssistsController';

export function TopFiveSeasonAssists() {
  const { topFiveAssists } = useTopFiveSeasonAssistsController();

  return (
    <article className='w-full bg-white rounded-lg flex flex-col gap-2 p-4'>
      <header className='w-full flex items-center justify-between'>
        <h3 className='font-bold text-xl'>Top Assists</h3>
        <Strategy size={24} />
      </header>
      <main>
        {topFiveAssists?.map(assist => (
          <div key={assist.id} className='w-full flex items-center justify-between'>
            <p>{assist.player_name}</p>
            <p><span className='font-bold'>{assist.AST}</span> assists</p>
          </div>
        ))}
      </main>
    </article>
  );
}