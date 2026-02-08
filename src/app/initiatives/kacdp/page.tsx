
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Users, Heart, HandHeart, School, Building } from 'lucide-react';
import Image from 'next/image';

export default function KACDPPage() {
    return (
        <div className="py-12 md:py-24 bg-green-50/50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <Badge className="bg-green-600 text-white px-4 py-1.5 uppercase font-extrabold tracking-widest text-xs border-none">
                                Community Development
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight text-green-900">
                                KACDP <br />
                                <span className="text-green-600 italic text-2xl md:text-4xl block mt-2">Kenya Arts & Community Development Project</span>
                            </h1>
                            <p className="text-lg md:text-xl text-green-800/80 leading-relaxed">
                                KACDP is a cultural development program focused on arts education, community participation, and creative capacity building as tools for social and economic growth.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-14 px-8 rounded-xl font-bold">
                                    Our Projects
                                </Button>
                                <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-100 h-14 px-8 rounded-xl font-bold">
                                    Partner With Us
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg translate-y-8">
                                <Image
                                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800"
                                    alt="Community helping"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800"
                                    alt="Community growing"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Empowerment", icon: <HandHeart className="h-8 w-8 text-green-600" />, desc: "Providing tools and resources for self-reliance." },
                            { title: "Education", icon: <School className="h-8 w-8 text-green-600" />, desc: "Scholarships and training for underprivileged youth." },
                            { title: "Infrastructure", icon: <Building className="h-8 w-8 text-green-600" />, desc: "Building community centers and creative hubs." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                                <div className="mb-4 bg-green-50 w-16 h-16 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-green-900 mb-2">{item.title}</h3>
                                <p className="text-green-800/70">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
