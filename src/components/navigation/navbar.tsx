
'use client';

import Link from 'next/link';
import { useAuthStore } from '@/lib/auth-store';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LayoutDashboard, LogOut, User, Menu, X, ShieldCheck, Users, GraduationCap, Calendar, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const { user, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: 'About',
      href: '/about',
      items: [
        { name: 'Who We Are', href: '/about/who-we-are' },
        { name: 'Vision & Mission', href: '/about/vision-mission' },
        { name: 'Our Values', href: '/about/values' },
        { name: 'Leadership', href: '/about/leadership' },
        { name: 'History & Legacy', href: '/about/history' },
      ]
    },
    {
      name: 'Programs',
      href: '/programs',
      items: [
        { name: 'Arts Education', href: '/programs/arts-education' },
        { name: 'Festivals & Exhibitions', href: '/programs/festivals' },
        { name: 'Community Engagement', href: '/programs/community' },
        { name: 'Research & Writing', href: '/programs/research' },
        { name: 'Schools Programs', href: '/programs/schools' },
        { name: 'Learning Academy', href: '/academy' },
      ]
    },
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'Events', href: '/events' },
    { name: 'Impact', href: '/impact' },
    { name: 'Media', href: '/media' },
    {
      name: 'Get Involved',
      href: '/get-involved',
      items: [
        { name: 'Partner With Us', href: '/get-involved#partner' },
        { name: 'Volunteer', href: '/get-involved#volunteer' },
        { name: 'Sponsorship', href: '/get-involved#sponsorship' },
        { name: 'Donations', href: '/get-involved#donate' },
        { name: 'Careers', href: '/get-involved#careers' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-headline font-bold text-xl tracking-tight text-primary">
              ARTWORLD<span className="text-secondary ml-1">INSTITUTE</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            {navLinks.map((link) => (
              link.items ? (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger className="transition-colors hover:text-primary flex items-center gap-1">
                    {link.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.items.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href}>{item.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                  {link.name}
                </Link>
              )
            ))}
            {user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN' ? (
              <Link href="/dashboard/admin" className="text-primary font-semibold flex items-center gap-1">
                <ShieldCheck className="h-4 w-4" /> Admin
              </Link>
            ) : null}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-primary/20 text-primary">{user.name[0]?.toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{user.role}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground font-bold">{user.membershipTier} Member</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={user.role === 'TALENT' ? '/dashboard/talent' : '/dashboard/admin'}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()} className="text-destructive focus:text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/registration">Join Community</Link>
              </Button>
            </div>
          )}

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background p-4 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
          <Link href="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          {navLinks.map((link) => (
            <div key={link.href} className="space-y-3">
              {link.items ? (
                <>
                  <div className="text-lg font-medium text-primary">
                    {link.name}
                  </div>
                  <div className="pl-4 flex flex-col space-y-2 border-l-2 border-primary/10">
                    {link.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-medium text-primary hover:text-secondary transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          {!user && (
            <div className="flex flex-col space-y-2 pt-2 border-t mt-4">
              <Button variant="outline" asChild className="w-full">
                <Link href="/signin" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/registration" onClick={() => setIsMenuOpen(false)}>Join Community</Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
