import PageHeader from '@/components/PageHeader';
import { CreateBabyForm } from '@/components/babies/CreateBabyForm';
import { ProfileCard } from '@/components/babies/ProfileCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { Baby, BabyWithCaregivers } from '@/lib/types';
import { createFileRoute } from '@tanstack/react-router';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';

const sampleBabies: BabyWithCaregivers[] = [
  {
    id: 1,
    name: 'Cruz King',
    dateOfBirth: '2023-05-13T00:00:00Z',
    birthWeight: 3200, // 3.2kg
    birthLength: 490, // 49cm
    gender: 'male',
    currentWeight: 7500, // 7.5kg
    currentLength: 650, // 65cm
    notes: 'Loves peek-a-boo and dancing to music',
    status: 'active',
    createdAt: '2023-06-15T12:00:00Z',
    updatedAt: '2024-02-20T15:30:00Z',
    caregivers: [
      {
        caregiver: {
          id: 1,
          name: 'Kurt King',
          email: 'kurt@example.com',
          relationship: 'parent',
        },
        role: 'primary',
      },
      {
        caregiver: {
          id: 2,
          name: 'Christina King',
          email: 'christina@example.com',
          relationship: 'parent',
        },
        role: 'secondary',
      },
      {
        caregiver: {
          id: 3,
          name: 'Mary G',
          email: 'mary@example.com',
          relationship: 'parent',
        },
        role: 'support',
      },
    ],
  },
];

export const Route = createFileRoute('/_authed/babies')({
  component: BabiesPage,
});

function BabiesPage() {
  const [babies, setBabies] = useState<BabyWithCaregivers[]>(sampleBabies); // Using the correct type
  const activeBabies = babies.filter((baby) => baby.status === 'active');

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

      <div className="col-span-6 space-y-6">
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
          <div className="grid grid-cols-2 gap-4">
            {activeBabies.map((baby) => (
              <ProfileCard key={baby.name} baby={baby} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
