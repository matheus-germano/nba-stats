import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../view/pages/Dashboard';
import { AppLayout } from '../view/layouts/AppLayout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}