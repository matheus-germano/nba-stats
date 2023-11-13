import { useEffect, useState } from 'react';
import { Player } from '../../../app/types/player';
import { PlayerFieldGoalPercentageChart } from '../PlayerFieldGoalPercentageChart';
import { useFieldGoalPercentageController } from './useFieldGoalPercentageController';
import { cn } from '../../../app/utils/cn';
import { playerPictures } from '../../../app/config/constants';
import blankPicture from '../../../assets/images/blankProfile.jpg';

export function FieldGoalPercentage() {
  const { topFiveScorers } = useFieldGoalPercentageController();

  const [activePlayer, setActivePlayer] = useState<Player>({} as Player);

  const activePlayerIndex = topFiveScorers?.findIndex(player => player.id === activePlayer.id);

  function handlePlayerClick(player: Player) {
    setActivePlayer(player);
  }

  useEffect(() => {
    if (topFiveScorers) {
      setActivePlayer(topFiveScorers[0]);
    }
  }, []);

  return (
    <article className='w-full bg-white rounded-lg flex flex-col p-4'>
      <h3 className='font-bold text-xl mb-2'>Top 5 Scorers Field Goal Percentage</h3>
      <main className='w-full flex justify-between'>
        <div className='flex-[7] max-h-[240px]'>
          {
            activePlayerIndex > -1 ? <PlayerFieldGoalPercentageChart player={activePlayer} /> : <p>Selecione um jogador...</p>
          }
        </div>
        <aside className='flex flex-col'>
          {topFiveScorers?.map((scorer, index) => (
            <img
              key={scorer.id}
              src={playerPictures[playerPictures.findIndex(player => player.name === scorer.player_name)]?.picture ?? blankPicture}
              alt={scorer.player_name}
              title={scorer.player_name}
              onClick={() => handlePlayerClick(scorer)}
              className={cn(
                'h-14 w-14 p-1 rounded-lg border-2 border-transparent',
                index === activePlayerIndex && 'border-nba-blue'
              )}
            />
          ))}
        </aside>
      </main>
    </article>
  );
}