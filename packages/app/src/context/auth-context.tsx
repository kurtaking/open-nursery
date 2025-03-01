import { userApi } from '@/lib/apis/userApi';
import type { SignInUser } from '@/lib/types';
import { useCallback, useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState<SignInUser | null>(null);

  const signIn = useCallback(async (credentials: SignInUser) => {
    const response = await userApi.signIn(credentials);
    setUser(response.data?.user ?? null);

    if (response.data?.user) return true;
    return false;
  }, []);

  const signOut = useCallback(async () => {
    await userApi.signOut();
    setUser(null);
  }, []);

  const isAuthenticated = !!user;

  return { user, signIn, signOut, isAuthenticated };
}

export type AuthContext = ReturnType<typeof useAuth>;
