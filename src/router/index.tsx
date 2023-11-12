import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../view/pages/Dashboard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}