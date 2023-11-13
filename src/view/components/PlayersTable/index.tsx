import { Player } from '../../../app/types/player';

interface PlayersTableProps {
  players: Player[]
}

export function PlayersTable({ players = [] }: PlayersTableProps) {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-6 py-3'>Name</th>
              <th className='px-6 py-3'>Age</th>
              <th className='px-6 py-3'>Games</th>
              <th className='px-6 py-3'>Field Goals</th>
              <th className='px-6 py-3'>Field Attempts</th>
              <th className='px-6 py-3'>Points</th>
              <th className='px-6 py-3'>Assists</th>
              <th className='px-6 py-3'>Rebounds</th>
            </tr>
          </thead>
          <tbody>
            {
              players && players.length > 0 ? players.map(player => (
                <tr
                  key={player.id}
                  className='bg-white border-b'
                >
                  <th className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>{player.player_name}</th>
                  <td className='px-6 py-4'>{player.age}</td>
                  <td className='px-6 py-4'>{player.games}</td>
                  <td className='px-6 py-4'>{player.field_goals}</td>
                  <td className='px-6 py-4'>{player.field_attempts}</td>
                  <td className='px-6 py-4'>{player.PTS}</td>
                  <td className='px-6 py-4'>{player.AST}</td>
                  <td className='px-6 py-4'>{player.DRB + player.ORB}</td>
                </tr>
              )) : (
                <tr className='bg-white border-b'>
                  <td className='px-6 py-4'>No players found</td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                </tr>
              )
            }
          </tbody>
        </table>
    </div>
  );
}