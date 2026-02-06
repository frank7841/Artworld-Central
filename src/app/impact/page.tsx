
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Badge } from '@/components/ui/badge';
import { Users, Leaf, Heart, Globe, Quote, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function ImpactPage() {
    const stats = [
        { label: "Community Reached", value: "25k+", icon: <Users className="h-6 w-6" /> },
        { label: "Schools Partnered", value: "120+", icon: <Globe className="h-6 w-6" /> },
        { label: "Trees Planted", value: "50k+", icon: <Leaf className="h-6 w-6" /> },
        { label: "Youth Mentored", value: "5k+", icon: <Heart className="h-6 w-6" /> }
    ];

    const stories = [
        {
            title: "Empowering the Next Generation of Filmmakers",
            desc: "How the KIKAOO Awards launched the career of three emerging directors from rural Kenya.",
            tag: "Youth"
        },
        {
            title: "Art for Climate Action in Nairobi Schools",
            desc: "Transforming school gardens into artistic expressions of environmental hope.",
            tag: "Climate"
        },
        {
            title: "Women's Health Advocacy through Pageantry",
            desc: "The ripple effect of Miss Pink Ribbon Kenya on local health screenings.",
            tag: "Health"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto space-y-24">
                        <div className="text-center space-y-6 max-w-3xl mx-auto">
                            <Badge variant="outline" className="text-primary border-primary px-4 py-1">Our Impact</Badge>
                            <h1 className="text-5xl md:text-8xl font-headline font-bold leading-tight">Measurable <span className="text-primary italic">Change</span>.</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                ArtWorld Institute is committed to transparent and sustainable impact across social, environmental, and cultural domains.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-8 rounded-[32px] bg-primary/5 border border-primary/10 text-center space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mx-auto text-primary shadow-sm">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold font-headline">{stat.value}</div>
                                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-headline font-bold">Community Impact Stories</h2>
                                <div className="space-y-6">
                                    {stories.map((story, index) => (
                                        <div key={index} className="p-8 rounded-3xl bg-white border border-muted/20 hover:shadow-xl transition-all group cursor-pointer">
                                            <div className="flex justify-between items-start mb-4">
                                                <Badge className="bg-primary/10 text-primary border-none">{story.tag}</Badge>
                                                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{story.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{story.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800"
                                    alt="Impact in action"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                                    <Quote className="h-8 w-8 text-primary mb-4" />
                                    <p className="text-lg font-medium italic mb-4">
                                        "ArtWorld Institute didn't just teach me how to paint; they taught me how to lead."
                                    </p>
                                    <p className="font-bold">— Sarah J., Program Alumni</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-900 text-white p-12 md:p-20 rounded-[60px] text-center space-y-8">
                            <h2 className="text-4xl md:text-5xl font-headline font-bold">Download Impact Reports</h2>
                            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                                We maintain high standards of transparency for our partners and donors. View our annual and program-specific impact reports.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" className="h-16 px-10 font-bold text-lg rounded-2xl">
                                    2023 Annual Report (PDF)
                                </Button>
                                <Button size="lg" variant="outline" className="border-zinc-800 text-white hover:bg-zinc-800 h-16 px-10 font-bold text-lg rounded-2xl">
                                    Sustainability Outlook 2026
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
