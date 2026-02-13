'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    Camera,
    CheckCircle2,
    Star,
    Users,
    Briefcase,
    ArrowRight,
    Info,
    Ruler,
    Image as ImageIcon,
    CreditCard,
    Target,
    ShieldCheck,
    AlertCircle
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CastRealPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative h-[80vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200"
                        alt="CastReal Agency Model"
                        fill
                        className="object-cover brightness-[0.3]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background z-10" />
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center space-y-6">
                    <Badge variant="outline" className="border-primary text-primary px-4 py-1.5 uppercase font-extrabold tracking-widest text-sm bg-primary/10">
                        Models Registration & Requirements
                    </Badge>
                    <h1 className="text-4xl md:text-8xl font-headline font-bold leading-tight text-white">
                        CASTREAL <span className="text-primary italic">AGENCY</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Discover your potential with Kenya's premier talent and casting hub. We bridge the gap between exceptional artists and world-class productions.
                    </p>
                    <div className="pt-8">
                        <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-full group" asChild>
                            <Link href="https://forms.google.com" target="_blank">
                                Register Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Registration Steps */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-headline font-bold">Registration Process</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">Follow these steps to join our professional talent roster and begin your journey.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Step 1 & 2 */}
                            <div className="space-y-8">
                                <Card className="border-none shadow-sm h-full">
                                    <CardHeader className="bg-primary/5 pb-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                                            <Info className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Step 1: Personal Information</CardTitle>
                                        <CardDescription>Essential details for your talent profile.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-6 space-y-2 text-sm text-muted-foreground">
                                        <p>• Full Name & Age</p>
                                        <p>• City & Citizenship</p>
                                        <p>• Contact (Phone & Email)</p>
                                        <p>• Special Talents (Dancing, Acting, etc.)</p>
                                        <p>• Previous Experience</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-8">
                                <Card className="border-none shadow-sm h-full">
                                    <CardHeader className="bg-secondary/5 pb-4">
                                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                                            <Ruler className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Step 2: Physical Measurements</CardTitle>
                                        <CardDescription>Accurate data for casting precision.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-6 space-y-2 text-sm text-muted-foreground">
                                        <p>• Height (cm) & Weight (kg)</p>
                                        <p>• Bust/Chest (cm)</p>
                                        <p>• Waist (cm) & Hips (cm)</p>
                                        <p>• Shoe Size</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-8">
                                <Card className="border-none shadow-sm h-full">
                                    <CardHeader className="bg-amber-500/5 pb-4">
                                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-2">
                                            <CreditCard className="h-6 w-6" />
                                        </div>
                                        <CardTitle>Step 4: Registration & Perks</CardTitle>
                                        <CardDescription>Investment in your career growth.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-6 space-y-4">
                                        <div className="text-2xl font-bold text-primary">KShs 2,500</div>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Professional photoshoot included.</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Personal page on <b>All Things Modelling</b>.</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Enrolled in Miss Pink/Red Ribbon.</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Step 3: Photo Guidelines */}
                        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-muted/20">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <ImageIcon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-3xl font-headline font-bold">Step 3: Photo Submission Guidelines</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        To represent you effectively to clients, we need photos that show your true, natural look. Avoid heavy editing or artificial enhancements.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            "Clear, natural, unedited photos",
                                            "Face and full-body shots",
                                            "No heavy makeup or hats",
                                            "No filters or digital distortions",
                                            "Natural lighting is preferred",
                                            "Polaroids or high-quality digital"
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-3 items-center text-sm font-medium">
                                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800"
                                        alt="Professional Casting Photos"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-black font-bold text-sm">
                                            Sample: Natural Look
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Selection Process (Step 5) */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-8">
                                <h3 className="text-2xl md:text-3xl font-headline font-bold flex items-center gap-3">
                                    <Target className="h-8 w-8 text-primary" /> Step 5: Selection Process
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { step: "1", title: "Review", desc: "Our team reviews your form and submitted photos." },
                                        { step: "2", title: "Interview", desc: "Selected candidates are invited for a virtual or in-person interview." },
                                        { step: "3", title: "Decision", desc: "Final selection considers appearance, professionalism, and attitude." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl border border-muted/20 group hover:border-primary/30 transition-colors">
                                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                                                {item.step}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                                <p className="text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pitfalls (Step 7) */}
                            <div className="bg-red-50 rounded-[32px] p-8 border border-red-100 space-y-6">
                                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                                    <AlertCircle className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold font-headline text-red-900">Step 7: Common Pitfalls</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Using photoshopped or heavily filtered images.",
                                        "Unreliability during jobs or talent auditions.",
                                        "Ignoring agency instructions or exclusivity rules."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-red-800 text-sm italic">
                                            <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support & Commitment (Step 6) */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-headline font-bold">Career Support & Agency Commitment</h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                We don't just sign talent; we build careers. Our commitment to our roster ensures consistent growth and opportunities.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 shrink-0 h-fit">
                                        <Briefcase className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Job Guarantee</h4>
                                        <p className="text-white/70">We promise to secure at least <b>two jobs annually</b> for each model in events, activations, and promotions.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 shrink-0 h-fit">
                                        <Star className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Global Reach</h4>
                                        <p className="text-white/70">Benefit from referrals and pitches for <b>international engagements</b> within 18 months.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 border border-white/20 space-y-6">
                            <h3 className="text-2xl font-bold font-headline flex items-center gap-2">
                                <ShieldCheck className="h-6 w-6 text-secondary" /> Professional Standards
                            </h3>
                            <ul className="space-y-4 text-white/90 text-sm">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                    Models must be reliable, punctual, and professional.
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                    Some projects may require brand exclusivity.
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                    Bypassing the agency results in immediate removal.
                                </li>
                            </ul>
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-xs text-white/50 italic leading-relaxed">
                                    "Your professionalism is our reputation. We work together to achieve excellence on every project."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Declaration & CTA */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 text-center max-w-3xl space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Start?</h2>
                        <p className="text-muted-foreground text-lg italic">
                            "I confirm that all information provided is accurate and photos submitted represent my true appearance."
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-full group shadow-xl shadow-primary/20" asChild>
                            <Link href="https://forms.google.com" target="_blank">
                                Open Registration Form <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform whitespace-nowrap md:whitespace-normal" />
                            </Link>
                        </Button>
                    </div>

                    <div className="pt-12 text-muted-foreground text-sm border-t border-muted max-w-xl mx-auto">
                        <p>Questions? Contact our scouting team at <span className="text-primary font-bold">scouts@castrealagency.com</span></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
