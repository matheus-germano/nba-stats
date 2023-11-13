import { FieldGoalPercentage } from '../components/FieldGoalPercentage';
import { FieldGoalTypes } from '../components/FieldGoalTypes';
import { SeasonScores } from '../components/SeasonScores';
import { TopFiveSeasonAssists } from '../components/TopFiveSeasonAssists';
import { TopFiveSeasonRebounders } from '../components/TopFiveSeasonRebounders';
import { TopFiveSeasonScorers } from '../components/TopFiveSeasonScorers';

export function Dashboard() {
  return (
    <div className='w-full min-h-[calc(100vh-60px)] bg-zinc-100 flex flex-col gap-8 mx-auto p-4 overflow-y-auto overflow-x-hidden'>
      <header>
        <h1 className='font-black text-4xl'>Dashboard</h1>
      </header>
      <main className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <TopFiveSeasonScorers />
          <TopFiveSeasonAssists />
          <TopFiveSeasonRebounders />
        </div>
        <div className='flex gap-4'>
          <FieldGoalPercentage />
          <FieldGoalTypes />
        </div>
        <SeasonScores />
      </main>
    </div>
  );
}