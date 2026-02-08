
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Zap, Star, Users, Music } from 'lucide-react';
import Image from 'next/image';

export default function NIFAPage() {
    const highlights = [
        { title: "Visual Arts", icon: <Star className="h-6 w-6" />, desc: "Contemporary exhibitions and site-specific installations." },
        { title: "Performance", icon: <Zap className="h-6 w-6" />, desc: "Live theatre, dance, and multidisciplinary showcases." },
        { title: "Film", icon: <Music className="h-6 w-6" />, desc: "Showcasing powerful local and international stories." },
        { title: "Music", icon: <Music className="h-6 w-6" />, desc: "Live performances from emerging and established artists." }
    ];

    return (
        <div className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <Badge className="bg-primary text-secondary px-4 py-1.5 uppercase font-extrabold tracking-widest text-xs border-none">
                                Flagship Initiative
                            </Badge>
                            <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight">
                                Nairobi Festival <br />
                                <span className="text-primary italic">of Arts</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Nairobi Festival of Arts is a multidisciplinary cultural festival bringing together visual arts, performance, literature, film, and music to celebrate creativity and cultural diversity.
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                                    <Calendar className="h-5 w-5" /> Annual Event
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                                    <MapPin className="h-5 w-5" /> Multiple Locations
                                </div>
                            </div>
                            <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 font-bold text-base md:text-lg w-full sm:w-auto">
                                View Upcoming 2026 Schedule
                            </Button>
                        </div>
                        <div className="relative aspect-square rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1514525253361-bee8d40d04c4?q=80&w=1200"
                                alt="Nairobi Festival of Arts"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <p className="text-sm font-bold uppercase tracking-widest opacity-70">Next Edition</p>
                                <p className="text-2xl font-bold font-headline">November 2026</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-primary/5 border border-primary/10 hover:bg-primary hover:text-white transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform mx-auto sm:mx-0">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 text-center sm:text-left">{item.title}</h3>
                                <p className="text-sm opacity-80 group-hover:opacity-100 text-center sm:text-left">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
