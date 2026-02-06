
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Users, ShieldCheck, Scroll, Zap } from 'lucide-react';

export default function ValuesPage() {
    const values = [
        {
            title: "Creativity",
            desc: "We champion original thinking and artistic experimentation.",
            icon: <Lightbulb className="h-8 w-8 text-primary" />,
            color: "bg-blue-50"
        },
        {
            title: "Inclusion",
            desc: "We build inclusive spaces where artists from varied backgrounds feel represented and supported.",
            icon: <Users className="h-8 w-8 text-primary" />,
            color: "bg-purple-50"
        },
        {
            title: "Integrity",
            desc: "We uphold ethical collaboration between practitioners, audiences, and communities.",
            icon: <ShieldCheck className="h-8 w-8 text-primary" />,
            color: "bg-green-50"
        },
        {
            title: "Cultural Memory",
            desc: "We celebrate heritage while imagining the future — connecting past traditions with tomorrow’s art forms.",
            icon: <Scroll className="h-8 w-8 text-primary" />,
            color: "bg-amber-50"
        },
        {
            title: "Innovation",
            desc: "Advancing contemporary practices and leveraging technology to amplify artistic voices.",
            icon: <Zap className="h-8 w-8 text-primary" />,
            color: "bg-red-50"
        }
    ];

    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-8">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">What Guides Us</Badge>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold">Our Values</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            These core values guide everything we do, from educational programming to community partnerships.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className={`p-8 rounded-[32px] border border-muted/20 hover:shadow-xl transition-all duration-300 group`}>
                                <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
