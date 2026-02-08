
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mic, Music, Users, Calendar, Sparkles, Coffee } from 'lucide-react';
import Image from 'next/image';

export default function KikaoOpenMicPage() {
    return (
        <div className="py-12 md:py-24 bg-zinc-950 text-white min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative aspect-square rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl border border-zinc-800">
                            <Image
                                src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200"
                                alt="Kikao Open Mic Performance"
                                fill
                                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
                            <Badge className="bg-primary text-secondary px-4 py-1.5 uppercase font-extrabold tracking-widest text-xs border-none">
                                Community Event
                            </Badge>
                            <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight">
                                KIKAOO <br />
                                <span className="text-primary italic">Open Mic Live</span>
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                                A raw, unfiltered stage for poets, musicians, comedians, and storytellers. Join us for evenings of authentic expression and community vibes.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 font-bold text-base md:text-lg rounded-xl">
                                    Sign Up to Perform
                                </Button>
                                <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 h-14 md:h-16 px-8 md:px-10 font-bold text-base md:text-lg rounded-xl">
                                    Get Tickets
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Poetry", icon: <Mic /> },
                            { label: "Acoustic", icon: <Music /> },
                            { label: "Comedy", icon: <Sparkles /> },
                            { label: "Storytelling", icon: <Coffee /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-zinc-900 transition-colors">
                                <div className="text-primary">{item.icon}</div>
                                <span className="font-bold text-lg">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
