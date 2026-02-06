
import { Badge } from '@/components/ui/badge';

export default function HistoryPage() {
    const milestones = [
        { year: "2012", event: "Foundation of ArtWorld Institute to bridge the gap in arts education in Kenya." },
        { year: "2015", event: "Launch of first major community outreach program, reaching over 1000 youth." },
        { year: "2018", event: "Establishment of the Research & Publications department for cultural scholarship." },
        { year: "2021", event: "Expansion of flagship initiatives including NIFA and KIKAOO Awards." },
        { year: "2026", event: "Global recognition as a leader in arts-led climate action through Heal the Future." }
    ];

    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-8">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">Our Journey</Badge>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold">History & Legacy</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Decades of commitment to empowering individuals and communities through interdisciplinary art education and participatory programs.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 pl-10 md:pl-0 space-y-16">
                        {milestones.map((ms, index) => (
                            <div key={index} className="relative md:flex items-center gap-12 group">
                                <div className="hidden md:block w-32 shrink-0 text-right text-3xl font-headline font-bold text-primary opacity-40 group-hover:opacity-100 transition-opacity">
                                    {ms.year}
                                </div>
                                <div className="absolute left-[-51px] md:left-[120px] top-2 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm ring-4 ring-primary/10" />
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-muted/20 group-hover:shadow-lg transition-all flex-grow">
                                    <div className="md:hidden text-xl font-bold text-primary mb-2">{ms.year}</div>
                                    <p className="text-lg leading-relaxed text-muted-foreground">{ms.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-12 rounded-[40px] bg-secondary text-white text-center">
                        <h2 className="text-3xl font-headline font-bold mb-6 italic">Looking Towards the Future</h2>
                        <p className="text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
                            While we celebrate our heritage, we are constantly imagining the future — connecting past traditions with tomorrow’s art forms to ensure every voice enriches our collective story.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
