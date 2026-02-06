
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
        <div className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4 px-4 md:px-0">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">Education</Badge>
                        <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight">Schools Programs</h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Partnering with schools to bring arts education and creative thinking to the next generation.
                        </p>
                    </div>

                    <div className="relative aspect-video rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200"
                            alt="School Art Program"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-6 md:space-y-8">
                        <h2 className="text-2xl md:text-3xl font-headline font-bold text-center italic">How We Partner with Schools</h2>
                        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col sm:flex-row gap-4 md:gap-6 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-primary/5 border border-primary/10">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm mx-auto sm:mx-0">
                                        {step.icon}
                                    </div>
                                    <div className="space-y-2 text-center sm:text-left">
                                        <h3 className="text-lg md:text-xl font-bold">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center p-8 md:p-12 rounded-3xl md:rounded-[40px] border-4 border-dashed border-primary/20 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-headline font-bold">Partner Your School With Us</h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                            We are expanding our reach to more schools across Kenya. Let's work together to nurture the creative leaders of tomorrow.
                        </p>
                        <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 font-bold text-base md:text-lg w-full sm:w-auto">
                            Download Partnership Toolkit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
