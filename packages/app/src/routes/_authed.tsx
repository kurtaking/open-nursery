import { AppSidebar } from '@/components/app-sidebar/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { useAuth } from '@/context/AuthContext';
import { Outlet, createFileRoute } from '@tanstack/react-router';
import { Toaster } from 'sonner';

export const Route = createFileRoute('/_authed')({
  component: AuthedLayout,
});

function AuthedLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading auth state...</div>;
  }

  // todo: uncomment when fe auth is ready
  // if (!user) {
  //   console.log('No user found, redirecting to login');
  //   return <Navigate to="/login" />;
  // }

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
