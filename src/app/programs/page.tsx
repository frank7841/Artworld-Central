
'use client';

import { Navbar } from '@/components/navigation/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, Heart, Star, Zap, Book, Film, Truck, Palette } from 'lucide-react';

const allPrograms = [
  { id: 'pink-ribbon', name: 'Miss Pink Ribbon Kenya', tag: 'Advocacy', icon: <Heart /> },
  { id: 'kacdp', name: 'Kenya Arts Dev Program', tag: 'Creative', icon: <Palette /> },
  { id: 'nifa', name: 'Nairobi Int. Festival', tag: 'Arts', icon: <Zap /> },
  { id: 'kikaoo', name: 'KIKAOO Awards', tag: 'Media', icon: <Film /> },
  { id: 'pop-life', name: 'Nairobi Pop Life', tag: 'Culture', icon: <Star /> },
  { id: 'book-week', name: 'National Book Week', tag: 'Literature', icon: <Book /> },
  { id: 'transport-awards', name: 'National Transport Awards', tag: 'Community', icon: <Truck /> },
  { id: 'fashion-runway', name: 'AWI Fashion Runway', tag: 'Fashion', icon: <Briefcase /> },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
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
                  <Link href={`/programs/${program.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
