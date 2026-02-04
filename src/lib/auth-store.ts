
'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'PUBLIC' | 'TALENT' | 'ADMIN' | 'SUPER_ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  program?: 'CASTREAL' | 'PAGEANT' | 'SPORTS';
  avatar?: string;
}

interface AuthState {
  user: User | null;
  login: (email: string, role: UserRole) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (email, role) => {
        set({
          user: {
            id: '1',
            name: email.split('@')[0],
            email,
            role,
            avatar: `https://picsum.photos/seed/${email}/200`,
            program: role === 'TALENT' ? 'CASTREAL' : undefined
          }
        });
      },
      logout: () => set({ user: null }),
    }),
    {
      name: 'artworld-auth',
    }
  )
);
