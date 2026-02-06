
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ExploreItem {
    id: string;
    name: string;
    desc: string;
    href: string;
    icon: React.ReactNode;
    color: string;
}

interface ExploreMoreProps {
    title: string;
    description: string;
    items: ExploreItem[];
    type: 'Programs' | 'Initiatives';
}

export function ExploreMore({ title, description, items, type }: ExploreMoreProps) {
    return (
        <section className="py-16 bg-white border-t">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4 max-w-2xl">
                            <Badge variant="outline" className="text-primary border-primary px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
                                {type}
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-headline font-bold leading-tight">{title}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                        </div>
                        <Link
                            href={type === 'Programs' ? '/programs' : '/initiatives'}
                            className="text-primary font-bold flex items-center gap-2 group hover:gap-3 transition-all underline underline-offset-8"
                        >
                            View All {type} <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {items.slice(0, 3).map((item) => (
                            <Link key={item.id} href={item.href}>
                                <Card className={`h-full border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group rounded-2xl ${item.color}`}>
                                    <CardContent className="p-8 space-y-4">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold font-headline">{item.name}</h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm line-clamp-2">{item.desc}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                                            Explore <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
