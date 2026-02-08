
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Newspaper, Pen, Share2, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function ArtWorldJournalPage() {
    return (
        <div className="py-12 md:py-24 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl skew-x-1 lg:skew-x-2">
                            <Image
                                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800"
                                alt="ArtWorld Journal Cover"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
                        </div>
                        <div className="space-y-8">
                            <Badge variant="outline" className="border-stone-900 text-stone-900 px-4 py-1.5 uppercase font-bold tracking-widest text-xs rounded-sm">
                                Publication
                            </Badge>
                            <h1 className="text-5xl md:text-8xl font-serif font-black leading-none text-stone-900">
                                ArtWorld <br />
                                <span className="italic font-light">Journal</span>
                            </h1>
                            <div className="h-1 w-20 bg-stone-900"></div>
                            <p className="text-xl text-stone-600 leading-relaxed font-serif">
                                The definitive voice on African art, culture, and creative policy. Featuring in-depth essays, critiques, and interviews with thought leaders.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="bg-stone-900 text-white hover:bg-stone-800 font-bold h-14 px-8 rounded-none w-full sm:w-auto">
                                    <BookOpen className="mr-2 h-4 w-4" /> Read Latest Issue
                                </Button>
                                <Button size="lg" variant="outline" className="border-stone-900 text-stone-900 hover:bg-stone-100 font-bold h-14 px-8 rounded-none w-full sm:w-auto">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 py-12 border-t border-stone-200">
                        {[
                            { title: "Critical Reviews", icon: <Pen className="h-6 w-6" />, desc: "Expert analysis of exhibitions and performances." },
                            { title: "Cultural Policy", icon: <Newspaper className="h-6 w-6" />, desc: "Discussions on the governance of the creative economy." },
                            { title: "Global Dialogues", icon: <Share2 className="h-6 w-6" />, desc: "Connecting local narratives with international discourse." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <div className="p-4 bg-stone-200 w-fit rounded-full">{item.icon}</div>
                                <h3 className="font-bold text-xl font-serif">{item.title}</h3>
                                <p className="text-stone-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
