import PageHeader from '@/components/PageHeader';
import { CreateBabyForm } from '@/components/babies/CreateBabyForm';
import { ProfileCard } from '@/components/babies/ProfileCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { babyApi } from '@/lib/apis/babyApi';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { PlusCircle } from 'lucide-react';

export const Route = createFileRoute('/_authed/babies')({
  component: BabiesPage,
});

function BabiesPage() {
  const { data: babiesResponse, isLoading } = useQuery({
    queryKey: ['babies'],
    queryFn: () => babyApi.getBabies(),
  });

  const babies = babiesResponse?.data?.data ?? [];
  const activeBabies = babies.filter((baby) => baby.status === 'active');

  if (isLoading) {
    return <div>Loading...</div>; // Consider using a proper loading spinner component
  }

  return (
    <div className="container mx-auto p-4">
      <PageHeader title="Baby Profiles">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              New Baby
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Baby</DialogTitle>
            </DialogHeader>
            <CreateBabyForm />
          </DialogContent>
        </Dialog>
      </PageHeader>

      <hr className="my-6" />

      {activeBabies.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>No babies yet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Click the "New Baby" button to add your first baby profile.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {activeBabies.map((baby) => (
            <div key={baby.id}>
              <ProfileCard baby={baby} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
