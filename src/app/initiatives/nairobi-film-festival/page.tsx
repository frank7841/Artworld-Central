
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Film, Clapperboard, Calendar, Ticket, Award, Video } from 'lucide-react';
import Image from 'next/image';

export default function NairobiFilmFestivalPage() {
    return (
        <div className="py-12 md:py-24 bg-black text-white min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
                        <div className="space-y-4">
                            <Badge className="bg-red-600 text-white px-3 py-1 uppercase tracking-widest text-xs border-none font-bold">
                                Coming Soon
                            </Badge>
                            <h1 className="text-5xl md:text-8xl font-headline font-bold leading-none">
                                NAIROBI <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">FILM FESTIVAL</span>
                            </h1>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <p className="text-xl font-bold">November 10 - 15, 2026</p>
                            <p className="text-white/50 uppercase tracking-widest text-sm">Nairobi Cinema & Various Venues</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                                Celebrating the boldness of African cinema. From gripping documentaries to avant-garde narratives, NFF is the premier showcase for filmmakers who dare to dream.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <Clapperboard className="h-8 w-8 text-red-500 mb-4" />
                                    <h3 className="font-bold text-lg mb-2">Film Screenings</h3>
                                    <p className="text-sm text-white/50">Over 50 films from 20 countries.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <Award className="h-8 w-8 text-orange-500 mb-4" />
                                    <h3 className="font-bold text-lg mb-2">Awards Gala</h3>
                                    <p className="text-sm text-white/50">Honoring excellence in storytelling.</p>
                                </div>
                            </div>
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold h-16 px-10 rounded-full w-full md:w-auto">
                                <Ticket className="mr-2" /> Buy Festival Pass
                            </Button>
                        </div>
                        <div className="relative aspect-[3/4] rounded-sm overflow-hidden border-4 border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200"
                                alt="Film Festival Audience"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
