'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    Truck,
    Plane,
    Ship,
    Zap,
    ShieldCheck,
    Award,
    Users,
    Globe,
    Target,
    Leaf,
    ArrowRight,
    MapPin,
    Calendar,
    Building2,
    CheckCircle2,
    Anchor,
    Train
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function KNTEAPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200"
                        alt="Kenya Transport Excellence"
                        fill
                        className="object-cover brightness-[0.3]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background z-10" />
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center space-y-6">
                    <Badge variant="outline" className="border-primary text-primary px-4 py-1.5 uppercase font-extrabold tracking-widest text-sm bg-primary/10">
                        Launch Edition: December 2026
                    </Badge>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight text-white max-w-5xl mx-auto">
                        KENYA NATIONAL <span className="text-primary">TRANSPORT</span> EXCELLENCE AWARDS
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Driving Safety, Advancing Inclusivity, and Accelerating Sustainable Mobility for Kenya.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-full group" asChild>
                            <Link href="#categories">
                                Explore Categories <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                            <Link href="#strategic-alignment">
                                Strategic Vision
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Executive Overview */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Executive Overview</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            The Kenya National Transport Excellence Awards (KNTEA) is a comprehensive national recognition platform that celebrates excellence across all modes of transport: road, rail, air, water, and emerging mobility systems.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                            {[
                                { icon: <ShieldCheck className="h-8 w-8 text-green-600" />, title: "Safety & Accountability" },
                                { icon: <Users className="h-8 w-8 text-blue-600" />, title: "Inclusivity & Equity" },
                                { icon: <Leaf className="h-8 w-8 text-emerald-600" />, title: "Sustainability" },
                                { icon: <Zap className="h-8 w-8 text-amber-600" />, title: "Innovation" }
                            ].map((item, i) => (
                                <div key={i} className="bg-background p-6 rounded-2xl shadow-sm border border-muted/50 flex flex-col items-center gap-3">
                                    <div className="p-3 bg-muted rounded-full">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-sm md:text-base">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Alignment */}
            <section id="strategic-alignment" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/3 space-y-6 sticky top-24">
                            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">Strategic Framework</Badge>
                            <h2 className="text-3xl md:text-5xl font-headline font-bold">National & Global Alignment</h2>
                            <p className="text-muted-foreground">
                                KNTEA aligns with national values, the Bottom-Up Economic Transformation Agenda (BETA), and international benchmarks to drive systemic change.
                            </p>
                        </div>
                        <div className="md:w-2/3 grid gap-6">
                            <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <Building2 className="h-6 w-6 text-primary" /> BETA Alignment
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground text-sm space-y-2">
                                    <p>• Job creation across transport value chains.</p>
                                    <p>• Empowerment of MSMEs (matatus, boda bodas, logistics).</p>
                                    <p>• Digital transport platforms & climate-smart mobility.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-blue-600 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <Globe className="h-6 w-6 text-blue-600" /> UN SDGs Contribution
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                                    <div>
                                        <span className="font-bold text-foreground">SDG 3:</span> Good Health & Well-being
                                    </div>
                                    <div>
                                        <span className="font-bold text-foreground">SDG 8:</span> Decent Work & Growth
                                    </div>
                                    <div>
                                        <span className="font-bold text-foreground">SDG 9:</span> Industry & Innovation
                                    </div>
                                    <div>
                                        <span className="font-bold text-foreground">SDG 11:</span> Sustainable Cities
                                    </div>
                                    <div>
                                        <span className="font-bold text-foreground">SDG 12:</span> Responsible Consumption
                                    </div>
                                    <div>
                                        <span className="font-bold text-foreground">SDG 13:</span> Climate Action
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-green-600 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <Target className="h-6 w-6 text-green-600" /> Key Partners
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-wrap gap-2">
                                    {["NTSA", "Ministry of Roads", "KCAA", "KMA", "Kenya Railways", "Nairobi County", "Council of Governors"].map((tag) => (
                                        <Badge key={tag} variant="secondary" className="px-3 py-1">{tag}</Badge>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Transport Integration */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-headline font-bold">Comprehensive Integration</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground">Recognizing the diverse ecosystem that keeps Kenya moving.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                        {[
                            { icon: <Truck className="h-8 w-8" />, title: "Road Transport", desc: "PSVs, Logistics, Boda Boda" },
                            { icon: <Train className="h-8 w-8" />, title: "Rail Transport", desc: "Passenger & Freight" },
                            { icon: <Plane className="h-8 w-8" />, title: "Air Transport", desc: "Airlines & Cargo" },
                            { icon: <Anchor className="h-8 w-8" />, title: "Maritime", desc: "Ports & Inland Water" },
                            { icon: <Zap className="h-8 w-8" />, title: "New Mobility", desc: "EVs, Hydrogen, Tech" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-muted hover:border-primary/50 transition-colors">
                                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards Architecture */}
            <section id="categories" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-headline font-bold text-center mb-16">Awards Architecture</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "National Mobility Leadership",
                                items: ["Lifetime Achievement", "Transport Reform Champion", "Public Sector Excellence"],
                                color: "border-purple-500"
                            },
                            {
                                title: "Road Transport Excellence",
                                items: ["PSV Operator of the Year", "Logistics Excellence", "Road Safety Innovation", "Boda Boda Safety"],
                                color: "border-blue-500"
                            },
                            {
                                title: "Green & Alternative Mobility",
                                items: ["Electric Mobility Leader", "Green Fleet Transformation", "Clean Energy Award", "Smart Mobility Tech"],
                                color: "border-green-500"
                            },
                            {
                                title: "Consumer-Centric Excellence",
                                items: ["Passenger Experience", "Affordable Mobility", "Accessible Transport (PWD)", "Gender Inclusion"],
                                color: "border-pink-500"
                            },
                            {
                                title: "Safety & Compliance",
                                items: ["Compliance Excellence", "Safety Discipline Award", "Ethical Conduct Recognition"],
                                color: "border-orange-500"
                            },
                            {
                                title: "Aviation & Maritime",
                                items: ["Airline Service Excellence", "Aviation Safety", "Maritime Safety", "Port Operations"],
                                color: "border-cyan-500"
                            }
                        ].map((category, i) => (
                            <Card key={i} className={`h-full border-t-4 shadow-sm hover:shadow-md transition-all ${category.color}`}>
                                <CardHeader>
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {category.items.map((item, j) => (
                                            <li key={j} className="flex gap-2 items-center text-sm text-muted-foreground">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Structure & Governance */}
            <section className="py-20 bg-zinc-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-headline font-bold">Event Structure: Dec 2026</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">National Mobility Expo</h3>
                                        <p className="text-white/70">Outdoor motor show featuring EVs, aviation demos, smart mobility startups, and county innovation booths.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <Award className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Grand Gala Dinner</h3>
                                        <p className="text-white/70">1,500+ delegates including Cabinet Secretaries, Governors, and Investors. Launch of the National Transport Excellence Index.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <Calendar className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Five-Year Vision</h3>
                                        <p className="text-white/70">Scaling to 5,000 delegates by 2031, integrating into the Africa Mobility Investment Forum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                            <h3 className="text-2xl font-bold">Governance & Leadership</h3>
                            <div className="space-y-4 text-sm text-white/80">
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Patron (Invited)</span>
                                    <span className="font-bold text-white">H.E. The President of Kenya</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Convened By</span>
                                    <span className="font-bold text-white">ArtWorld Institute</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Founder & Concept Lead</span>
                                    <span className="font-bold text-white">Jeremiah Odhiambo Ammbbaassaah</span>
                                </div>
                                <div className="pt-4">
                                    <h4 className="font-bold text-primary mb-2">Advisory Council</h4>
                                    <p className="leading-relaxed">Ministry representatives, NTSA, Aviation & Rail regulators, Council of Governors, Private Sector Leaders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact & CTA */}
            <section className="py-20 text-center">
                <div className="container mx-auto px-4 max-w-4xl space-y-8">
                    <h2 className="text-3xl md:text-5xl font-headline font-bold">A Movement for Change</h2>
                    <p className="text-xl text-muted-foreground">
                        KNTEA is not merely an awards ceremony — it is a structured national movement to advance safety, inclusivity, and sustainability.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-8 pt-8 text-left">
                        {[
                            { title: "For Government", desc: "Strengthened compliance, data-driven reform, and reduced accidents." },
                            { title: "For Industry", desc: "Standardization of excellence, green transition, and investor confidence." },
                            { title: "For Citizens", desc: "Safe, accessible, affordable, and inclusive mobility systems." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-muted/20 rounded-2xl">
                                <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
