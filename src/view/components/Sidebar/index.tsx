import { Link } from 'react-router-dom';
import nbaLogo from '../../../assets/images/logo-nba.png';
import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { cn } from '../../../app/utils/cn';

export function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenuState() {
    setIsMenuOpen(prev => !prev);
  }

  function handleClickOnLink() {
    setIsMenuOpen(false);
  }

  return (
    <div className={cn(
      'h-[90px] w-full lg:h-[100vh] lg:w-80 bg-nba-red text-white flex flex-row items-center justify-between lg:flex-col lg:justify-start lg:items-start gap-4 p-2 relative',
      isMenuOpen && 'h-[100vh] justify-start flex-col'
    )}>
      <List
          size={36}
          onClick={handleToggleMenuState}
          className={cn('block lg:hidden absolute top-4 right-4 cursor-pointer',
            isMenuOpen && 'hidden'
          )}
        />
        <X
          size={36}
          onClick={handleToggleMenuState}
          className={cn('block lg:hidden absolute top-4 right-4 cursor-pointer',
            !isMenuOpen && 'hidden'
          )}
        />
      <header className='flex items-end'>
        <img
          src={nbaLogo}
          alt="NBA Logo"
          width={64}
          height={64}
        />
        <h1 className='font-black text-4xl'>Stats</h1>
      </header>
      <nav className='flex w-full'>
        <ul className={cn(
          'hidden w-full lg:flex lg:flex-col list-none',
          isMenuOpen && 'block'
          )}>
          <li className='w-full p-2 rounded-lg hover:bg-white hover:text-nba-red transition-all'>
            <Link to='/' onClick={handleClickOnLink}>Dashboard</Link>
          </li>
          <li className='w-full p-2 rounded-lg hover:bg-white hover:text-nba-red transition-all'>
            <Link to='/all-players' onClick={handleClickOnLink}>All Players</Link>
          </li>
          <li className='w-full p-2 rounded-lg hover:bg-white hover:text-nba-red transition-all'>
            <Link to='/scorers' onClick={handleClickOnLink}>Scorers</Link>
          </li>
          <li className='w-full p-2 rounded-lg hover:bg-white hover:text-nba-red transition-all'>
            <Link to='/assists' onClick={handleClickOnLink}>Assists</Link>
          </li>
          <li className='w-full p-2 rounded-lg hover:bg-white hover:text-nba-red transition-all'>
            <Link to='/rebounders' onClick={handleClickOnLink}>Rebounders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}