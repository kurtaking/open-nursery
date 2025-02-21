import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Baby } from '@/lib/types';
import { Archive, Edit, MoreVertical } from 'lucide-react';

interface ProfileCardProps {
  baby: Baby;
  onEdit?: (baby: Baby) => void;
  onArchive?: (baby: Baby) => void;
}

export function ProfileCard({ baby, onEdit, onArchive }: Readonly<ProfileCardProps>) {
  // const age = calculateAge(new Date(baby.dateOfBirth));
  const age = '1 year, 2 months';

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{baby.name}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit?.(baby)}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onArchive?.(baby)} className="text-destructive">
              <Archive className="mr-2 h-4 w-4" />
              Archive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between py-1">
            <span className="text-muted-foreground">Age</span>
            <span className="font-medium">{age}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-muted-foreground">Date of Birth</span>
            <span className="font-medium">{new Date(baby.dateOfBirth).toLocaleDateString()}</span>
          </div>
          {baby.gender && (
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Gender</span>
              <span className="font-medium capitalize">{baby.gender}</span>
            </div>
          )}
          {baby.currentWeight && (
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Current Weight</span>
              <span className="font-medium">{formatWeight(baby.currentWeight)}</span>
            </div>
          )}
          {baby.currentLength && (
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Current Length</span>
              <span className="font-medium">{formatLength(baby.currentLength)}</span>
            </div>
          )}
          {baby.notes && (
            <div className="mt-2 pt-2 border-t">
              <p className="text-sm text-muted-foreground">{baby.notes}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function formatWeight(grams: number): string {
  if (grams >= 1000) {
    return `${(grams / 1000).toFixed(2)} kg`;
  }
  return `${grams} g`;
}

function formatLength(mm: number): string {
  return `${(mm / 10).toFixed(1)} cm`;
}
