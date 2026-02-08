
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Music, ShoppingBag, Camera, PlayCircle } from 'lucide-react';
import Image from 'next/image';

export default function NairobiPopLifePage() {
    return (
        <div className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <Badge className="bg-black text-white px-4 py-1.5 uppercase font-bold tracking-widest text-xs">
                            Lifestyle & Culture
                        </Badge>
                        <h1 className="text-5xl md:text-9xl font-headline font-black tracking-tighter text-black">
                            NAIROBI <span className="text-pink-500">POP</span> LIFE
                        </h1>
                        <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto text-zinc-800">
                            Nairobi Pop Life captures and celebrates urban culture, youth expression, music, fashion, and contemporary lifestyle trends shaping the modern African city.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Street Fashion", img: "https://images.unsplash.com/photo-1523396896303-373cf8999609?q=80&w=800", color: "bg-yellow-400" },
                            { title: "Urban Music", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800", color: "bg-blue-400" },
                            { title: "Digital Art", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800", color: "bg-purple-400" },
                        ].map((item, i) => (
                            <div key={i} className="group relative aspect-[4/5] rounded-[32px] overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                <div className={`absolute bottom-6 left-6 right-6 p-4 ${item.color} rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform`}>
                                    <h3 className="text-xl font-black uppercase tracking-tight">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-black text-white p-8 md:p-16 rounded-[40px] text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-headline font-bold">Join the Movement</h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Nairobi Festival of Arts is a multidisciplinary cultural festival bringing together visual arts, performance, literature, film, and music to celebrate creativity and cultural diversity.
                        </p>
                        <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-bold h-16 px-12 rounded-full text-lg">
                            Get Access
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
