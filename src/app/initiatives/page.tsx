
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Trophy, Heart, Leaf, Clock, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function InitiativesPage() {
    const initiatives = [
        {
            id: 'nifa',
            name: 'Nairobi Festival of Arts',
            desc: 'Multidisciplinary cultural festival celebrating creativity and cultural diversity.',
            icon: <Zap className="h-6 w-6 text-primary" />,
            href: '/initiatives/nifa',
            color: 'bg-blue-50'
        },
        {
            id: 'kikaoo-awards',
            name: 'KIKAOO Awards',
            desc: 'Celebrating excellence in film, storytelling, and creative expression from Kenya.',
            icon: <Trophy className="h-6 w-6 text-primary" />,
            href: '/initiatives/kikaoo-awards',
            color: 'bg-amber-50'
        },
        {
            id: 'miss-pink-ribbon',
            name: 'Miss Pink Ribbon Kenya',
            desc: 'Promoting breast cancer awareness and women’s health through elegance.',
            icon: <Heart className="h-6 w-6 text-pink-600" />,
            href: '/initiatives/miss-pink-ribbon',
            color: 'bg-pink-50'
        },
        {
            id: 'heal-future',
            name: 'Heal the Future',
            desc: 'Arts-led climate action initiative empowering youth to address environmental challenges.',
            icon: <Leaf className="h-6 w-6 text-green-600" />,
            href: '/initiatives/heal-future',
            color: 'bg-green-50'
        },
        {
            id: 'mmm',
            name: 'Metropolitan Midnight Marathon',
            desc: 'Unique night racing experience promoting health and urban culture.',
            icon: <Clock className="h-6 w-6 text-zinc-900" />,
            href: '/initiatives/mmm',
            color: 'bg-zinc-100'
        },
        {
            id: 'armani-4ever',
            name: 'Armani 4Ever Campaign',
            desc: 'Creative advocacy inspiring youth confidence and positive identity.',
            icon: <Sparkles className="h-6 w-6 text-amber-600" />,
            href: '/initiatives/armani-4ever',
            color: 'bg-orange-50'
        }
    ];

    return (
        <div className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4 max-w-3xl mx-auto px-4 md:px-0">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">Our Focus</Badge>
                        <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight">Flagship Initiatives</h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Targeted programs designed to create lasting social impact, celebrate excellence, and empower the next generation of creative leaders.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {initiatives.map((item) => (
                            <Link key={item.id} href={item.href}>
                                <Card className={`h-full border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group rounded-2xl md:rounded-[32px] ${item.color}`}>
                                    <CardContent className="p-6 md:p-10 space-y-4 md:space-y-6">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold font-headline">{item.name}</h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                            Explore Initiative <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
