
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
        <div className="py-24 bg-blue-50/30">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <Badge className="bg-green-600 text-white px-4 py-1.5 uppercase font-extrabold tracking-widest text-xs border-none">
                                Climate Action
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
                                Heal the <br />
                                <span className="text-green-600 italic">Future</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Heal the Future is an arts-led climate action initiative that empowers schools, youth, and communities to address environmental challenges through creative education.
                            </p>
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-16 px-10 font-bold text-lg rounded-2xl">
                                Get Involved in Climate Action
                            </Button>
                        </div>
                        <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl rotate-3">
                            <Image
                                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200"
                                alt="Climate Action"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="p-10 rounded-[40px] bg-white border border-green-100 hover:shadow-2xl transition-all group">
                                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-8 border border-green-100">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                                <p className="text-muted-foreground leading-relaxed italic">"{pillar.desc}"</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-16 rounded-[60px] bg-green-900 text-white text-center space-y-8">
                        <h2 className="text-4xl md:text-5xl font-headline font-bold">Making a Sustainable Impact</h2>
                        <p className="text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
                            We believe that art has the power to bridge the gap between scientific facts and emotional connection, driving real environmental change.
                        </p>
                        <div className="flex flex-wrap justify-center gap-12 pt-8">
                            <div>
                                <div className="text-5xl font-bold text-green-400">50+</div>
                                <div className="text-sm uppercase tracking-widest opacity-60">Schools reached</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-green-400">10k+</div>
                                <div className="text-sm uppercase tracking-widest opacity-60">Trees planted</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-green-400">5k</div>
                                <div className="text-sm uppercase tracking-widest opacity-60">Climate artists</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
