
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Film, Star, PenTool, Mic2, Users } from 'lucide-react';
import Image from 'next/image';

export default function KikaooAwardsPage() {
    const categories = [
        { name: "Film & Storytelling", icon: <Film className="h-6 w-6" /> },
        { name: "Creative Expression", icon: <PenTool className="h-6 w-6" /> },
        { name: "Outstanding Artist", icon: <Star className="h-6 w-6" /> },
        { name: "Cultural Contributors", icon: <Users className="h-6 w-6" /> }
    ];

    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="relative w-64 h-64 shrink-0 rounded-[40px] bg-secondary flex items-center justify-center shadow-xl border-8 border-primary/10">
                            <Trophy className="h-32 w-32 text-primary" />
                        </div>
                        <div className="space-y-6 flex-grow">
                            <Badge variant="outline" className="text-primary border-primary px-4 py-1">Excellence</Badge>
                            <h1 className="text-5xl md:text-7xl font-headline font-bold">KIKAOO <span className="text-primary">Awards</span></h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Celebrating excellence in film, storytelling, and creative expression, recognizing outstanding artists, filmmakers, and cultural contributors from Kenya and beyond.
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat, index) => (
                            <div key={index} className="p-8 rounded-3xl bg-white border border-muted/20 text-center space-y-4 hover:shadow-xl transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto text-primary">
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-bold">{cat.name}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="relative aspect-video rounded-[40px] overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200"
                            alt="Awards Ceremony"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Button size="lg" className="h-16 px-12 font-bold text-lg rounded-2xl">
                                Submit Your Entry
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
