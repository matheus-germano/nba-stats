import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';

export function AppLayout() {
  return (
    <div className='h-full flex'>
      <Sidebar />
      <main className='w-full h-[100vh] flex flex-col'>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}