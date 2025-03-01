import { AppSidebar } from '@/components/app-sidebar/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';
import { Toaster } from 'sonner';

export const Route = createFileRoute('/_authed')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      redirect({ to: '/login' });
    }
  },
  component: AuthedLayout,
});

function AuthedLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="ml-2 mt-2">
        <SidebarTrigger />
        <Outlet />
        <Toaster />
      </main>
    </SidebarProvider>
  );
}
