
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, ScrollText, Globe, Trophy, Users } from 'lucide-react';
import Image from 'next/image';

export default function ArtWorldInstitutePage() {
    return (
        <div className="py-12 md:py-24 bg-[#F8F9FA]">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-20">
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <Badge variant="outline" className="border-primary text-primary px-4 py-1.5 uppercase font-bold tracking-widest text-xs">
                            World Premiere Institution
                        </Badge>
                        <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight text-primary">
                            ArtWorld Institute
                        </h1>
                        ArtWorld Institute is a premier arts training and research institution dedicated to nurturing creativity, advancing cultural knowledge, and shaping future artistic leaders through education, innovation, and community engagement.
                    </div>

                    <div className="relative aspect-video rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"
                            alt="ArtWorld Institute Campus"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Button size="lg" className="rounded-full w-20 h-20 bg-white/90 text-primary hover:scale-110 transition-transform shadow-xl">
                                <Globe className="h-8 w-8" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-muted">
                            <GraduationCap className="h-10 w-10 text-primary mb-6" />
                            <h3 className="text-2xl font-bold mb-3 font-headline">Professional Certification</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Accredited courses in arts management, creative entrepreneurship, and digital media.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-muted">
                            <ScrollText className="h-10 w-10 text-secondary mb-6" />
                            <h3 className="text-2xl font-bold mb-3 font-headline">Research & Policy</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Leading studies on the creative economy, informing policy and industry standards.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-muted">
                            <Trophy className="h-10 w-10 text-primary mb-6" />
                            <h3 className="text-2xl font-bold mb-3 font-headline">Executive Education</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Masterclasses and workshops for established leaders in the cultural sector.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
