
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, School, Users, Star } from 'lucide-react';
import Image from 'next/image';

export default function SchoolsProgramsPage() {
    const steps = [
        {
            title: "Artistic Awareness",
            desc: "Introducing students to diverse creative disciplines through school tours and exhibitions.",
            icon: <Star className="h-6 w-6 text-primary" />
        },
        {
            title: "In-School Workshops",
            desc: "Bringing expert artists to classrooms for hands-on creative training and mentorship.",
            icon: <School className="h-6 w-6 text-primary" />
        },
        {
            title: "Teacher Training",
            desc: "Empowering educators with new tools to foster creativity in their students.",
            icon: <Users className="h-6 w-6 text-primary" />
        },
        {
            title: "Creative Career Days",
            desc: "Connecting students with professionals in the film, fashion, and visual arts industries.",
            icon: <Home className="h-6 w-6 text-primary" />
        }
    ];

    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">Education</Badge>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold">Schools Programs</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Partnering with schools to bring arts education and creative thinking to the next generation.
                        </p>
                    </div>

                    <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200"
                            alt="School Art Program"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-headline font-bold text-center italic">How We Partner with Schools</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-6 p-8 rounded-3xl bg-primary/5 border border-primary/10">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                                        {step.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center p-12 rounded-[40px] border-4 border-dashed border-primary/20 space-y-6">
                        <h2 className="text-3xl font-headline font-bold">Partner Your School With Us</h2>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            We are expanding our reach to more schools across Kenya. Let's work together to nurture the creative leaders of tomorrow.
                        </p>
                        <Button size="lg" className="h-16 px-10 font-bold text-lg">
                            Download Partnership Toolkit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
