import { BabyProfilesPage } from '@/components/babies/BabyProfilesPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/babies')({
  component: BabiesPage,
});

function BabiesPage() {
  return <BabyProfilesPage />;
}
