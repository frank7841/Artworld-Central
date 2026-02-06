'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Users, Search, Filter, Plus, Clock } from 'lucide-react';
import Image from 'next/image';

const events = [
    {
        id: 1,
        title: "Creative Advocacy Workshops 2026",
        description: "Learn how to use art for social change and advocacy in this intensive 3-day workshop series.",
        date: "Feb 15 - Feb 17, 2026",
        time: "09:00 AM - 04:00 PM",
        location: "Nairobi Contemporary Art Institute",
        category: "Workshop",
        attendees: 45,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
        status: "Upcoming"
    },
    {
        id: 2,
        title: "Nairobi Creative Circle Mixer",
        description: "Connect with fellow artists, designers, and creatives in Nairobi. Networking and collaboration opportunities.",
        date: "Feb 22, 2026",
        time: "06:00 PM - 09:00 PM",
        location: "Artworld Institute Hub",
        category: "Networking",
        attendees: 120,
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
        status: "Filling Fast"
    },
    {
        id: 3,
        title: "Annual Art Rights Symposium",
        description: "Exploring the legal landscape for African artists. Registration is free for all AWI members.",
        date: "March 05, 2026",
        time: "10:00 AM - 05:00 PM",
        location: "Virtual Event",
        category: "Symposium",
        attendees: 300,
        image: "https://images.unsplash.com/photo-1475721027185-4048ad27aee0?auto=format&fit=crop&q=80&w=800",
        status: "Upcoming"
    }
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-muted/10">


            {/* Hero Section */}
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge variant="secondary" className="mb-4 font-bold tracking-wider uppercase text-xs">
                            Artworld Events
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-headline tracking-tight">
                            Connect, Learn & <span className="text-secondary italic">Grow</span>
                        </h1>
                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Join workshops, exhibitions, and networking events designed to empower the African creative community.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                                <Plus className="mr-2 h-5 w-5" /> Host an Event
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                                My Calendar
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-12">
                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search for events..."
                            className="pl-10 h-12 bg-white border-none shadow-sm"
                        />
                    </div>
                    <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        <Button variant="outline" className="bg-white shadow-sm border-none font-medium h-12">
                            <Filter className="mr-2 h-4 w-4" /> All Categories
                        </Button>
                        <Badge className="h-12 px-6 flex items-center justify-center cursor-pointer bg-primary text-white hover:bg-primary/90 font-bold">All</Badge>
                        <Badge variant="outline" className="h-12 px-6 flex items-center justify-center cursor-pointer bg-white border-none shadow-sm hover:bg-muted font-bold">Workshops</Badge>
                        <Badge variant="outline" className="h-12 px-6 flex items-center justify-center cursor-pointer bg-white border-none shadow-sm hover:bg-muted font-bold">Exhibitions</Badge>
                        <Badge variant="outline" className="h-12 px-6 flex items-center justify-center cursor-pointer bg-white border-none shadow-sm hover:bg-muted font-bold">Networking</Badge>
                    </div>
                </div>

                {/* Featured Event */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                        Featured Event
                    </h2>
                    <Card className="overflow-hidden border-none shadow-lg group">
                        <div className="grid md:grid-cols-2">
                            <div className="relative h-64 md:h-auto overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=1200"
                                    alt="Featured Event"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <Badge className="w-fit mb-4 bg-secondary text-primary font-bold">Exclusive Exhibition</Badge>
                                <h3 className="text-3xl font-bold mb-4 font-headline">The Future of African Digital Art 2026</h3>
                                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                                    A groundbreaking showcase of digital art from across the continent, exploring the intersection of traditional forms and emerging technologies.
                                </p>
                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <Calendar className="h-5 w-5 text-primary" />
                                        <span className="font-medium text-foreground">March 12 - March 20, 2026</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <MapPin className="h-5 w-5 text-primary" />
                                        <span className="font-medium text-foreground">AWI Main Gallery, Nairobi</span>
                                    </div>
                                </div>
                                <Button size="lg" className="w-fit font-bold px-8">Register Now</Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Grid of Events */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-8 h-1 bg-secondary rounded-full inline-block"></span>
                        Upcoming Events
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <Card key={event.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                                <div className="relative h-48">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <Badge className="absolute top-4 right-4 bg-white/90 text-primary font-bold backdrop-blur-sm">
                                        {event.category}
                                    </Badge>
                                </div>
                                <CardHeader className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase">
                                            <Clock className="h-3.5 w-3.5" /> {event.status}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl mb-2 line-clamp-1 group-hover:text-primary transition-colors">{event.title}</CardTitle>
                                    <CardDescription className="line-clamp-2 leading-relaxed">{event.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="px-6 pb-6 pt-0 space-y-3 flex-grow">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t">
                                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                                        <span className="font-medium truncate">{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4 text-primary shrink-0" />
                                        <span className="font-medium truncate">{event.location}</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 mt-auto">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-1.5 text-sm font-medium">
                                            <Users className="h-4 w-4 text-muted-foreground" />
                                            <span>{event.attendees} attending</span>
                                        </div>
                                        <Button variant="ghost" className="font-bold text-primary p-0 h-auto hover:bg-transparent hover:underline">
                                            View Details
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <section className="mt-20 rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-secondary/90 z-0"></div>
                    <img
                        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="relative z-10 p-12 text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4 font-headline text-primary">Have an event in mind?</h2>
                        <p className="text-primary/80 mb-8 text-lg font-medium">
                            Join our network of partners and host your next creative workshop, exhibition, or networking event with Artworld Institute.
                        </p>
                        <Button size="lg" className="font-bold px-10">Get Started</Button>
                    </div>
                </section>
            </main>

            {/* Footer Placeholder for visual completion */}
            <footer className="bg-white border-t py-12">
                <div className="container mx-auto px-4 text-center">
                    <span className="font-headline font-bold text-lg tracking-tight text-primary">
                        ARTWORLD<span className="text-secondary ml-1">INSTITUTE</span>
                    </span>
                    <p className="text-muted-foreground mt-4 text-sm">© 2026 Artworld Institute. Empowering Africa's Creative Economy.</p>
                </div>
            </footer>
        </div>
    );
}
