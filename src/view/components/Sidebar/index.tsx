import { Link } from 'react-router-dom';
import nbaLogo from '../../../assets/images/logo-nba.png';

export function Sidebar() {
  return (
    <nav className='h-[100vh] w-80 bg-nba-red text-white flex flex-col gap-4 p-2 sticky'>
      <header className='flex items-end'>
        <img
          src={nbaLogo}
          alt="NBA Logo"
          width={64}
          height={64}
        />
        <h1 className='font-black text-4xl'>Stats</h1>
      </header>
      <ul className='flex flex-col list-none'>
        <li className='w-full p-2 rounded-lg hover:bg-white hover:text-nba-red transition-all'>
          <Link to='/'>Dashboard</Link>
        </li>
        <li className='w-full p-2 rounded-lg hover:bg-white hover:text-nba-red transition-all'>
          <Link to='/all-players'>All Players</Link>
        </li>
        <li className='w-full p-2 rounded-lg hover:bg-white hover:text-nba-red transition-all'>
          <Link to='/scorers'>Scorers</Link>
        </li>
        <li className='w-full p-2 rounded-lg hover:bg-white hover:text-nba-red transition-all'>
          <Link to='/assists'>Assists</Link>
        </li>
        <li className='w-full p-2 rounded-lg hover:bg-white hover:text-nba-red transition-all'>
          <Link to='/rebounders'>Rebounders</Link>
        </li>
      </ul>
    </nav>
  );
}