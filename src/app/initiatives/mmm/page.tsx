
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Zap, Star, Users, Timer } from 'lucide-react';
import Image from 'next/image';

export default function MMMPage() {
    const steps = [
        { title: "Midnight Start", icon: <Clock className="h-6 w-6" />, desc: "A unique night-time racing experience through the city lights." },
        { title: "Metropolitan Route", icon: <MapPin className="h-6 w-6" />, desc: "Passing through iconic landmarks and vibrant urban spaces." },
        { title: "Community Spirit", icon: <Users className="h-6 w-6" />, desc: "Bringing thousands together for fitness and cultural celebration." },
        { title: "Performance Excellence", icon: <Timer className="h-6 w-6" />, desc: "Challenging elite athletes and enthusiasts alike." }
    ];

    return (
        <div className="py-24 bg-zinc-950 text-white min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <Badge className="bg-primary text-secondary px-4 py-1.5 uppercase font-extrabold tracking-widest text-xs border-none">
                                Urban Movement
                            </Badge>
                            <h1 className="text-5xl md:text-8xl font-headline font-bold leading-tight">
                                MMM <br />
                                <span className="text-primary italic">Metropolitan Midnight Marathon</span>
                            </h1>
                            <p className="text-xl text-zinc-400 leading-relaxed font-light">
                                MMM is an annual night marathon that captures the energy of the city, promoting health, urban culture, and collective endurance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="h-16 px-10 font-bold text-lg rounded-2xl">
                                    Register for 2026
                                </Button>
                                <Button size="lg" variant="outline" className="border-zinc-800 text-white hover:bg-zinc-900 h-16 px-10 font-bold text-lg rounded-2xl">
                                    Volunteer
                                </Button>
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl shadow-primary/20">
                            <Image
                                src="https://images.unsplash.com/photo-1530549387074-d56a992d54a2?q=80&w=1200"
                                alt="Midnight Marathon"
                                fill
                                className="object-cover brightness-75 hover:brightness-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                            <div className="absolute top-8 right-8 p-4 bg-primary/20 backdrop-blur-md rounded-2xl border border-primary/30 text-center">
                                <Timer className="h-8 w-8 text-primary mx-auto mb-2" />
                                <p className="font-bold text-primary uppercase tracking-widest text-xs">00:00 START</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="p-8 rounded-[32px] bg-zinc-900 border border-zinc-800 hover:border-primary/50 transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-primary to-secondary p-1">
                        <div className="bg-zinc-950 rounded-[39px] p-12 md:p-16 text-center space-y-8">
                            <h2 className="text-4xl md:text-5xl font-headline font-bold">Experience the Night</h2>
                            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                                Join thousands of runners as we take back the night and celebrate the pulse of our city through motion and music.
                            </p>
                            <div className="flex justify-center gap-12 pt-8">
                                <div>
                                    <div className="text-5xl font-bold text-primary italic">15k+</div>
                                    <div className="text-xs uppercase tracking-widest opacity-40">Expected Runners</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-primary italic">42.2K</div>
                                    <div className="text-xs uppercase tracking-widest opacity-40">Main Event</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
