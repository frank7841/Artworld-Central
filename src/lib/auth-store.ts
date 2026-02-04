
'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'PUBLIC' | 'TALENT' | 'MEMBER' | 'ADMIN' | 'SUPER_ADMIN';
export type MembershipTier = 'FREE' | 'ACTIVE' | 'PREMIUM';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  membershipTier: MembershipTier;
  program?: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  login: (email: string, role: UserRole, tier?: MembershipTier) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (email, role, tier = 'FREE') => {
        set({
          user: {
            id: 'user_' + Math.random().toString(36).substr(2, 9),
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            email,
            role,
            membershipTier: tier,
            avatar: `https://picsum.photos/seed/${email}/200`,
            program: role === 'TALENT' ? 'KACDP' : undefined
          }
        });
      },
      logout: () => set({ user: null }),
    }),
    {
      name: 'awi-auth',
    }
  )
);
