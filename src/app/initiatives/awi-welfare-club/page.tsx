'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    PiggyBank,
    Users,
    ShieldCheck,
    TrendingUp,
    HeartHandshake,
    BookOpen,
    Building,
    Landmark,
    ArrowRight,
    CheckCircle2,
    Briefcase,
    GraduationCap,
    Vote
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WelfareClubPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200"
                        alt="Community Investment"
                        fill
                        className="object-cover brightness-[0.3]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background z-10" />
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center space-y-6">
                    <Badge variant="outline" className="border-emerald-400 text-emerald-400 px-4 py-1.5 uppercase font-extrabold tracking-widest text-sm bg-emerald-950/30">
                        Financial Empowerment Initiative
                    </Badge>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight text-white max-w-5xl mx-auto">
                        AWI WELFARE <br />
                        <span className="text-emerald-500">SAVINGS & INVESTMENT</span> CLUB
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Save Together. Grow Together. Thrive Together.
                    </p>
                    <div className="pt-8">
                        <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-full group bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                            <Link href="/register">
                                Join the Club <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div className="space-y-6">
                            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Our Purpose</Badge>
                            <h2 className="text-3xl md:text-4xl font-headline font-bold">Building a Financially Empowered Community</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The AWI Welfare Savings & Investment Club is a members-based initiative designed to promote a culture of saving, collective investment, and social welfare among creatives, professionals, and the community.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <Card className="border-l-4 border-l-emerald-500 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-emerald-700">
                                        <TrendingUp className="h-6 w-6" /> Vision
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">
                                    To build a financially empowered creative and sports community that thrives through collective savings, smart investments, and structured welfare support.
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-blue-500 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-blue-700">
                                        <ShieldCheck className="h-6 w-6" /> Mission
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground">
                                    To provide a trusted platform where members save consistently, access emergency welfare support, and invest jointly in sustainable income-generating ventures.
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Objectives */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-headline font-bold">Core Objectives</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground">Operating on principles of solidarity, discipline, transparency, and shared prosperity.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <PiggyBank className="h-8 w-8 text-emerald-600" />,
                                title: "Promote Savings",
                                desc: "Encourage disciplined monthly contributions among members to build financial resilience."
                            },
                            {
                                icon: <HeartHandshake className="h-8 w-8 text-rose-600" />,
                                title: "Welfare Support",
                                desc: "Provide structured financial assistance for medical needs, bereavement, and crisis response."
                            },
                            {
                                icon: <Building className="h-8 w-8 text-blue-600" />,
                                title: "Investment Opportunities",
                                desc: "Pool funds for real estate, creative ventures, agribusiness, and SME partnerships."
                            },
                            {
                                icon: <GraduationCap className="h-8 w-8 text-amber-600" />,
                                title: "Financial Literacy",
                                desc: "Workshops on personal finance, investment planning, and entrepreneurship."
                            }
                        ].map((item, i) => (
                            <Card key={i} className="group hover:border-emerald-200 hover:shadow-lg transition-all border-muted">
                                <CardContent className="pt-6 space-y-4 text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-muted group-hover:bg-emerald-50 mx-auto flex items-center justify-center transition-colors">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-xl">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Financial Model */}
            <section className="py-24 bg-emerald-950 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-headline font-bold">Our Financial Model</h2>
                            <p className="text-emerald-100/80 text-lg leading-relaxed">
                                A structured approach to wealth creation that balances immediate support with long-term growth.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xl">1</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Savings Fund</h3>
                                        <p className="text-emerald-100/70">Regular monthly deposits accumulating personal wealth. Withdrawals governed by the club constitution.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xl">2</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Welfare Fund</h3>
                                        <p className="text-emerald-100/70">A separate kitty dedicated to emergency assistance, ensuring no member faces crises alone.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xl">3</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Investment Fund</h3>
                                        <p className="text-emerald-100/70">Capital pooling for high-value projects. Returns are shared proportionally based on contribution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-[32px] overflow-hidden bg-emerald-900/50 border border-emerald-500/20 p-8 flex flex-col justify-end group">
                            <Image
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800"
                                alt="Financial Growth"
                                fill
                                className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                            />
                            <div className="relative z-10 space-y-4">
                                <Badge className="bg-emerald-500 text-white border-none py-1.5 px-3">Future Goals</Badge>
                                <h3 className="text-3xl font-bold text-white">Long-Term Vision</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Establish a Sacco model",
                                        "Develop AWI Investment Holdings",
                                        "Launch Cooperative Bank structure",
                                        "Support member asset ownership"
                                    ].map((goal, i) => (
                                        <li key={i} className="flex gap-3 items-center text-emerald-100">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-400" /> {goal}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Governance */}
            <section className="py-20 bg-emerald-50/50">
                <div className="container mx-auto px-4 text-center max-w-4xl space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Governance & Responsibility</h2>
                        <p className="text-muted-foreground text-lg">Ensuring accountability through a registered constitution and independent audits.</p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 text-left">
                        {[
                            { title: "Leadership", items: ["Patron (AWI)", "Chairperson", "Executive Committee"] },
                            { title: "Committees", items: ["Investment Committee", "Welfare Committee", "Audit & Compliance Team"] },
                            { title: "Accountability", items: ["Independent Audits", "Quarterly Updates", "Digital Records"] }
                        ].map((col, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
                                <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
                                    <Vote className="h-5 w-5" /> {col.title}
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    {col.items.map((item, j) => (
                                        <li key={j} className="flex gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-headline font-bold">Start Your Financial Journey</h2>
                    <p className="text-xl text-muted-foreground">
                        Open to AWI members, alumni, partners, and approved associates. Join a community dedicated to shared prosperity.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-200" asChild>
                            <Link href="/register">Register for Membership</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                            Download Constitution
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
