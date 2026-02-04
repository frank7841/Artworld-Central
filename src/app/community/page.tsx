'use client';

import { Navbar } from '@/components/navigation/navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Users, Bell, Search, PlusCircle, TrendingUp, MoreHorizontal, Share2, Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function CommunityPage() {
  const posts = [
    {
      id: 1,
      author: 'Jane D.',
      role: 'Mentor',
      content: 'Excited to announce the upcoming workshop on Creative Advocacy! Check the resources tab for pre-reading material. This cycle we are focusing on sustainable art practices in urban environments.',
      time: '2h ago',
      likes: 24,
      comments: 12,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 2,
      author: 'Mark K.',
      role: 'Member',
      content: 'Looking for a collaborator for a short film project in Nairobi. HMU if you are into cinematography! We have a script ready and looking to shoot next month.',
      time: '5h ago',
      likes: 15,
      comments: 8,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 3,
      author: 'AWI Admin',
      role: 'Official',
      content: 'Grant applications for the KACDP 2024 cycle are now open. Apply through your dashboard. Make sure to review the updated guidelines for documentation.',
      time: '1d ago',
      likes: 156,
      comments: 45,
      avatar: null
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-20">
      <Navbar />

      {/* Community Header */}
      <div className="bg-white border-b py-8 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold font-headline text-primary">AWI Community</h1>
              <p className="text-muted-foreground mt-1">Connect with 5,000+ creatives across Africa.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="font-bold border-2">
                <Bell className="mr-2 h-4 w-4" /> Notifications
              </Button>
              <Button className="font-bold">
                <PlusCircle className="mr-2 h-4 w-4" /> Start Discussion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">

          {/* Left Sidebar */}
          <div className="hidden lg:block space-y-6">
            <Card className="border-none shadow-sm overflow-hidden">
              <CardContent className="p-2 space-y-1">
                <Button className="w-full justify-start font-bold text-primary bg-primary/5 border-none" variant="ghost">
                  <Users className="mr-3 h-5 w-5 text-primary" /> Global Feed
                </Button>
                <Button className="w-full justify-start font-bold text-muted-foreground hover:text-primary hover:bg-primary/5 border-none" variant="ghost">
                  <MessageSquare className="mr-3 h-5 w-5" /> My Groups
                </Button>
                <Button className="w-full justify-start font-bold text-muted-foreground hover:text-primary hover:bg-primary/5 border-none" variant="ghost">
                  <TrendingUp className="mr-3 h-5 w-5" /> Leading Projects
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground px-2">Your Groups</h3>
              <div className="space-y-2">
                {[
                  { name: "Miss Pink Ribbon Advocates", members: "1.2k" },
                  { name: "Nairobi Creative Circle", members: "850" },
                  { name: "Digital Art Collective", members: "420" }
                ].map((group) => (
                  <Link key={group.name} href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group border border-transparent">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                      {group.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-bold truncate max-w-[150px]">{group.name}</div>
                      <div className="text-[10px] text-muted-foreground font-medium">{group.members} members</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search discussions, opportunities, members..."
                className="pl-12 h-14 bg-white border-none shadow-sm text-lg rounded-2xl"
              />
            </div>

            <Tabs defaultValue="feed" className="space-y-6">
              <TabsList className="bg-transparent border-b w-full justify-start h-auto p-0 gap-8 rounded-none">
                <TabsTrigger
                  value="feed"
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 font-bold text-base"
                >
                  Global Feed
                </TabsTrigger>
                <TabsTrigger
                  value="opportunities"
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 font-bold text-base"
                >
                  Opportunities
                </TabsTrigger>
                <TabsTrigger
                  value="networking"
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 font-bold text-base"
                >
                  Networking
                </TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6 mt-0">
                {posts.map((post) => (
                  <Card key={post.id} className="border-none shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
                    <CardHeader className="flex flex-row items-center gap-4 p-5 pb-3">
                      <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
                        <AvatarImage src={post.avatar || undefined} />
                        <AvatarFallback className="bg-primary/10 text-primary font-bold">{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary hover:underline cursor-pointer">{post.author}</span>
                          <Badge variant="secondary" className="text-[9px] uppercase font-bold h-5 px-1.5 bg-secondary/20 text-primary border-none">
                            {post.role}
                          </Badge>
                        </div>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{post.time}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </CardHeader>
                    <CardContent className="p-5 pt-0 pb-4">
                      <p className="text-[15px] leading-relaxed text-foreground/90 font-medium">
                        {post.content}
                      </p>
                    </CardContent>
                    <CardContent className="px-5 py-4 border-t bg-muted/5 flex items-center justify-between">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-red-500 transition-colors group">
                          <Heart className="h-4 w-4 group-hover:fill-current" />
                          <span className="text-xs font-bold">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-xs font-bold">{post.comments}</span>
                        </button>
                      </div>
                      <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                        <Share2 className="h-4 w-4" />
                        <span className="text-xs font-bold">Share</span>
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block space-y-6">
            <Card className="border-none shadow-sm rounded-2xl overflow-hidden bg-primary text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2 font-bold uppercase tracking-widest text-white/70">
                  <TrendingUp className="h-4 w-4" /> Trending Now
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { tag: '#KACDP2024', count: '1.2k posts', color: 'bg-secondary' },
                  { tag: '#PinkRibbonKenya', count: '850 posts', color: 'bg-white' },
                  { tag: '#NairobiArts', count: '540 posts', color: 'bg-secondary' },
                ].map((item) => (
                  <div key={item.tag} className="group cursor-pointer">
                    <div className="text-[15px] font-bold group-hover:text-secondary transition-colors">{item.tag}</div>
                    <div className="text-[11px] text-white/60 font-medium">{item.count}</div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-0 pb-6">
                <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary font-bold">
                  View All
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary/80 z-0"></div>
              <CardHeader className="relative z-10 pb-2">
                <CardTitle className="text-xl font-bold text-primary">Premium Hub</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm font-medium text-primary/80 mb-6 leading-relaxed">
                  Unlock exclusive mentorship sessions and private project groups.
                </p>
                <Button className="w-full font-extrabold bg-primary text-white hover:scale-105 transition-transform shadow-lg">
                  Join Elite
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
