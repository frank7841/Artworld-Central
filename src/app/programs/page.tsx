
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, Heart, Star, Zap, Book, Film, Truck, Palette, Trophy, Leaf, Clock, Sparkles, Users, GraduationCap, TrendingUp } from 'lucide-react';
import { ExploreMore } from '@/components/layout/ExploreMore';

const allPrograms = [
  { id: 'academy', name: 'ArtWorld Institute AWI', tag: 'Academic', icon: <GraduationCap /> },
  { id: 'miss-pink-ribbon', name: 'MISS PINK RIBBON Kenya', tag: 'Advocacy', icon: <Heart /> },
  { id: 'kikaoo-awards', name: 'KIKAOO Awards incorporating Nairobi Film Festival', tag: 'Media', icon: <Film /> },
  { id: 'castreal-agency', name: 'CastReal Agency', tag: 'Talent', icon: <Users /> },
  { id: 'heal-future', name: 'Heal the Future Climate Action – Schools Program', tag: 'Climate Action', icon: <Leaf /> },
  { id: 'kacdp', name: 'KACDP', tag: 'Creative', icon: <Palette /> },
  { id: 'nifa', name: 'Nairobi Festival of Arts NFA', tag: 'Arts', icon: <Zap /> },
  { id: 'pop-life', name: 'NAIROBI POP LIFE', tag: 'Culture', icon: <Star /> },
  { id: 'book-week', name: 'KIKAOO NATIONAL BOOK WEEK', tag: 'Literature', icon: <Book /> },
  { id: 'kntea', name: 'Kenya National Transport Excellence Awards (KNTEA)', tag: 'Mobility', icon: <Truck /> },
  { id: 'fashion-runway', name: 'AWI Fashion Runway', tag: 'Fashion', icon: <Briefcase /> },
  { id: 'awi-welfare-club', name: 'AWI Welfare Savings & Investment Club', tag: 'Finance', icon: <TrendingUp /> },
];

export default function ProgramsPage() {
  return (
    <div className="bg-muted/20 pb-0">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Programs & Initiatives</h1>
          <p className="text-lg text-muted-foreground">Discover the specialized pathways within the AWI ecosystem. Each program offers its own community space, resources, and career growth opportunities.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allPrograms.map((program) => (
            <Card key={program.id} className="group hover:border-primary/50 transition-colors shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {program.icon}
                </div>
                <Badge variant="outline" className="text-[10px] font-bold uppercase">{program.tag}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">{program.name}</CardTitle>
                <Button variant="outline" size="sm" className="w-full font-bold" asChild>
                  <Link href={program.id === 'academy' ? '/academy' : `initiatives/${program.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ExploreMore
        type="Initiatives"
        title="Our Flagship Initiatives"
        description="Explore our high-impact projects driving social change and creative excellence across Kenya."
        items={[
          {
            id: 'nifa',
            name: 'Nairobi Festival of Arts (NFA)',
            desc: 'Multidisciplinary cultural festival celebrating creativity and cultural diversity.',
            icon: <Zap className="h-6 w-6 text-primary" />,
            href: '/initiatives/nifa',
            color: 'bg-blue-50'
          },
          {
            id: 'kikaoo-awards',
            name: 'KIKAOO Awards incorporating Nairobi Film Festival',
            desc: 'Celebrating excellence in film, storytelling, and creative expression from Kenya, incorporating the Nairobi Film Festival.',
            icon: <Trophy className="h-6 w-6 text-primary" />,
            href: '/initiatives/kikaoo-awards',
            color: 'bg-amber-50'
          },
          {
            id: 'miss-pink-ribbon',
            name: 'MISS PINK RIBBON Kenya',
            desc: "Promoting breast cancer awareness and women's health through elegance.",
            icon: <Heart className="h-6 w-6 text-pink-600" />,
            href: '/initiatives/miss-pink-ribbon',
            color: 'bg-pink-50'
          },
          {
            id: 'heal-future',
            name: 'Heal the Future Climate Action – Schools Program',
            desc: 'School-based environmental stewardship, regenerative agriculture, and youth leadership initiative.',
            icon: <Leaf className="h-6 w-6 text-green-600" />,
            href: '/initiatives/heal-future',
            color: 'bg-green-50'
          }
        ]}
      />
    </div>
  );
}
