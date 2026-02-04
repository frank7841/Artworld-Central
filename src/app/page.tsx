
import { Navbar } from '@/components/navigation/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, Star, Users, Briefcase, Trophy, Zap } from 'lucide-react';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const castRealImg = PlaceHolderImages.find(img => img.id === 'model-program');
  const pageantImg = PlaceHolderImages.find(img => img.id === 'pageant-program');
  const sportsImg = PlaceHolderImages.find(img => img.id === 'sports-program');

  const programs = [
    {
      id: 'castreal',
      name: 'CastReal Agency',
      description: 'The premier destination for high-fashion models and multidisciplinary artists.',
      image: castRealImg?.imageUrl,
      hint: castRealImg?.imageHint,
      icon: <Users className="h-6 w-6 text-primary" />,
      tag: 'Agency'
    },
    {
      id: 'pageant',
      name: 'Miss Pink Ribbon Kenya',
      description: 'Empowering voices and championing breast cancer awareness through prestige pageantry.',
      image: pageantImg?.imageUrl,
      hint: pageantImg?.imageHint,
      icon: <Trophy className="h-6 w-6 text-primary" />,
      tag: 'Pageant'
    },
    {
      id: 'sports',
      name: 'AWI Sports & Arts',
      description: 'Nurturing elite athletes and creative talents for the global stage.',
      image: sportsImg?.imageUrl,
      hint: sportsImg?.imageHint,
      icon: <Zap className="h-6 w-6 text-primary" />,
      tag: 'Academy'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <Image 
          src={heroImg?.imageUrl || ''} 
          alt="ArtWorld Central" 
          fill 
          className="object-cover brightness-[0.4]"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl space-y-6">
            <Badge variant="outline" className="text-primary border-primary border-2 px-4 py-1 font-bold text-sm bg-primary/10">
              AWI × CASTREAL DIGITAL ECOSYSTEM
            </Badge>
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight">
              Elevate Your <span className="text-primary">Talent</span> To The World Stage.
            </h1>
            <p className="text-lg md:text-xl text-ivory/80 font-light max-w-xl">
              ArtWorld Central is the integrated hub for registration, talent management, and career development across our prestigious networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-10 text-lg font-bold" asChild>
                <Link href="/register">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold bg-white/5 border-white/20 hover:bg-white/10" asChild>
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Proof */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-ivory">
            <div>
              <div className="text-4xl font-headline font-bold text-primary mb-1">500+</div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-70">Active Talent</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-bold text-primary mb-1">12</div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-70">Global Programs</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-bold text-primary mb-1">$2.4M</div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-70">Payouts Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-bold text-primary mb-1">98%</div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-70">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Prestigious Pathways</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Select your program and begin your journey into the ArtWorld ecosystem. Our platform ensures a seamless transition from applicant to elite talent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="overflow-hidden group hover:shadow-2xl transition-all border-none shadow-lg">
              <div className="relative h-96 overflow-hidden">
                <Image 
                  src={program.image || ''} 
                  alt={program.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={program.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-primary text-secondary font-bold">
                  {program.tag}
                </Badge>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-headline font-bold text-white">{program.name}</h3>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-base leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full font-bold group" asChild>
                  <Link href={`/registration/${program.id}`}>
                    Register Interest
                    <Zap className="ml-2 h-4 w-4 fill-primary text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-headline font-bold leading-tight">
              A Unified Operations Center <br /> For <span className="text-primary italic">Excellence.</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Secure Identity', desc: 'Enterprise-grade authentication with role-based access for talent, admins, and partners.' },
                { title: 'Payment Transparency', desc: 'Integrated M-Pesa and card processing with real-time receipt generation and tracking.' },
                { title: 'Dynamic Registration', desc: 'Intelligent forms tailored to your specific program, ensuring only relevant data is collected.' },
                { title: 'AI Visibility Boost', desc: 'Built-in AI content assistant to help you craft the perfect professional profile.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <Card className="relative z-10 h-full border-none shadow-2xl bg-white overflow-hidden p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="font-bold">Recent Application</span>
                  <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200">Verified</Badge>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://picsum.photos/seed/sample/100" />
                  </Avatar>
                  <div>
                    <div className="font-headline font-bold text-xl">Sarah Mitchell</div>
                    <div className="text-sm text-muted-foreground">High Fashion Model • CastReal</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="text-xs uppercase opacity-60">Status</div>
                    <div className="font-bold">Shortlisted</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="text-xs uppercase opacity-60">Next Event</div>
                    <div className="font-bold">Photoshoot</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Portfolio Progress</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]" />
                  </div>
                </div>
                <Button className="w-full">View Talent Profile</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Ready to Step Into the Spotlight?</h2>
          <p className="text-xl text-ivory/70 font-light">
            Whether you're a model, athlete, or creative visionary, your journey starts with a single step. Join the ecosystem today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-12 text-lg font-bold" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-12 text-lg font-bold" asChild>
              <Link href="/login">Portal Login</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-headline font-bold text-2xl tracking-tight text-primary">
              ARTWORLD<span className="text-secondary ml-1">CENTRAL</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
              <Link href="#" className="hover:text-primary">Terms</Link>
              <Link href="#" className="hover:text-primary">Privacy</Link>
              <Link href="#" className="hover:text-primary">Contract</Link>
              <Link href="#" className="hover:text-primary">Contact</Link>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 ArtWorld Institute × CastReal Agency.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
