
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function LeadershipPage() {
    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-24">
                    <div className="text-center space-y-8">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">Our Leadership</Badge>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold">Leadership & Governance</h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
                                alt="Jeremiah Odhiambo Ammbbaassaah"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10 text-white">
                                <p className="text-2xl font-bold font-headline">Jeremiah Odhiambo Ammbbaassaah</p>
                                <p className="text-secondary font-medium uppercase tracking-widest text-sm">President</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-headline font-bold text-primary italic">Leadership & Legacy</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Under the guidance of President Jeremiah Odhiambo Ammbbaassaah, ArtWorld Institute continues to expand its reach and impact.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    With deep experience in creative programming, institutional partnerships, and cultural advocacy, our leadership prioritizes sustainable growth grounded in artistic excellence and community relevance.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl bg-muted/30 border border-muted/50 space-y-4">
                                <h3 className="font-bold text-xl">Governance Model</h3>
                                <p className="text-muted-foreground">
                                    Our transparent governance structure ensures that every program aligns with our mission of inclusivity and cultural documentation. We work with a diverse board of advisors from across the arts and social impact sectors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
