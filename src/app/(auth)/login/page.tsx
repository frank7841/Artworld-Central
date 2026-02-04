
'use client';

import { useState } from 'react';
import { useAuthStore, UserRole } from '@/lib/auth-store';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>('TALENT');
  const login = useAuthStore(state => state.login);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email, role);
      router.push(role === 'TALENT' ? '/dashboard/talent' : '/dashboard/admin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="font-headline font-bold text-3xl tracking-tight text-primary">
            ARTWORLD<span className="text-secondary ml-1">CENTRAL</span>
          </Link>
          <p className="mt-2 text-muted-foreground font-light">Enter your credentials to access your dashboard</p>
        </div>

        <Card className="border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">Select your role to sign in</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="TALENT" onValueChange={(v) => setRole(v as UserRole)}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="TALENT">Talent</TabsTrigger>
                <TabsTrigger value="ADMIN">Admin</TabsTrigger>
              </TabsList>
            </Tabs>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="name@agency.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Password</label>
                  <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                </div>
                <Input type="password" placeholder="••••••••" required />
              </div>
              <Button type="submit" className="w-full h-12 text-lg font-bold mt-4">Sign In</Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-muted-foreground">New to ArtWorld?</span></div>
            </div>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/register">Create an Account</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
