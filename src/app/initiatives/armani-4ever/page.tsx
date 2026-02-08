
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShieldCheck, Zap, Users, Sparkles, Heart } from 'lucide-react';
import Image from 'next/image';

export default function Armani4EverPage() {
    const values = [
        { title: "Youth Confidence", icon: <Star className="h-6 w-6" />, desc: "Inspiring self-assurance through creative expression." },
        { title: "Self-Expression", icon: <Zap className="h-6 w-6" />, desc: "Providing tools for young people to tell their own stories." },
        { title: "Social Identity", icon: <Users className="h-6 w-6" />, desc: "Building a positive and inclusive social identity for the youth." },
        { title: "Creative Advocacy", icon: <Heart className="h-6 w-6" />, desc: "Using fashion and art to advocate for positive social change." }
    ];

    return (
        <div className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <Badge className="bg-amber-600 text-white px-4 py-1.5 uppercase font-extrabold tracking-widest text-xs border-none">
                                Creative Advocacy
                            </Badge>
                            <h1 className="text-4xl md:text-8xl font-headline font-bold leading-tight">
                                Armani <br />
                                <span className="text-amber-600 italic">4Ever</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Armani 4Ever is a creative advocacy campaign using fashion, art, and storytelling to inspire youth confidence, self-expression, and positive social identity.
                            </p>
                            <Button size="lg" className="bg-zinc-900 hover:bg-black text-white h-14 md:h-16 px-8 md:px-10 font-bold text-base md:text-lg rounded-xl md:rounded-2xl w-full sm:w-auto">
                                Join the Campaign
                            </Button>
                        </div>
                        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl border-8 md:border-[16px] border-zinc-100">
                            <Image
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800"
                                alt="Armani 4Ever Fashion"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
                            <div className="absolute bottom-10 left-10 text-white">
                                <Sparkles className="h-12 w-12 text-amber-500 mb-4" />
                                <p className="text-2xl font-bold font-headline">Impact Through Style</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {values.map((v, index) => (
                            <div key={index} className="p-6 md:p-8 rounded-2xl md:rounded-[32px] bg-zinc-50 border border-zinc-200 hover:bg-amber-50 hover:border-amber-200 transition-all text-center">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white flex items-center justify-center text-amber-600 mx-auto mb-6 shadow-sm">
                                    {v.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-3">{v.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-amber-100 p-8 md:p-20 rounded-3xl md:rounded-[60px] flex flex-col items-center text-center space-y-6 md:space-y-8">
                        <h2 className="text-3xl md:text-6xl font-headline font-bold text-amber-900 italic">Be the Face of Change</h2>
                        <p className="text-lg md:text-xl text-amber-800/70 max-w-2xl leading-relaxed">
                            We are looking for emerging models, artists, and storytellers to join our global campaign. Showcase your talent and inspire your generation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
                            <Button size="lg" className="bg-amber-900 hover:bg-amber-950 text-white h-14 md:h-16 px-8 md:px-12 font-bold text-base md:text-lg rounded-xl md:rounded-2xl w-full">
                                Apply to be an Ambassador
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
