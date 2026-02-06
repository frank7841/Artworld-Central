
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Heart, Briefcase, Zap, Globe, HandshakeIcon } from 'lucide-react';

export default function GetInvolvedPage() {
    const ways = [
        {
            id: "partner",
            title: "Partner With Us",
            desc: "Collaborate on projects, events, and research initiatives that align with our mission.",
            icon: <HandshakeIcon className="h-6 w-6" />,
            action: "Become a Partner"
        },
        {
            id: "volunteer",
            title: "Volunteer",
            desc: "Give your time and skills to support our programs and community outreach.",
            icon: <Users className="h-6 w-6" />,
            action: "Sign Up to Volunteer"
        },
        {
            id: "sponsorship",
            title: "Sponsorship & CSR",
            desc: "Invest in the creative future of Kenya through our flagship programs.",
            icon: <Zap className="h-6 w-6" />,
            action: "Explore Sponsorship"
        },
        {
            id: "donate",
            title: "Donations & Support",
            desc: "Your financial contributions directly fund our scholarships and community projects.",
            icon: <Heart className="h-6 w-6" />,
            action: "Donate Today"
        },
        {
            id: "careers",
            title: "Careers & Internships",
            desc: "Join our team of dedicated professionals and creative leaders.",
            icon: <Briefcase className="h-6 w-6" />,
            action: "View Openings"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-24">
                        <div className="text-center space-y-6 max-w-3xl mx-auto">
                            <Badge variant="outline" className="text-primary border-primary px-4 py-1">Join the Movement</Badge>
                            <h1 className="text-5xl md:text-8xl font-headline font-bold leading-tight">Be part of the <span className="text-primary italic">Story</span>.</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Whether you are an individual, a corporation, or a fellow institution, there is a place for you at ArtWorld Institute.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {ways.map((way, index) => (
                                <div
                                    key={index}
                                    id={way.id}
                                    className="p-10 rounded-[40px] bg-white border border-muted/20 hover:shadow-2xl transition-all flex flex-col justify-between group"
                                >
                                    <div className="space-y-6">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                            {way.icon}
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold font-headline">{way.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{way.desc}</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" className="mt-8 p-0 h-auto font-bold text-primary group-hover:underline">
                                        {way.action}
                                    </Button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-secondary p-16 md:p-24 rounded-[60px] text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
                            <div className="relative z-10 max-w-2xl space-y-8">
                                <h2 className="text-4xl md:text-6xl font-headline font-bold">Why Join Us?</h2>
                                <div className="grid gap-6">
                                    {[
                                        "Directly impact the lives of thousands of creative youth.",
                                        "Contribute to the preservation and promotion of African cultural heritage.",
                                        "Be part of a global network of artists, scholars, and advocates.",
                                        "Access exclusive events, previews, and research publications."
                                    ].map((reason, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                                                <Zap className="h-3 w-3 text-secondary" />
                                            </div>
                                            <p className="text-lg opacity-80">{reason}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
