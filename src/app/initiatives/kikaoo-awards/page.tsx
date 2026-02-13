import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    Calendar,
    Trophy,
    Film,
    Video,
    Users,
    MapPin,
    Mail,
    Globe,
    Leaf,
    Star,
    Clapperboard,
    Timer,
    CheckCircle2,

} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function KikaooAwardsPage() {

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10" />
                    {/* Placeholder for Hero Image - would replace with actual image */}
                    <div className="w-full h-full bg-slate-900" />
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center space-y-6">
                    <Badge variant="outline" className="border-amber-500 text-amber-400 px-4 py-1 mb-4 text-sm md:text-base uppercase tracking-widest">
                        Official Call for Films (Updated)
                    </Badge>
                    <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-bold leading-tight text-white mb-2">
                        KIKAOO <span className="text-amber-500">AWARDS</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto">
                        Incorporating Nairobi Film Festival 2026
                    </p>
                    <p className="text-lg md:text-xl text-amber-200/80 italic max-w-2xl mx-auto">
                        "Where film history meets the future — honoring stories, people, and the planet."
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <div className="flex items-center gap-2 text-white/80 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
                            <Calendar className="h-5 w-5 text-amber-500" />
                            <span>Nov – Dec 2026</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
                            <MapPin className="h-5 w-5 text-amber-500" />
                            <span>National Museums & Bomas of Kenya</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro / Tagline */}
            <section className="py-20 bg-amber-50/10">
                <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-4">
                        <Trophy className="h-8 w-8 text-amber-600" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-headline font-bold text-gray-900">
                        Celebrating Excellence
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        The KIKAOO Awards celebrate excellence in film, storytelling, and creative expression, recognizing outstanding artists, filmmakers, and cultural contributors from Kenya and beyond.
                    </p>
                    <Separator className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
                </div>
            </section>

            {/* Eligibility & Submission */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Eligibility */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                                <h3 className="text-2xl font-bold font-headline mb-6 flex items-center gap-3">
                                    <Film className="h-6 w-6 text-amber-600" /> Eligibility Periods
                                </h3>
                                <div className="space-y-6">
                                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                                        <h4 className="font-bold text-lg text-amber-900 mb-2">Main Film Category</h4>
                                        <p className="text-amber-800">Films produced from <strong>2014 to 2026</strong></p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-lg text-slate-900 mb-2">Special Category: Old School Films</h4>
                                        <p className="text-slate-700 mb-2">Films produced between <strong>2001 – 2013</strong></p>
                                        <p className="text-sm text-slate-500 italic">Celebrating legacy, heritage, and foundational African storytelling.</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground pt-2">
                                        * Both categories are eligible for awards, screenings, and recognition.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Submission Windows */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                                <h3 className="text-2xl font-bold font-headline mb-6 flex items-center gap-3">
                                    <Timer className="h-6 w-6 text-amber-600" /> Submission Windows & Fees
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-green-50 border border-green-100">
                                        <div>
                                            <Badge className="bg-green-600 hover:bg-green-700 mb-2">Early Bird</Badge>
                                            <p className="font-medium text-green-900">1 Feb – 30 April 2026</p>
                                        </div>
                                        <div className="text-xl font-bold text-green-700">USD 25</div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-blue-50 border border-blue-100">
                                        <div>
                                            <Badge className="bg-blue-600 hover:bg-blue-700 mb-2">Regular</Badge>
                                            <p className="font-medium text-blue-900">1 May – 30 July 2026</p>
                                        </div>
                                        <div className="text-xl font-bold text-blue-700">USD 40</div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-red-50 border border-red-100">
                                        <div>
                                            <Badge className="bg-red-600 hover:bg-red-700 mb-2">Late Entry</Badge>
                                            <p className="font-medium text-red-900">1 Aug – 30 Oct 2026</p>
                                        </div>
                                        <div className="text-xl font-bold text-red-700">USD 55</div>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mt-6 italic">
                                    Fees support screenings, jury processes, awards production, and creative development programs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Categories</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">Recognizing diverse formats and impactful storytelling across the spectrum of film.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="bg-slate-800 border-slate-700 text-slate-100">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Video className="text-amber-500" /> Film Categories</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-slate-300">
                                    <li>Feature Films</li>
                                    <li>Short Films</li>
                                    <li>Documentary Films</li>
                                    <li>Student Films</li>
                                    <li>Animation</li>
                                    <li>Experimental & New Media</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-800 border-slate-700 text-slate-100">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Star className="text-amber-500" /> Special Focus</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-slate-300">
                                    <li>Social Justice & Human Rights</li>
                                    <li>Climate & Environmental Films</li>
                                    <li>Cultural Heritage & Indigenous Stories</li>
                                    <li>Youth & Emerging Filmmakers</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-800 border-slate-700 text-slate-100 lg:col-span-2">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Trophy className="text-amber-500" /> Award Categories</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid sm:grid-cols-2 gap-4 text-slate-300">
                                    <ul className="space-y-2">
                                        <li>Best Feature Film</li>
                                        <li>Best Short Film</li>
                                        <li>Best Documentary</li>
                                        <li>Best Director</li>
                                        <li>Best Screenplay</li>
                                        <li>Best Actor</li>
                                        <li>Best Actress</li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li>Best Cinematography</li>
                                        <li>Best Student Film</li>
                                        <li>Best Old School Film (2001–2013)</li>
                                        <li>Audience Choice Award</li>
                                        <li>Emerging Filmmaker Award</li>
                                        <li>Jury Special Mention</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Festival Timeline</h2>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {/* Selection */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-[.is-active]:bg-amber-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-10 md:ml-0 z-10">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 shadow-sm bg-white">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                                    <span className="font-bold text-slate-900">Official Selection</span>
                                    <time className="font-caveat font-medium text-amber-600">Nov 1–7, 2026</time>
                                </div>
                                <p className="text-slate-500 text-sm">Announcement of films selected for competition and screening.</p>
                            </div>
                        </div>

                        {/* Guests */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-[.is-active]:bg-amber-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-10 md:ml-0 z-10">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 shadow-sm bg-white">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                                    <span className="font-bold text-slate-900">Invitations</span>
                                    <time className="font-caveat font-medium text-amber-600">Nov 8–14, 2026</time>
                                </div>
                                <p className="text-slate-500 text-sm">Official invitations sent to nominees and special guests.</p>
                            </div>
                        </div>

                        {/* Voting */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-[.is-active]:bg-amber-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-10 md:ml-0 z-10">
                                <Users className="w-5 h-5" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 shadow-sm bg-white">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                                    <span className="font-bold text-slate-900">Public Voting</span>
                                    <time className="font-caveat font-medium text-amber-600">Nov 15–21, 2026</time>
                                </div>
                                <p className="text-slate-500 text-sm">Audience voting period for People's Choice categories.</p>
                            </div>
                        </div>

                        {/* Grand Opening */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-[.is-active]:bg-amber-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-10 md:ml-0 z-10">
                                <Clapperboard className="w-5 h-5" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 shadow-sm bg-white">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                                    <span className="font-bold text-slate-900">Grand Opening</span>
                                    <time className="font-caveat font-medium text-amber-600">Nov 29, 2026</time>
                                </div>
                                <p className="text-slate-500 text-sm">Festival kick-off event.</p>
                            </div>
                        </div>

                        {/* Gala Night */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-[.is-active]:bg-purple-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-10 md:ml-0 z-10">
                                <Star className="w-5 h-5" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border-t-4 border-purple-600 shadow-lg bg-white">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                                    <span className="font-bold text-xl text-purple-900">KIKAOO Awards Gala Night</span>
                                    <time className="font-bold text-purple-600">Dec 5, 2026</time>
                                </div>
                                <p className="text-slate-500 text-sm mb-2">Bomas of Kenya</p>
                                <ul className="text-xs text-muted-foreground list-disc pl-4">
                                    <li>Red carpet</li>
                                    <li>Live performances</li>
                                    <li>Awards ceremony</li>
                                    <li>Industry celebration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CSR */}
            <section className="py-20 bg-green-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="p-4 bg-green-100 rounded-full w-fit mb-6">
                                <Leaf className="h-10 w-10 text-green-700" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-headline font-bold text-green-900 mb-6">
                                Heal the Future <br />Climate Action Day
                            </h2>
                            <p className="text-lg text-green-800 mb-6">
                                As part of KIKAOO’s commitment to art with purpose, we invite all official guests to participate in our legacy program.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Calendar className="h-5 w-5 text-green-600" />
                                    <span className="font-medium text-green-900">Sunday, 6 December 2026</span>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Planting of 50,000 fruit and oil trees",
                                        "Participation by filmmakers, artists & partners",
                                        "City & cultural tour of Nairobi",
                                        "Community engagement & environmental education"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-green-700">
                                            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 bg-green-200 rounded-3xl h-64 md:h-96 relative overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1723553959050-93b7edf5cf48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZSUyMGhlYWxpbmd8ZW58MHx8MHx8fDA%3D"
                                alt="Climate Action"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12">Organizers & Contact</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl">
                            <Users className="h-8 w-8 text-amber-600 mb-4" />
                            <h4 className="font-bold text-lg mb-2">Organized By</h4>
                            <p className="text-muted-foreground">ArtWorld Institute</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl">
                            <Mail className="h-8 w-8 text-amber-600 mb-4" />
                            <h4 className="font-bold text-lg mb-2">Email Us</h4>
                            <p className="text-muted-foreground break-all">artworldinstituteke@gmail.com</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl">
                            <MapPin className="h-8 w-8 text-amber-600 mb-4" />
                            <h4 className="font-bold text-lg mb-2">Location</h4>
                            <p className="text-muted-foreground">Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
