
'use client';

import { Navbar } from '@/components/navigation/navbar';
import { useAuthStore } from '@/lib/auth-store';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AIProfileEnhancer } from '@/components/talent/ai-profile-enhancer';
import { 
  User, 
  Image as ImageIcon, 
  Calendar, 
  FileText, 
  Star, 
  Settings, 
  Briefcase,
  AlertCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TalentDashboard() {
  const { user } = useAuthStore();
  const router = useRouter();
  const [bio, setBio] = useState("I am an aspiring model passionate about high fashion and artistic expression.");

  useEffect(() => {
    if (!user || user.role !== 'TALENT') {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Summary */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full h-8 w-8 shadow-md">
              <ImageIcon className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h1 className="text-3xl font-headline font-bold">{user.name}</h1>
              <Badge className="w-fit bg-primary/20 text-primary border-primary/20">Shortlisted • {user.program}</Badge>
            </div>
            <p className="text-muted-foreground max-w-2xl">{bio}</p>
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" /> Joined Oct 2024
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> Professional Level
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <Button className="font-bold">Update Portfolio</Button>
            <Button variant="outline" className="font-bold">Edit Profile</Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-white p-1 h-12 shadow-sm border rounded-xl w-full justify-start overflow-x-auto">
            <TabsTrigger value="overview" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="ai-enhancer" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">AI Assistant</TabsTrigger>
            <TabsTrigger value="portfolio" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Portfolio</TabsTrigger>
            <TabsTrigger value="schedule" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Schedule</TabsTrigger>
            <TabsTrigger value="documents" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-none shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Upcoming Casting</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold">CastReal Runway Call</div>
                      <div className="text-sm text-muted-foreground">Tomorrow, 10:00 AM</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Portfolio Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold">124 Views</div>
                      <div className="text-sm text-muted-foreground">+12% from last week</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Payment Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-50 p-3 rounded-lg text-green-600">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold">Subscription Paid</div>
                      <div className="text-sm text-muted-foreground">Valid until Dec 2024</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Program Timeline</CardTitle>
                  <CardDescription>Key milestones for your current path.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { date: 'Oct 15', title: 'Application Approved', status: 'completed' },
                    { date: 'Oct 22', title: 'Onboarding Workshop', status: 'completed' },
                    { date: 'Nov 05', title: 'Official Portfolio Shoot', status: 'upcoming' },
                    { date: 'Dec 12', title: 'Final Program Showcase', status: 'future' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 relative">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 z-10 bg-white
                        ${step.status === 'completed' ? 'border-primary text-primary' : 'border-muted text-muted-foreground'}`}>
                        {idx + 1}
                      </div>
                      {idx !== 3 && <div className="absolute left-4 top-8 w-0.5 h-10 bg-muted" />}
                      <div>
                        <div className="font-bold">{step.title}</div>
                        <div className="text-sm text-muted-foreground">{step.date}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Announcements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4 p-4 bg-orange-50 border border-orange-100 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-orange-600 shrink-0" />
                    <div>
                      <div className="font-bold text-orange-900">Portfolio Update Required</div>
                      <p className="text-sm text-orange-800">Please upload your latest measurements by Friday for the upcoming designer casting.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg border">
                    <div className="font-bold">New Workshop Added</div>
                    <p className="text-sm text-muted-foreground">"Navigating the Industry" workshop available for sign-up next Monday.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai-enhancer">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardHeader className="bg-secondary text-white">
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-primary" />
                  AI Profile Optimization
                </CardTitle>
                <CardDescription className="text-ivory/70">
                  Leverage our AI to polish your professional biography and attract more agency calls.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <AIProfileEnhancer 
                  initialText={bio} 
                  onApply={(newText) => {
                    setBio(newText);
                  }} 
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="portfolio">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="aspect-[3/4] relative group rounded-xl overflow-hidden shadow-md">
                    <img src={`https://picsum.photos/seed/portfolio-${i}/600/800`} className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button size="sm" variant="secondary">View</Button>
                      <Button size="sm" variant="destructive">Remove</Button>
                    </div>
                  </div>
                ))}
                <button className="aspect-[3/4] border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 text-muted-foreground hover:bg-white hover:text-primary hover:border-primary transition-all">
                  <ImageIcon className="h-8 w-8" />
                  <span className="font-bold">Add Photo</span>
                </button>
             </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
