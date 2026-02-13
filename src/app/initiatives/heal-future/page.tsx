'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
    Leaf,
    Globe,
    Users,
    Zap,
    Wind,
    Droplets,
    Target,
    Flag,
    MapPin,
    Home,
    Scale,
    Award,
    BookOpen,
    Trophy,
    Heart,
    Palette,
    Mic2,
    Microscope,
    Clock,
    CheckCircle2,
    ArrowRight,
    Search,
    TrendingUp,
    ShieldCheck
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HealTheFuturePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200"
                        alt="Heal the Future Schools Program"
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background z-10" />
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center space-y-6">
                    <Badge variant="outline" className="border-green-500 text-green-400 px-4 py-1.5 uppercase font-extrabold tracking-widest text-sm bg-green-500/10">
                        Climate Action – Schools Program
                    </Badge>
                    <h1 className="text-4xl md:text-8xl font-headline font-bold leading-tight text-white drop-shadow-sm">
                        HEAL THE <span className="text-green-500 italic">FUTURE</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed">
                        A School-Based Environmental Stewardship, Regenerative Agriculture & Youth Leadership Initiative by ArtWorld Institute & Artists Forum Association.
                    </p>
                    <div className="pt-8">
                        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-16 px-10 text-lg font-bold rounded-full group shadow-xl shadow-green-600/20" asChild>
                            <Link href="/register">Join the Program <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Overview & Goal */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-headline font-bold">Program Overview</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Heal the Future – Schools Program is an integrated, year-long initiative that uses arts, culture, sports, and leadership to mobilize learners into practical climate action.
                                </p>
                            </div>
                            <div className="p-8 bg-green-50 rounded-[32px] border border-green-100 shadow-sm">
                                <h3 className="text-xl font-bold font-headline text-green-800 mb-4 flex items-center gap-2">
                                    <Target className="h-5 w-5" /> Program Goal
                                </h3>
                                <p className="text-muted-foreground leading-relaxed italic">
                                    "To nurture environmentally responsible, creative, and socially conscious learners who actively contribute to climate resilience, food security, regenerative agriculture, and environmental sustainability within Kenyan schools and communities."
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Tree Growing", icon: <Leaf className="text-green-600" /> },
                                { label: "Regenerative Farming", icon: <TrendingUp className="text-green-600" /> },
                                { label: "Youth Leadership", icon: <Users className="text-green-600" /> },
                                { label: "Creative Arts", icon: <Palette className="text-green-600" /> }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-muted/30 rounded-2xl flex flex-col items-center text-center gap-3">
                                    <div className="p-3 bg-white rounded-xl shadow-sm">{item.icon}</div>
                                    <span className="font-bold text-sm tracking-tight">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Specific Objectives */}
            <section className="py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl md:text-5xl font-headline font-bold">Our Objectives</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Aligned with Kenya's Climate Action commitments and the CBC framework.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Tree Growing Culture", icon: <Leaf />, desc: "Promoting a strong tree-growing culture, focusing on fruit and edible oil trees." },
                            { title: "Regenerative Agriculture", icon: <TrendingUp />, desc: "Institutionalizing sustainable farming practices through 4K Clubs and Agricultural Clubs." },
                            { title: "Animal Husbandry", icon: <Home />, desc: "Integrating animal systems that support organic manure production and soil health." },
                            { title: "Student Leadership", icon: <Scale />, desc: "Developing accountability and civic responsibility in environmental stewardship." },
                            { title: "Innovation & Advocacy", icon: <Zap />, desc: "Integrating climate action with arts, ICT, innovation, and digital advocacy." },
                            { title: "Scalable Model", icon: <Globe />, desc: "Establishing a model aligned with national climate commitments and CBC framework." }
                        ].map((obj, i) => (
                            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow group">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                        {obj.icon}
                                    </div>
                                    <CardTitle className="text-xl">{obj.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{obj.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Structure & Leadership */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-headline font-bold">Leadership Hierarchy</h2>
                            <p className="text-muted-foreground">From school-level champions to national ambassadors.</p>
                        </div>

                        <Tabs defaultValue="school" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-muted/50 rounded-2xl">
                                <TabsTrigger value="school" className="rounded-xl py-3 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">School</TabsTrigger>
                                <TabsTrigger value="subcounty" className="rounded-xl py-3 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">Subcounty</TabsTrigger>
                                <TabsTrigger value="county" className="rounded-xl py-3 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">County</TabsTrigger>
                                <TabsTrigger value="national" className="rounded-xl py-3 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">National</TabsTrigger>
                            </TabsList>

                            <div className="mt-12 bg-muted/30 rounded-[40px] p-8 md:p-12 border border-muted/50">
                                <TabsContent value="school" className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="grid lg:grid-cols-2 gap-12">
                                        <div className="space-y-6">
                                            <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1">Level 01</Badge>
                                            <h3 className="text-3xl font-headline font-bold">School-Level Winners</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Each participating school organizes an annual <b>Miss & Mr Pink Ribbon Kenya School Pageant</b>. The top 3 male and female winners serve as <b>Heal the Future Climate Action Ambassadors</b>.
                                            </p>
                                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-muted-foreground/10">
                                                <h4 className="font-bold flex items-center gap-2 mb-4 text-green-700">
                                                    <ShieldCheck className="h-5 w-5" /> Mandatory CSR Responsibilities
                                                </h4>
                                                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground">
                                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Tree Growing (Fruit/Oil)</li>
                                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> 4K & Agriculture Clubs</li>
                                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Animal Husbandry</li>
                                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Sustainable Construction</li>
                                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Climate Action Events</li>
                                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Accountability & Reporting</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="relative aspect-video lg:aspect-square rounded-[32px] overflow-hidden">
                                            <Image
                                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800"
                                                alt="School climate action"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="subcounty" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="max-w-4xl mx-auto text-center space-y-6">
                                        <h3 className="text-3xl font-headline font-bold text-primary">Subcounty Climate Champions</h3>
                                        <p className="text-muted-foreground text-lg">Leading the planting of 1,000+ fruit and oil trees across local schools.</p>
                                        <div className="grid sm:grid-cols-3 gap-6 pt-6">
                                            {[
                                                { label: "Awareness", desc: "Breast cancer talks and school outreach." },
                                                { label: "Creative Media", desc: "Advocacy through arts, poetry, and film." },
                                                { label: "Coordination", desc: "Organizing subcounty action events." }
                                            ].map((item, i) => (
                                                <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-muted/20">
                                                    <div className="font-bold text-primary mb-2 uppercase text-xs tracking-widest">{item.label}</div>
                                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="county" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="bg-white rounded-3xl p-8 border border-muted/20">
                                        <div className="flex flex-col md:flex-row gap-12 items-center">
                                            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <Flag className="h-10 w-10" />
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-2xl md:text-3xl font-headline font-bold">County-Level Ambassadors</h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    Mentoring school and subcounty ambassadors while working directly with County Education, Environment, and Health Departments to scale programs county-wide.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="national" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="bg-primary rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl shadow-primary/20">
                                        <div className="relative z-10 space-y-8 max-w-2xl">
                                            <Trophy className="h-12 w-12 text-secondary" />
                                            <h3 className="text-3xl md:text-5xl font-headline font-bold leading-tight">National Climate Ambassadors</h3>
                                            <p className="text-white/80 text-lg leading-relaxed">
                                                The highest level of youth environmental representation in Kenya. National ambassadors champion regenerative agriculture, support partnerships with government and NGOs, and represent youth voices on global platforms.
                                            </p>
                                            <div className="flex gap-4">
                                                <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">Policy Advocacy</Badge>
                                                <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">National Tours</Badge>
                                            </div>
                                        </div>
                                        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-12deg] translate-x-12 z-0" />
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Syllabus Integration */}
            <section className="py-24 bg-muted/20 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-headline font-bold">Syllabus Integration</h2>
                                <p className="text-muted-foreground max-w-xl">Aligned with the CBC co-curricular framework for holistic development.</p>
                            </div>
                            <div className="p-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2">
                                <BookOpen className="h-5 w-5" /> Academic Alignment
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Creative Arts", icon: <Palette className="text-primary" />, list: ["Writing & Poetry", "Drawing & Painting", "Drama & Music", "Spoken Word"] },
                                { title: "Sports for Action", icon: <Trophy className="text-primary" />, list: ["Running for the Future", "Physical Fitness", "Health Advocacy", "Team Leadership"] },
                                { title: "ICT & Media", icon: <Mic2 className="text-primary" />, list: ["Poster Design", "Podcasts", "Digital Storytelling", "Short Films"] },
                                { title: "Clubs & Co-curricular", icon: <Users className="text-primary" />, list: ["4K Club - Agriculture", "Environmental Club", "Project Planning", "Reporting Skills"] },
                                { title: "Leadership", icon: <Scale className="text-primary" />, list: ["Civic Engagement", "CSR Management", "Mentorship", "Accountability"] },
                                { title: "Applied Science", icon: <Microscope className="text-primary" />, list: ["Organic Farming", "Animal Care", "Environmental Ed", "Soil Health"] }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-[32px] border border-muted/30 shadow-sm hover:translate-y-[-4px] transition-all">
                                    <div className="p-3 bg-primary/5 rounded-xl w-fit mb-6">{item.icon}</div>
                                    <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                                    <ul className="space-y-2">
                                        {item.list.map((li, idx) => (
                                            <li key={idx} className="text-sm text-muted-foreground flex gap-2 items-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                                                {li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Age-Appropriate Implementation */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-headline font-bold">Levels of Implementation</h2>
                            <p className="text-muted-foreground">Tailored engagement across all educational stages.</p>
                        </div>

                        <div className="overflow-hidden rounded-[32px] border border-muted shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-muted/50 border-b border-muted">
                                    <tr>
                                        <th className="px-8 py-5 font-headline font-bold">Level</th>
                                        <th className="px-8 py-5 font-headline font-bold">Action Focus</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-muted">
                                    {[
                                        { level: "ECD", focus: "Tree care, storytelling, environmental play" },
                                        { level: "Grades 1–3", focus: "Simple planting, posters, action songs" },
                                        { level: "Grades 4–6", focus: "Club participation, mini campaigns" },
                                        { level: "Grades 7–9", focus: "Project leadership, climate events, media" },
                                        { level: "Grades 10–12", focus: "County & national coordination, mentorship" }
                                    ].map((row, i) => (
                                        <tr key={i} className="group hover:bg-muted/10 transition-colors">
                                            <td className="px-8 py-6 font-bold text-primary">{row.level}</td>
                                            <td className="px-8 py-6 text-muted-foreground">{row.focus}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcomes & Sustainability */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-headline font-bold">Expected Outcomes</h2>
                            <div className="space-y-4">
                                {[
                                    "Increased tree cover & greener school environments",
                                    "Improved food security through fruit & oil trees",
                                    "Functional regenerative agriculture systems",
                                    "Practical learner skills in farming & animal care",
                                    "Confirmed & responsible youth leadership"
                                ].map((row, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                                        <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                                        <span className="font-medium">{row}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[48px] p-8 md:p-12 text-black shadow-2xl self-center space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-headline font-bold text-primary">Sustainability Strategy</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    To ensure long-term impact, the program is built on institutional ownership and continuous leadership transition.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { title: "Institutional Ownership", desc: "School ownership of tree nurseries and animal units." },
                                    { title: "Leadership Transition", desc: "Annual cycle through the pageantry framework." },
                                    { title: "Strategic Partnerships", desc: "County governments, NGOs, and extension officers." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <ShieldCheck className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners & Final CTA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center space-y-12">
                    <div className="max-w-3xl mx-auto space-y-4">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase tracking-widest text-muted-foreground/40">Collaborating Partners</h2>
                        <p className="text-lg font-bold">Ministry of Education • County Governments • Environmental & Health Partners</p>
                    </div>

                    <div className="pt-12 border-t border-muted max-w-4xl mx-auto">
                        <div className="bg-muted p-12 rounded-[64px] space-y-8">
                            <h2 className="text-3xl md:text-5xl font-headline font-bold">Ready to take action?</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Join the movement that is regenerating our soil, our climate, and our future leaders.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-full group" asChild>
                                    <Link href="/register">Register Your School <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold rounded-full" asChild>
                                    <Link href="/community">Join Community</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
