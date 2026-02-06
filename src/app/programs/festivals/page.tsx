
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Star, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function FestivalsPage() {
    const festivals = [
        {
            title: "Nairobi Festival of Arts (NFA)",
            desc: "A multidisciplinary cultural festival bringing together visual arts, performance, literature, film, and music.",
            icon: <Zap className="h-6 w-6 text-primary" />,
            tag: "Flagship"
        },
        {
            title: "KIKAOO Awards",
            desc: "Celebrating excellence in film, storytelling, and creative expression, recognizing outstanding artists and filmmakers.",
            icon: <Trophy className="h-6 w-6 text-primary" />,
            tag: "Recognition"
        },
        {
            title: "Miss Pink Ribbon Kenya",
            desc: "A purpose-driven beauty pageant promoting breast cancer awareness and women's health education.",
            icon: <Star className="h-6 w-6 text-primary" />,
            tag: "Advocacy"
        }
    ];

    return (
        <div className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4 px-4 md:px-0">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">Exhibitions</Badge>
                        <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight">Festivals & Exhibitions</h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Curated shows, site-specific installations, and annual festivals that highlight diverse artistic practices.
                        </p>
                    </div>

                    <div className="grid gap-6 md:gap-8">
                        {festivals.map((fest, index) => (
                            <Card key={index} className="overflow-hidden border-none shadow-sm group hover:shadow-xl transition-all duration-500 rounded-2xl md:rounded-[32px] bg-white border border-muted/20">
                                <div className="flex flex-col md:flex-row">
                                    <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                                        <Image
                                            src={`https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&sig=${index}`}
                                            alt={fest.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <CardContent className="p-6 md:p-8 md:w-2/3 space-y-3 md:space-y-4 flex flex-col justify-center">
                                        <Badge className="w-fit bg-primary/10 text-primary border-none">{fest.tag}</Badge>
                                        <h3 className="text-2xl md:text-3xl font-bold font-headline">{fest.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {fest.desc}
                                        </p>
                                        <Link href="/initiatives" className="text-primary font-bold inline-flex items-center gap-2 hover:underline">
                                            Learn More <Zap className="h-4 w-4" />
                                        </Link>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
