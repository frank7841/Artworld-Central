
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function WhoWeArePage() {
    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">About Us</Badge>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold">Who We Are</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Founded to nurture imagination and expand cultural horizons, ArtWorld Institute serves as a hub for artists, scholars, and cultural leaders.
                        </p>
                    </div>

                    <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1200"
                            alt="ArtWorld Institute Hub"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-headline font-bold">A Dynamic Creative Institution</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                ArtWorld Institute is a dynamic creative institution rooted in the belief that art transforms communities, inspires innovation, and amplifies voices across generations.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                For decades, our mission has centered on empowering individuals and communities through interdisciplinary art education, participatory programs, and platforms that elevate contemporary and traditional artistic voices across Africa and the world.
                            </p>
                        </div>
                        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                            <h3 className="text-xl font-bold mb-4">Our Essence</h3>
                            <p className="text-muted-foreground leading-relaxed italic">
                                "In a world where art often reflects the heart of social change, ArtWorld Institute is more than a school or cultural space — it is an incubator for ideas that shape how we see ourselves and each other."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
