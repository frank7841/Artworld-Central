
import { Badge } from '@/components/ui/badge';
import { Users, Heart, Zap, Globe } from 'lucide-react';
import Image from 'next/image';

export default function CommunityEngagementPage() {
    const initiatives = [
        {
            title: "Creative Outreach",
            desc: "Using art as a tool for social connection, learning, and civic participation.",
            icon: <Heart className="h-6 w-6 text-primary" />
        },
        {
            title: "Artist-Community Partnerships",
            desc: "Collaborative projects that bring professional artists and communities together.",
            icon: <Users className="h-6 w-6 text-primary" />
        },
        {
            title: "Youth Expression Hub",
            desc: "Platforms like Nairobi Pop Life that capture and celebrate urban youth culture.",
            icon: <Zap className="h-6 w-6 text-primary" />
        },
        {
            title: "Cultural Exchange",
            desc: "Programs that connect local creators with international artistic communities.",
            icon: <Globe className="h-6 w-6 text-primary" />
        }
    ];

    return (
        <div className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4 px-4 md:px-0">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">Engagement</Badge>
                        <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight">Community & Youth Engagement</h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            We use art to transform communities, inspire innovation, and amplify voices across generations.
                        </p>
                    </div>

                    <div className="relative aspect-video rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200"
                            alt="Community Art"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                        {initiatives.map((item, index) => (
                            <div key={index} className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-muted/30 border border-muted/50 hover:bg-white hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
