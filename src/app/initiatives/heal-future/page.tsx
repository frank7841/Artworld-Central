
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Globe, Users, Zap, Wind, Droplets } from 'lucide-react';
import Image from 'next/image';

export default function HealTheFuturePage() {
    const pillars = [
        { title: "Creative Education", icon: <Leaf className="h-6 w-6" />, desc: "Teaching environmental stewardship through artistic expression." },
        { title: "Awareness Campaigns", icon: <Globe className="h-6 w-6" />, desc: "Arts-led initiatives to highlight urgent climate challenges." },
        { title: "Sustainable Practices", icon: <Wind className="h-6 w-6" />, desc: "Promoting eco-friendly methods in the arts and community life." },
        { title: "Youth Empowerment", icon: <Users className="h-6 w-6" />, desc: "Equipping young people to lead climate action in their schools." }
    ];

    return (
        <div className="py-12 md:py-24 bg-blue-50/30">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <Badge className="bg-green-600 text-white px-4 py-1.5 uppercase font-extrabold tracking-widest text-xs border-none">
                                Climate Action
                            </Badge>
                            <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight">
                                Heal the <br />
                                <span className="text-green-600 italic">Future</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Heal the Future is an arts-led climate action initiative that empowers schools, youth, and communities to address environmental challenges through creative education.
                            </p>
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-14 md:h-16 px-8 md:px-10 font-bold text-base md:text-lg rounded-xl md:rounded-2xl w-full sm:w-auto">
                                Get Involved in Climate Action
                            </Button>
                        </div>
                        <div className="relative aspect-square rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl md:rotate-3">
                            <Image
                                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200"
                                alt="Climate Action"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="p-6 md:p-10 rounded-2xl md:rounded-[40px] bg-white border border-green-100 hover:shadow-2xl transition-all group">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6 md:mb-8 border border-green-100 mx-auto sm:mx-0">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center sm:text-left">{pillar.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic text-center sm:text-left">"{pillar.desc}"</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 md:p-16 rounded-3xl md:rounded-[60px] bg-green-900 text-white text-center space-y-6 md:space-y-8">
                        <h2 className="text-3xl md:text-5xl font-headline font-bold">Making a Sustainable Impact</h2>
                        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
                            We believe that art has the power to bridge the gap between scientific facts and emotional connection, driving real environmental change.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-4 md:pt-8">
                            <div>
                                <div className="text-3xl md:text-5xl font-bold text-green-400">50+</div>
                                <div className="text-[10px] md:text-sm uppercase tracking-widest opacity-60">Schools reached</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-5xl font-bold text-green-400">10k+</div>
                                <div className="text-[10px] md:text-sm uppercase tracking-widest opacity-60">Trees planted</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-5xl font-bold text-green-400">5k</div>
                                <div className="text-[10px] md:text-sm uppercase tracking-widest opacity-60">Climate artists</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
