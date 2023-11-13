import { useSeasonScoresController } from './useSeasonScoresController';
import { playerPictures } from '../../../app/config/constants';
import blankPicture from '../../../assets/images/blankProfile.jpg';
import { cn } from '../../../app/utils/cn';
import { useState } from 'react';
import { Player } from '../../../app/types/player';
import { SeasonScoresChart } from '../SeasonScoresChart';

export function SeasonScores() {
  const { seasons, topFiveScorers, setPlayerToSearch } = useSeasonScoresController();

  const [activePlayer, setActivePlayer] = useState<Player>({} as Player);

  const activePlayerIndex = topFiveScorers?.findIndex(player => player.id === activePlayer.id);

  function handlePlayerClick(player: Player) {
    setActivePlayer(player);
    setPlayerToSearch(player.player_name);
  }
  
  return (
    <article className='w-full bg-white rounded-lg flex flex-col p-4'>
      <h3 className='font-bold text-xl mb-2'>Season Top Scorers Scores</h3>
      <main className='w-full flex flex-col lg:flex-row justify-between gap-10'>
        <div className='flex-[7] max-h-[400px] flex flex-col gap-2'>
          {
            (activePlayerIndex !== undefined && activePlayerIndex > -1) ? (
              <>
                <p>{activePlayer.player_name}</p>
                <SeasonScoresChart seasons={seasons} />
              </>
            ) : <p>Selecione um jogador...</p>
          }
        </div>
        <aside className='w-full lg:w-max justify-center flex lg:flex-col'>
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