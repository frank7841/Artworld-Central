import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Heart, Scale, Users, Calendar, MapPin, Mail, Phone, Globe, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MissPinkRibbonPage() {
    const heroImg = PlaceHolderImages.find(img => img.id === 'program-pink-ribbon');

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="flex flex-col md:relative md:min-h-screen">
                {/* Image block */}
                <div className="relative w-full h-[50vh] md:absolute md:inset-0 md:h-full">
                    <Image
                        src={heroImg?.imageUrl || '/image/misspinkribbon.jpeg'}
                        alt="Miss Pink Ribbon Kenya"
                        fill
                        className="object-cover object-top md:object-center brightness-100 md:brightness-[0.4]"
                        priority
                    />
                </div>    <div className="absolute inset-0 bg-pink-900/30 mix-blend-multiply hidden md:block" />
                <div className="container mx-auto px-4 relative z-10 text-center space-y-8 py-12 flex-1 flex flex-col justify-center md:absolute md:inset-0 md:h-full">
                    {/* <Badge className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-2 rounded-full mb-4 border-none shadow-lg shadow-pink-500/20">
                        2025 – 2029
                    </Badge> */}
                    <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-lg text-gray-900 md:text-white">
                        Miss Pink Ribbon <span className="text-pink-600 md:text-pink-400 italic">Kenya</span>
                    </h1>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <p className="text-xl sm:text-2xl md:text-3xl font-light italic text-pink-800 md:text-pink-100">
                            "Kuwa kivuli kwa wanaohitaji, kuwa sauti kwa wasio na uwezo."
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-600 md:text-white/90">
                            (Be a shadow for those in need, a voice for the voiceless.)
                        </p>
                    </div>
                    <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-500/30 border-none" asChild>
                            <Link href="https://forms.gle/csJR7npkCiAQnmrS8" target="_blank" rel="noopener noreferrer">
                                Register Now
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-pink-200 text-pink-700 hover:bg-pink-100 md:bg-white/10 md:text-white md:border-white/30 md:hover:bg-white/20 backdrop-blur-sm" asChild>
                            <Link href="#">
                                Become a Sponsor
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-white to-pink-50/50">
                <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold text-gray-900">
                        Celebrating <span className="text-pink-600">Beauty</span>, <span className="text-pink-600">Advocacy</span> & <span className="text-pink-600">Life</span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        The Miss Pink Ribbon Kenya pageant is more than a competition; it is a movement. We are looking for ambassadors who represent the values of <span className="font-semibold text-pink-700">Utu</span> and <span className="font-semibold text-pink-700">Harambee</span>, dedicated to raising awareness for breast cancer and supporting those affected by it.
                    </p>
                    <div className="flex justify-center">
                        <Separator className="w-32 h-1.5 bg-pink-500 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section id="requirements" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="border-pink-200 text-pink-600 mb-4">Participation</Badge>
                            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900">
                                Eligibility & Requirements
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                            {/* Eligibility Criteria */}
                            <Card className="border-pink-100 shadow-xl shadow-pink-100/50 overflow-hidden">
                                <CardHeader className="bg-pink-600 text-white p-6">
                                    <CardTitle className="flex items-center gap-3 text-2xl">
                                        <CheckCircle2 className="h-6 w-6" />
                                        Eligibility Criteria
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <Accordion type="single" collapsible className="w-full" defaultValue="identity">
                                        <AccordionItem value="identity" className="border-b px-6">
                                            <AccordionTrigger className="font-bold text-lg py-4 hover:text-pink-600 text-left">A. National Identity & Residency</AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground pb-4">
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>Must be a Kenyan citizen or a legal resident for a minimum of three (3) years.</li>
                                                    <li>Must possess a valid National ID, Passport, or Alien Certificate.</li>
                                                    <li>Proficiency in both English and Kiswahili is required; knowledge of local dialects is an added advantage.</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="age" className="border-b px-6">
                                            <AccordionTrigger className="font-bold text-lg py-4 hover:text-pink-600 text-left">B. Age & Health Advocacy</AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground pb-4">
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>Must be between 16 and 35 years old by the date of the National Launch.</li>
                                                    <li>Must demonstrate a genuine commitment to breast cancer awareness—as a survivor, caregiver, or advocate.</li>
                                                    <li>Must be in good physical and mental health to undertake the responsibilities of a titleholder.</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="character" className="border-b px-6">
                                            <AccordionTrigger className="font-bold text-lg py-4 hover:text-pink-600 text-left">C. Personal & Professional Character</AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground pb-4">
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>Must be of good moral character, with no criminal record or involvement in activities contrary to the pageant’s mission.</li>
                                                    <li>Must uphold Kenyan values of Utu (humanity) and Harambee (community) in public and private conduct.</li>
                                                    <li>Must not have visible tattoos or piercings (except earrings) during official appearances.</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="inclusivity" className="px-6 border-none">
                                            <AccordionTrigger className="font-bold text-lg py-4 hover:text-pink-600 text-left">D. Inclusivity Statement</AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground pb-4">
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>Open to women and men who identify with the cause.</li>
                                                    <li>Open to individuals of all marital and parental statuses—single, married, divorced, widowed, with or without children.</li>
                                                    <li>Celebrates diversity in body type, background, and experience.</li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </CardContent>
                            </Card>

                            {/* Entry & Participation */}
                            <Card className="border-pink-100 shadow-xl shadow-pink-100/50 h-fit overflow-hidden">
                                <CardHeader className="bg-pink-900 text-white p-6">
                                    <CardTitle className="flex items-center gap-3 text-2xl">
                                        <Users className="h-6 w-6 text-pink-300" />
                                        Entry & Participation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8 space-y-8 bg-pink-50/30">

                                    <div>
                                        <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-pink-900">
                                            <Scale className="h-5 w-5 text-pink-600" /> Registration Process
                                        </h3>
                                        <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
                                            <li>Complete the Official Registration Form (available online or at County offices).</li>
                                            <li>
                                                <strong>Pay Required Fees:</strong>
                                                <ul className="list-disc pl-5 mt-2 space-y-1 whitespace-normal">
                                                    <li>Registration Fee: Ksh <b>200</b> <i>    (To sponsor Heal the Future Climate Action Program Schools Program plant one Oil Tree)</i></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Submit Supporting Documents:</strong>
                                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                                    <li>Copy of ID/Passport</li>
                                                    <li>One recent passport-sized photograph</li>
                                                    <li>Short personal statement (max 200 words) on “Why I Am an Advocate for Cancer Awareness”</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>

                                    <Separator className="bg-pink-100" />

                                    <div>
                                        <h3 className="font-bold text-xl mb-3 text-pink-900">Contestant Commitment</h3>
                                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                            <li>Must attend all mandatory rehearsals, workshops, and public events.</li>
                                            <li>Must adhere to the Official Dress Code for each stage of the pageant.</li>
                                            <li>Must participate in fundraising and voter awareness campaigns as outlined in the Contestant Agreement.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg border border-pink-100">
                                        <h3 className="font-bold text-lg mb-3 text-pink-900">Judging Criteria</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-200">Judges’ Evaluation</Badge>
                                            <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-200">Public Voting</Badge>
                                            <Badge variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-200">Fundraising Impact</Badge>
                                        </div>
                                    </div>

                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Obligations & Disqualification */}
            <section className="py-20 bg-pink-900 text-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h3 className="text-3xl font-headline font-bold flex items-center gap-3">
                                <Heart className="h-8 w-8 text-pink-400" /> Titleholder Obligations
                            </h3>
                            <p className="text-pink-100/80 text-lg">If selected as a County or National Titleholder, the contestant agrees to:</p>
                            <ul className="space-y-6">
                                {[
                                    "Serve as an ambassador for breast cancer awareness for one year.",
                                    "Make a minimum of 12 official appearances.",
                                    "Not compete in or hold titles from other pageants during their reign.",
                                    "Abide by all rules in the Titleholder Contract and Code of Conduct."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="bg-pink-800 p-1 rounded-full h-fit">
                                            <CheckCircle2 className="h-5 w-5 text-pink-300 flex-shrink-0" />
                                        </div>
                                        <span className="text-pink-50 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-3xl font-headline font-bold text-white flex items-center gap-3">
                                <Scale className="h-8 w-8 text-pink-400" /> Disqualification
                            </h3>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                <ul className="space-y-4">
                                    {[
                                        "Providing false information during registration.",
                                        "Misconduct or violation of the Code of Conduct.",
                                        "Failure to participate in mandatory events without prior approval.",
                                        "Engaging in activities that bring the pageant into disrepute."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <span className="h-2 w-2 rounded-full bg-pink-500 mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(236,72,153,0.7)]" />
                                            <span className="text-pink-100">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-sm text-pink-300/80 italic mt-4 pl-2 border-l-2 border-pink-500">
                                By submitting an application, you certify that all information provided is true and agree to the Official Rules.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold mb-16 text-gray-900">Contact & Support</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="flex flex-row items-center gap-6 group hover:-translate-y-2 transition-transform duration-300 text-left whitespace-wrap">
                            <MapPin className="h-8 w-8 text-pink-600" />

                            <div>
                                <h4 className="font-bold text-xl mb-1 text-gray-900">Visit Us</h4>
                                <p className="text-muted-foreground">Miss Pink Ribbon Kenya Secretariat<br />P.O. Box 25542–00100, Nairobi</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-6 group hover:-translate-y-2 transition-transform duration-300 text-left whitespace-wrap">
                            <Phone className="h-8 w-8 text-pink-600" />
                            <div>
                                <h4 className="font-bold text-xl mb-1 text-gray-900">Call Us</h4>
                                <p className="text-muted-foreground">+254 115 265 874</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-6 group hover:-translate-y-2 transition-transform duration-300 text-left whitespace-wrap">
                            <Mail className="h-8 w-8 text-pink-600" />
                            <div>
                                <h4 className="font-bold text-xl mb-1 text-gray-900">Email Us</h4>
                                <p className="text-muted-foreground">info@misspinkribbonkenya.org</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-6 group hover:-translate-y-2 transition-transform duration-300 text-left whitespace-wrap">
                            <Instagram className="h-8 w-8 text-pink-600" />
                            <div>
                                <h4 className="font-bold text-xl mb-1 text-gray-900">Instagram</h4>
                                <p className="text-muted-foreground"><Link href="https://www.instagram.com/misspinkribbonkenya?igsh=MWNoemVqbTJvaDhpYw%3D%3D&utm_source=qr">@misspinkribbonkenya</Link></p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-6 group hover:-translate-y-2 transition-transform duration-300 text-left whitespace-wrap">
                            <Facebook className="h-8 w-8 text-pink-600" />
                            <div>
                                <h4 className="font-bold text-xl mb-1 text-gray-900">Facebook</h4>
                                <p className="text-muted-foreground"><Link href="https://www.facebook.com/share/17eKxBwRXy/?mibextid=wwXIfr">@misspinkribbonkenya</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
