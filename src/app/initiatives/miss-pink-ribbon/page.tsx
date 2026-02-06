
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Star, Users, Zap, ShieldPlus } from 'lucide-react';
import Image from 'next/image';

export default function MissPinkRibbonPage() {
    const objectives = [
        { title: "Breast Cancer Awareness", icon: <ShieldPlus className="h-6 w-6" />, desc: "Promoting early detection and health education nationwide." },
        { title: "Women's Empowerment", icon: <Users className="h-6 w-6" />, desc: "Empowering young women to become advocates and leaders." },
        { title: "Elegance & Advocacy", icon: <Star className="h-6 w-6" />, desc: "Combining beauty with purpose-driven community impact." },
        { title: "Health Screenings", icon: <Heart className="h-6 w-6" />, desc: "Facilitating access to medical services for underserved communities." }
    ];

    return (
        <div className="py-24 bg-pink-50/20">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <Badge className="bg-pink-600 text-white px-4 py-1.5 uppercase font-extrabold tracking-widest text-xs border-none">
                                Beauty with Purpose
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
                                Miss Pink <br />
                                <span className="text-pink-600 italic">Ribbon Kenya</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Miss Pink Ribbon Kenya is a purpose-driven pageant that combines elegance with advocacy, promoting breast cancer awareness, women’s health education, and community empowerment.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white h-16 px-10 font-bold text-lg rounded-2xl">
                                    Register as a Contestant
                                </Button>
                                <Button size="lg" variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-50 h-16 px-10 font-bold text-lg rounded-2xl">
                                    Become a Sponsor
                                </Button>
                            </div>
                        </div>
                        <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl order-1 lg:order-2 border-8 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800"
                                alt="Miss Pink Ribbon Kenya"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-pink-100 shadow-sm text-center">
                                <Heart className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                                <p className="font-bold text-pink-600 uppercase tracking-widest text-xs">Advocacy First</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {objectives.map((obj, index) => (
                            <div key={index} className="p-8 rounded-[32px] bg-white shadow-sm border border-pink-100 hover:border-pink-300 transition-all text-center">
                                <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 mx-auto mb-6">
                                    {obj.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{obj.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{obj.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="relative rounded-[40px] overflow-hidden bg-pink-900 shadow-2xl">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 md:p-16 space-y-8 text-white">
                                <h2 className="text-4xl font-headline font-bold">Support the Cause</h2>
                                <p className="text-lg opacity-80 leading-relaxed">
                                    Your contribution helps us provide free screenings and support for women across Kenya. Join us in the fight against breast cancer.
                                </p>
                                <div className="grid grid-cols-2 gap-8 my-10">
                                    <div>
                                        <div className="text-4xl font-bold text-pink-400">1M+</div>
                                        <div className="text-xs uppercase tracking-widest opacity-60">People reached</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-pink-400">5k+</div>
                                        <div className="text-xs uppercase tracking-widest opacity-60">Screenings funded</div>
                                    </div>
                                </div>
                                <Button size="lg" className="bg-white text-pink-900 hover:bg-pink-50 h-16 px-12 font-bold text-lg rounded-2xl w-full sm:w-auto">
                                    Donate to the Program
                                </Button>
                            </div>
                            <div className="relative h-full min-h-[300px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?q=80&w=800"
                                    alt="Awareness Walk"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
