import { useTopFiveSeasonReboundersController } from './useTopFiveSeasonReboundersController';

export function TopFiveSeasonRebounders() {
  const { topFiveRebounders } = useTopFiveSeasonReboundersController();

  return (
    <article className='w-full bg-white rounded-lg flex flex-col p-4'>
      <h3 className='font-bold text-xl mb-2'>Top Rebounders</h3>
      {topFiveRebounders?.map(rebounder => (
        <div key={rebounder.id} className='w-full flex items-center justify-between'>
          <p>{rebounder.player_name}</p>
          <p>{rebounder.DRB} rebounds</p>
        </div>
      ))}
    </article>
  );
}