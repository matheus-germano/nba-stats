import { PlayersTable } from '../../components/PlayersTable';
import { useScorersController } from './useScorersController';

export function Scorers() {
  const { data } = useScorersController();

  return (
    <div className='w-full min-h-[calc(100vh-60px)] bg-zinc-100 flex flex-col gap-8 mx-auto p-4 overflow-y-auto overflow-x-hidden'>
      <header>
        <h1 className='font-black text-4xl'>Scorers</h1>
      </header>
      <main className='flex flex-col gap-4'>
        <PlayersTable players={data ?? []} />
      </main>
    </div>
  );
}