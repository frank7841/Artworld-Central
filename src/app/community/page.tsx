
'use client';

import { Navbar } from '@/components/navigation/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Users, Bell, Search, PlusCircle, TrendingUp } from 'lucide-react';

export default function CommunityPage() {
  const posts = [
    { id: 1, author: 'Jane D.', role: 'Mentor', content: 'Excited to announce the upcoming workshop on Creative Advocacy! Check the resources tab for pre-reading material.', time: '2h ago', comments: 12 },
    { id: 2, author: 'Mark K.', role: 'Member', content: 'Looking for a collaborator for a short film project in Nairobi. HMU if you are into cinematography!', time: '5h ago', comments: 8 },
    { id: 3, author: 'AWI Admin', role: 'Official', content: 'Grant applications for the KACDP 2024 cycle are now open. Apply through your dashboard.', time: '1d ago', comments: 45 },
  ];

  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="hidden lg:block space-y-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-4 space-y-4">
                <Button className="w-full justify-start font-bold" variant="ghost">
                  <Users className="mr-2 h-4 w-4" /> All Communities
                </Button>
                <Button className="w-full justify-start font-bold" variant="ghost">
                  <Bell className="mr-2 h-4 w-4" /> Announcements
                </Button>
                <Button className="w-full justify-start font-bold text-primary" variant="ghost">
                  <MessageSquare className="mr-2 h-4 w-4" /> Opportunities
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Your Groups</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-2">
                <Link href="#" className="block p-2 text-sm hover:bg-muted rounded-md font-medium">Miss Pink Ribbon Advocates</Link>
                <Link href="#" className="block p-2 text-sm hover:bg-muted rounded-md font-medium">Nairobi Creative Circle</Link>
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search discussions, opportunities..." className="pl-10 h-10" />
              </div>
              <Button size="icon" className="shrink-0"><PlusCircle className="h-5 w-5" /></Button>
            </div>

            <Tabs defaultValue="feed" className="space-y-6">
              <TabsList className="bg-white border w-full justify-start h-12 p-1">
                <TabsTrigger value="feed">Global Feed</TabsTrigger>
                <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
                <TabsTrigger value="networking">Networking</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id} className="border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center gap-4 p-4">
                      <Avatar>
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm">{post.author}</span>
                          <Badge variant="secondary" className="text-[10px] uppercase font-bold">{post.role}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{post.time}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm leading-relaxed">{post.content}</p>
                    </CardContent>
                    <CardContent className="p-4 pt-0 border-t mt-2 flex gap-4 text-xs text-muted-foreground">
                      <button className="hover:text-primary font-medium">Like</button>
                      <button className="hover:text-primary font-medium">{post.comments} Comments</button>
                      <button className="hover:text-primary font-medium">Share</button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Trending/Sidebar Right */}
          <div className="hidden lg:block space-y-6">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" /> Trending Now
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { tag: '#KACDP2024', count: '1.2k posts' },
                  { tag: '#PinkRibbonKenya', count: '850 posts' },
                  { tag: '#NairobiArts', count: '540 posts' },
                ].map((item) => (
                  <div key={item.tag}>
                    <div className="text-sm font-bold text-primary">{item.tag}</div>
                    <div className="text-xs text-muted-foreground">{item.count}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-primary text-white border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Premium Membership</CardTitle>
                <CardDescription className="text-ivory/80">Unlock private groups and mentorship sessions.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full font-bold">Upgrade Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
