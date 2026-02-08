
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Award, Truck, Bus, Car } from 'lucide-react';
import Image from 'next/image';

export default function TransportSafetyAwardsPage() {
    return (
        <div className="py-12 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <Badge variant="outline" className="border-blue-600 text-blue-600 px-4 py-1.5 uppercase font-bold tracking-widest text-xs">
                            National Initiative
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-headline font-bold leading-tight text-slate-900">
                            Kenya National <br />
                            <span className="text-blue-600">Transport & Safety Awards</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            The Kenya National Transport and Safety Awards recognize excellence, innovation, and responsibility in transport, road safety, and mobility across the country.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200"
                                alt="Transport and Safety"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900">Award Categories</h3>
                            <div className="space-y-4">
                                {[
                                    { name: "Public Transport Safety", icon: <Bus className="h-5 w-5" /> },
                                    { name: "Innovation in Mobility", icon: <Car className="h-5 w-5" /> },
                                    { name: "Fleet Management Excellence", icon: <Truck className="h-5 w-5" /> },
                                    { name: "Road Safety Advocacy", icon: <Shield className="h-5 w-5" /> },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            {item.icon}
                                        </div>
                                        <span className="font-bold text-slate-700">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 rounded-xl">
                                Nominate a Candidate
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
