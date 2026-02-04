
'use client';

import { Navbar } from '@/components/navigation/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Star, BookOpen, GraduationCap, Users } from 'lucide-react';
import Image from 'next/image';

const courses = [
  { id: 1, title: 'Leadership in Social Advocacy', category: 'Leadership', duration: '4h 30m', level: 'Beginner', rating: 4.8, students: 1240, img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600' },
  { id: 2, title: 'Creative Career Management', category: 'Career', duration: '6h 15m', level: 'Intermediate', rating: 4.9, students: 850, img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600' },
  { id: 3, title: 'Arts & Festival Operations', category: 'Management', duration: '5h 45m', level: 'Advanced', rating: 4.7, students: 420, img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600' },
  { id: 4, title: 'Community Health Leadership', category: 'Health', duration: '3h 20m', level: 'Beginner', rating: 4.9, students: 2100, img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600' },
];

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-headline font-bold">Learning Academy</h1>
            <p className="text-lg text-muted-foreground">Upskill with recorded sessions and courses from industry experts. Complete modules to earn AWI-certified digital badges.</p>
          </div>
          <Button className="font-bold flex items-center gap-2">
            <BookOpen className="h-4 w-4" /> My Learning Path
          </Button>
        </div>

        {/* Categories Bar */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-12">
          {['All Categories', 'Leadership', 'Creative Arts', 'Management', 'Health & Wellness', 'Media Production'].map((cat) => (
            <Button key={cat} variant={cat === 'All Categories' ? 'default' : 'outline'} className="rounded-full whitespace-nowrap">
              {cat}
            </Button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden border-none shadow-md group">
              <div className="relative h-48 overflow-hidden">
                <Image src={course.img} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white p-3 rounded-full text-primary shadow-xl">
                    <Play className="h-6 w-6 fill-primary" />
                  </div>
                </div>
                <Badge className="absolute top-2 right-2 bg-secondary text-white">{course.category}</Badge>
              </div>
              <CardHeader className="p-4 space-y-1">
                <CardTitle className="text-base font-bold group-hover:text-primary transition-colors">{course.title}</CardTitle>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><GraduationCap className="h-3 w-3" /> {course.level}</span>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs font-bold">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" /> {course.rating}
                  <span className="text-muted-foreground font-normal ml-1">({course.students} students)</span>
                </div>
                <Button size="sm" variant="ghost" className="text-xs font-bold text-primary">Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mentorship Preview */}
        <div className="mt-20">
          <Card className="bg-secondary text-white border-none shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12 space-y-6">
                <h2 className="text-3xl font-headline font-bold">1-on-1 Mentorship</h2>
                <p className="text-ivory/70 leading-relaxed">
                  Connect with global industry experts for personalized coaching sessions. Premium members get two free 30-minute sessions per month.
                </p>
                <div className="flex items-center gap-8">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <Avatar key={i} className="border-2 border-secondary h-10 w-10">
                        <AvatarImage src={`https://picsum.photos/seed/mentor-${i}/100`} />
                        <AvatarFallback>M</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">25+</span> Experts Active
                  </div>
                </div>
                <Button className="font-bold bg-primary hover:bg-primary/90 text-white border-none h-12 px-8">Book a Session</Button>
              </div>
              <div className="relative h-full min-h-[300px] hidden md:block">
                <Image 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800" 
                  alt="Coaching" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
