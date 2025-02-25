import type { AuthContext } from '@/context/auth-context';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Toaster } from 'sonner';

type RouterContext = {
  auth: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
      <Toaster position="top-center" />
    </>
  ),
});
