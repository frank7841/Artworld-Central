
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Users, Zap } from 'lucide-react';
import Image from 'next/image';

export default function ArtsEducationPage() {
    const offerings = [
        {
            title: "Hands-on Training",
            desc: "Practical workshops in fine arts, digital media, and performance.",
            icon: <Zap className="h-6 w-6 text-primary" />
        },
        {
            title: "Masterclasses",
            desc: "Sessions led by industry pioneers and expert practitioners.",
            icon: <GraduationCap className="h-6 w-6 text-primary" />
        },
        {
            title: "Mentorships",
            desc: "One-on-one guidance to help you navigate your creative career.",
            icon: <Users className="h-6 w-6 text-primary" />
        },
        {
            title: "Curatorial Practice",
            desc: "Learn the art of storytelling through exhibition design and management.",
            icon: <BookOpen className="h-6 w-6 text-primary" />
        }
    ];

    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">Programs</Badge>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold">Arts Education & Training</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Cultivating creative talent through progressive education in visual, performing, and literary arts.
                        </p>
                    </div>

                    <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200"
                            alt="Arts Education"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {offerings.map((item, index) => (
                            <div key={index} className="p-8 rounded-3xl bg-white border border-muted/20 hover:border-primary/20 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-primary p-12 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-headline font-bold italic">Ready to start your journey?</h2>
                            <p className="opacity-80">Join our upcoming intake and unlock your creative potential.</p>
                        </div>
                        <Button size="lg" className="bg-secondary text-primary hover:bg-white h-16 px-10 font-bold text-lg">
                            Enroll Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
