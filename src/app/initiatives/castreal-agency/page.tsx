
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, MapPin, Star, Users, Briefcase, Video } from 'lucide-react';
import Image from 'next/image';

export default function CastRealPage() {
    const services = [
        { title: "Talent Management", icon: <Users className="h-6 w-6" />, desc: "Representing and developing the careers of diverse creative talent." },
        { title: "Casting Services", icon: <Camera className="h-6 w-6" />, desc: "Connecting productions with the perfect cast for film, TV, and ads." },
        { title: "Portfolio Development", icon: <Briefcase className="h-6 w-6" />, desc: "Professional headshots, showreels, and branding for artists." },
        { title: "Production Support", icon: <Video className="h-6 w-6" />, desc: "Assisting with on-set talent coordination and logistics." }
    ];

    return (
        <div className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <Badge className="bg-primary text-secondary px-4 py-1.5 uppercase font-extrabold tracking-widest text-xs border-none">
                                Talent & Casting
                            </Badge>
                            <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight">
                                CastReal <br />
                                <span className="text-primary italic">Agency</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Bridging the gap between exceptional talent and world-class productions. We discover, develop, and deploy the next generation of stars.
                            </p>
                            <div className="flex flex-wrap gap-6 pt-4">
                                <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 font-bold text-base md:text-lg w-full sm:w-auto">
                                    Join Our Roster
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 md:h-16 px-8 md:px-10 font-bold text-base md:text-lg w-full sm:w-auto">
                                    Hire Talent
                                </Button>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200"
                                alt="CastReal Agency Model"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <Star className="h-5 w-5 text-secondary fill-current" />
                                    <span className="font-bold tracking-wider uppercase text-sm">Featured Talent</span>
                                </div>
                                <p className="text-2xl font-headline font-bold">Discover Your Potential</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {services.map((item, index) => (
                            <div key={index} className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform mx-auto sm:mx-0">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 text-center sm:text-left">{item.title}</h3>
                                <p className="text-sm opacity-80 text-center sm:text-left">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
