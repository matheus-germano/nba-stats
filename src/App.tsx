import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Router } from './router';
import { Footer } from './view/components/Footer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Footer />
    </QueryClientProvider>
  );
}
