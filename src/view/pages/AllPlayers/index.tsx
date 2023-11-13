import { PlayersTable } from '../../components/PlayersTable';
import { useAllPlayersController } from './useAllPlayersController';

export function AllPlayers() {
  const { data } = useAllPlayersController();

  return (
    <div className='w-full min-h-[calc(100vh-60px)] bg-zinc-100 flex flex-col gap-8 mx-auto p-4 overflow-y-auto overflow-x-hidden'>
      <header>
        <h1 className='font-black text-4xl'>All Players</h1>
      </header>
      <main className='flex flex-col gap-4'>
        <PlayersTable players={data ?? []} />
      </main>
    </div>
  );
}