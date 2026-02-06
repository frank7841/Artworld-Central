
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary px-4 py-1">Contact Us</Badge>
                            <h1 className="text-5xl md:text-8xl font-headline font-bold">Let's <span className="text-primary italic">Connect</span>.</h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Have a question, an idea, or want to collaborate? We'd love to hear from you.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16">
                            <div className="space-y-12">
                                <div className="space-y-8">
                                    <h2 className="text-3xl font-headline font-bold">Get in Touch</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-6">
                                            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                                <Mail className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email Us</p>
                                                <p className="text-xl font-medium">hello@artworldinstitute.org</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-6">
                                            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                                <Phone className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Call Us</p>
                                                <p className="text-xl font-medium">+254 700 000 000</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-6">
                                            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                                <MapPin className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Our Office</p>
                                                <p className="text-xl font-medium">Nairobi Creative Hub, Westlands, Kenya</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold">Follow Our Journey</h3>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: <Instagram className="h-6 w-6" />, href: "#" },
                                            { icon: <Twitter className="h-6 w-6" />, href: "#" },
                                            { icon: <Linkedin className="h-6 w-6" />, href: "#" }
                                        ].map((social, i) => (
                                            <a key={i} href={social.href} className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl border border-muted/20">
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest ml-1">First Name</label>
                                            <Input placeholder="Jane" className="h-14 rounded-2xl bg-muted/30 border-none px-6" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-widest ml-1">Last Name</label>
                                            <Input placeholder="Doe" className="h-14 rounded-2xl bg-muted/30 border-none px-6" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest ml-1">Email Address</label>
                                        <Input placeholder="jane@example.com" type="email" className="h-14 rounded-2xl bg-muted/30 border-none px-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest ml-1">Subject</label>
                                        <Input placeholder="How can we help?" className="h-14 rounded-2xl bg-muted/30 border-none px-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest ml-1">Message</label>
                                        <Textarea placeholder="Tell us more about your inquiry..." className="min-h-[150px] rounded-2xl bg-muted/30 border-none p-6" />
                                    </div>
                                    <Button className="w-full h-16 rounded-2xl font-bold text-lg flex items-center gap-2">
                                        Send Message <Send className="h-5 w-5" />
                                    </Button>
                                </form>
                            </div>
                        </div>

                        <div className="p-12 md:p-20 rounded-[60px] bg-primary text-white text-center space-y-8">
                            <h2 className="text-4xl md:text-5xl font-headline font-bold">Stay Updated</h2>
                            <p className="text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
                                Subscribe to our newsletter to receive the latest updates on programs, exhibitions, and creative opportunities.
                            </p>
                            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                                <Input placeholder="your@email.com" className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-2xl" />
                                <Button className="h-14 bg-white text-primary hover:bg-ivory font-bold px-8 rounded-2xl shrink-0">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
