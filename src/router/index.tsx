import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../view/pages/Dashboard';
import { AppLayout } from '../view/layouts/AppLayout';
import { AllPlayers } from '../view/pages/AllPlayers';
import { Scorers } from '../view/pages/Scorers';
import { Assists } from '../view/pages/Assists';
import { Rebounders } from '../view/pages/Rebounders';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/all-players" element={<AllPlayers />} />
          <Route path="/scorers" element={<Scorers />} />
          <Route path="/assists" element={<Assists />} />
          <Route path="/rebounders" element={<Rebounders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}