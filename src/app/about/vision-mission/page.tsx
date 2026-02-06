
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export default function VisionMissionPage() {
    const missionPoints = [
        "Cultivate creative talent through progressive education in visual, performing, and literary arts.",
        "Foster critical dialogue about culture, identity, and society through exhibitions, workshops, and public programming.",
        "Bridge generations by documenting heritage arts while advancing contemporary practices.",
        "Amplify underrepresented voices, particularly emerging artists whose perspectives shape the future of art."
    ];

    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-24">
                    <div className="text-center space-y-8">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">Our Purpose</Badge>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold">Vision & Mission</h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-headline font-bold text-primary italic underline decoration-secondary decoration-4 underline-offset-8">Our Vision</h2>
                            <p className="text-2xl font-medium leading-relaxed">
                                To be a global leader in arts education and cultural engagement — where creativity thrives without boundaries and every learner discovers the power of artistic expression.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl font-headline font-bold text-primary italic underline decoration-secondary decoration-4 underline-offset-8">Our Mission</h2>
                            <p className="text-lg text-muted-foreground">ArtWorld Institute exists to:</p>
                            <div className="space-y-4">
                                {missionPoints.map((point, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-muted/20">
                                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                        <p className="font-medium">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
