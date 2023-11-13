import { useTopFiveSeasonAssistsController } from './useTopFiveSeasonAssistsController';

export function TopFiveSeasonAssists() {
  const { topFiveAssists } = useTopFiveSeasonAssistsController();

  return (
    <article className='w-full bg-white rounded-lg flex flex-col p-4'>
      <h3 className='font-bold text-xl mb-2'>Top Assists</h3>
      {topFiveAssists?.map(assist => (
        <div key={assist.id} className='w-full flex items-center justify-between'>
          <p>{assist.player_name}</p>
          <p>{assist.AST} assists</p>
        </div>
      ))}
    </article>
  );
}