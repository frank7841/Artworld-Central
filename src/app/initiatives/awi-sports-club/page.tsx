
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dumbbell, Palette, Trophy, HeartPulse } from 'lucide-react';
import Image from 'next/image';

export default function AWISportsClubPage() {
    return (
        <div className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <Badge className="bg-orange-500 text-white px-4 py-1.5 uppercase font-extrabold tracking-widest text-xs border-none">
                                Member Welfare
                            </Badge>
                            <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight">
                                AWI <br />
                                <span className="text-orange-500">Sports & Arts Club</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                A holistic community for creatives to nurture both body and mind. Join our leagues, fitness classes, and creative workshops.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 rounded-xl">
                                    Join Club
                                </Button>
                                <Button size="lg" variant="ghost" className="text-orange-600 hover:text-orange-700 font-bold h-14 rounded-xl border-2 border-orange-100 hover:bg-orange-50">
                                    View Schedule
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="bg-orange-50 p-6 rounded-3xl aspect-square flex flex-col items-center justify-center text-center gap-4">
                                    <Dumbbell className="h-10 w-10 text-orange-500" />
                                    <h3 className="font-bold text-lg">Fitness</h3>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-3xl aspect-square flex flex-col items-center justify-center text-center gap-4">
                                    <Palette className="h-10 w-10 text-blue-500" />
                                    <h3 className="font-bold text-lg">Arts</h3>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-green-50 p-6 rounded-3xl aspect-square flex flex-col items-center justify-center text-center gap-4">
                                    <HeartPulse className="h-10 w-10 text-green-500" />
                                    <h3 className="font-bold text-lg">Wellness</h3>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-3xl aspect-square flex flex-col items-center justify-center text-center gap-4">
                                    <Trophy className="h-10 w-10 text-purple-500" />
                                    <h3 className="font-bold text-lg">Leagues</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
