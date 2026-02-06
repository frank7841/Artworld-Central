'use client';

import { Navbar } from '@/components/navigation/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Play, Clock, Star, BookOpen, GraduationCap, Users, Search, Filter, ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'Leadership in Social Advocacy',
    category: 'Leadership',
    duration: '4h 30m',
    level: 'Beginner',
    rating: 4.8,
    students: 1240,
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
    lecturer: 'Dr. Sarah M.'
  },
  {
    id: 2,
    title: 'Creative Career Management',
    category: 'Career',
    duration: '6h 15m',
    level: 'Intermediate',
    rating: 4.9,
    students: 850,
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
    lecturer: 'James K.'
  },
  {
    id: 3,
    title: 'Arts & Festival Operations',
    category: 'Management',
    duration: '5h 45m',
    level: 'Advanced',
    rating: 4.7,
    students: 420,
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800',
    lecturer: 'Amina W.'
  },
  {
    id: 4,
    title: 'Community Health Leadership',
    category: 'Health',
    duration: '3h 20m',
    level: 'Beginner',
    rating: 4.9,
    students: 2100,
    img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800',
    lecturer: 'Prof. David O.'
  },
];

export default function AcademyPage() {
  return (
    <div className="bg-[#F8F9FA]">

      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden py-24">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-secondary text-primary font-bold mb-6 px-4 py-1.5 uppercase tracking-wider text-xs border-none">
              AWI Academy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-headline tracking-tight leading-tight">
              Master the Art of <span className="text-secondary italic">Creative Impact</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-medium">
              Upskill with masterclasses from industry pioneers. Earn certified digital badges and build a portfolio that stands out.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-ivory hover:scale-105 transition-all font-bold px-8 h-14 rounded-2xl">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-primary hover:bg-white/10 font-bold px-8 h-14 rounded-2xl">
                <BookOpen className="mr-2 h-5 w-5" /> My Learning
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Courses', value: '150+', icon: <Play className="h-5 w-5" /> },
            { label: 'Students', value: '12k+', icon: <Users className="h-5 w-5" /> },
            { label: 'Mentors', value: '45+', icon: <Star className="h-5 w-5" /> },
            { label: 'Badges Issued', value: '8.5k', icon: <GraduationCap className="h-5 w-5" /> },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-3xl shadow-sm border border-muted/20 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold font-headline">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="What do you want to learn today?"
              className="pl-12 h-14 bg-white border-none shadow-sm rounded-2xl text-lg"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 w-full lg:w-auto">
            <Button variant="ghost" className="font-bold text-primary bg-primary/5 rounded-2xl h-12 px-6">
              <Filter className="mr-2 h-4 w-4" /> All Categories
            </Button>
            {['Leadership', 'Management', 'Creative Arts', 'Media'].map((cat) => (
              <Button key={cat} variant="outline" className="h-12 border-none bg-white shadow-sm rounded-2xl font-bold hover:bg-muted">
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden border-none shadow-sm group hover:shadow-xl transition-all duration-500 flex flex-col rounded-3xl bg-white">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg animate-in zoom-in-50">
                    <Play className="h-6 w-6 text-primary fill-current" />
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-primary font-bold backdrop-blur-sm border-none shadow-sm">
                  {course.category}
                </Badge>
              </div>
              <CardHeader className="p-6 flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1 text-xs font-bold text-yellow-500">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    {course.rating}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">({course.students} students)</span>
                </div>
                <CardTitle className="text-xl font-bold font-headline mb-4 group-hover:text-primary transition-colors leading-tight">
                  {course.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {course.duration}</span>
                  <span className="flex items-center gap-1.5"><Zap className="h-4 w-4" /> {course.level}</span>
                </div>
              </CardHeader>
              <CardFooter className="p-6 pt-0 border-t mt-4 flex justify-between items-center bg-muted/5">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 ring-2 ring-white">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${course.id}`} />
                    <AvatarFallback>I</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-bold truncate max-w-[100px]">{course.lecturer}</span>
                </div>
                <Button variant="ghost" className="p-0 h-auto font-bold text-primary group-hover:translate-x-1 transition-transform">
                  Enroll <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Featured Mentorship Section */}
        <section className="relative rounded-[40px] overflow-hidden bg-primary shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
              fill
              alt="Mentorship BG"
              className="object-cover"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 px-8 py-16 md:px-16">
            <div className="space-y-8">
              <Badge className="bg-secondary text-primary font-extrabold px-5 py-2 uppercase tracking-widest text-[10px] border-none">
                Exclusive Access
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white font-headline leading-tight">
                Unlock 1-on-1 <br />
                <span className="text-secondary italic">Strategic Mentorship</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed font-medium">
                Connect with global industry experts for personalized coaching sessions.
                Artworld Institute Premium members unlock exclusive access to top-tier curators, managers, and advocates.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Avatar key={i} className="border-4 border-primary h-14 w-14 ring-2 ring-secondary/20">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=mentor-${i}`} />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xs border-4 border-primary">
                    +40
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold text-xl leading-none">Global Network</div>
                  <div className="text-white/50 text-sm font-medium">Top industry leaders</div>
                </div>
              </div>
              <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:scale-105 transition-all font-extrabold px-10 h-16 rounded-2xl shadow-xl">
                Apply for Mentorship
              </Button>
            </div>
            <div className="relative h-full min-h-[400px] hidden lg:block rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800"
                alt="Coaching Session"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-white font-bold italic text-lg mb-4">
                  "The mentorship at Artworld Institute transformed the way I approach international collaborations."
                </p>
                <div className="flex items-center gap-3">
                  <div className="font-bold text-secondary">Anita M.</div>
                  <div className="text-white/60 text-sm font-medium">— Creative Director, Nairobi Arts</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
