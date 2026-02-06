
import { Badge } from '@/components/ui/badge';
import { Book, FileText, Search, PenTool } from 'lucide-react';

export default function ResearchPage() {
    const sections = [
        {
            title: "Critical Essays",
            desc: "Thought-provoking analysis of contemporary and traditional African arts.",
            icon: <FileText className="h-6 w-6 text-primary" />
        },
        {
            title: "Art Journals",
            desc: "Regular publications documenting new movements and artist profiles.",
            icon: <Book className="h-6 w-6 text-primary" />
        },
        {
            title: "Documentation Projects",
            desc: "Preserving heritage through digital and physical archiving of artistic works.",
            icon: <Search className="h-6 w-6 text-primary" />
        },
        {
            title: "Cultural Scholarship",
            desc: "In-depth research contributions to the global discourse on art and society.",
            icon: <PenTool className="h-6 w-6 text-primary" />
        }
    ];

    return (
        <div className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">Intellectual Hub</Badge>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold">Research, Writing & Publications</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Contributing to cultural scholarship and artistic discourse through rigorous research and creative writing.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {sections.map((item, index) => (
                            <div key={index} className="flex gap-6 p-8 rounded-3xl bg-white shadow-sm border border-muted/20 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                                    {item.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-12 rounded-[40px] bg-secondary text-white">
                        <h2 className="text-3xl font-headline font-bold mb-6 italic text-center">Recent Publications</h2>
                        <div className="space-y-4">
                            {[
                                "The Future of Kenyan Digital Art (2026)",
                                "Documenting Heritage: A Guide for Young Artists",
                                "Art as a Tool for Climate Advocacy: Case Studies from East Africa"
                            ].map((pub, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <span className="font-medium">{pub}</span>
                                    <Badge className="bg-primary text-secondary">PDF</Badge>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
