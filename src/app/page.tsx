
import { Navbar } from '@/components/navigation/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, Star, Users, Briefcase, Trophy, Zap, GraduationCap, Heart } from 'lucide-react';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  
  const featuredPrograms = [
    {
      id: 'pink-ribbon',
      name: 'Miss Pink Ribbon Kenya',
      tag: 'Advocacy',
      desc: 'Leadership and breast cancer awareness through prestige pageantry.',
      icon: <Heart className="h-5 w-5 text-primary" />,
      img: PlaceHolderImages.find(i => i.id === 'program-pink-ribbon')?.imageUrl
    },
    {
      id: 'kacdp',
      name: 'Kenya Arts Dev Program',
      tag: 'Creative',
      desc: 'Nurturing the next generation of Kenyan artistic talent.',
      icon: <Star className="h-5 w-5 text-primary" />,
      img: PlaceHolderImages.find(i => i.id === 'program-kacdp')?.imageUrl
    },
    {
      id: 'nifa',
      name: 'Nairobi Int. Festival',
      tag: 'Festival',
      desc: 'A global stage for cultural exchange and creative expression.',
      icon: <Zap className="h-5 w-5 text-primary" />,
      img: PlaceHolderImages.find(i => i.id === 'program-nifa')?.imageUrl
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <Image 
          src={heroImg?.imageUrl || ''} 
          alt="ArtWorld Institute" 
          fill 
          className="object-cover brightness-[0.3]"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl space-y-8">
            <Badge variant="outline" className="text-primary border-primary border-2 px-4 py-1 font-bold text-sm bg-primary/10">
              KENYA'S HUB FOR CREATIVE & SOCIAL IMPACT
            </Badge>
            <h1 className="font-headline text-5xl md:text-8xl font-bold leading-tight">
              Unlocking <span className="text-primary italic">Kenyan</span> Talent.
            </h1>
            <p className="text-xl md:text-2xl text-ivory/80 font-light max-w-2xl leading-relaxed">
              AWI is a centralized ecosystem fostering community, learning, and professional opportunities for the creative youth of East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-16 px-10 text-lg font-bold" asChild>
                <Link href="/register">Join the Community</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold bg-white/5 border-white/20 hover:bg-white/10" asChild>
                <Link href="/programs">Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-bold">Our Integrated Ecosystem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ArtWorld Institute (AWI) unifies cultural heritage, modern creativity, and social advocacy. We provide a mobile-first space for members to connect, learn, and grow through diverse programs spanning film, fashion, literature, and leadership.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                <Users className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-bold">Community</h4>
                <p className="text-sm text-muted-foreground">Network with peers and mentors across programs.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                <GraduationCap className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-bold">Learning</h4>
                <p className="text-sm text-muted-foreground">Access recorded sessions and certifications.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="AWI Community"
              fill
              className="object-cover"
              data-ai-hint="community learning"
            />
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-headline font-bold">Diverse Programs</h2>
              <p className="text-muted-foreground max-w-xl">From high fashion to social leadership, discover the pathway that fits your vision.</p>
            </div>
            <Button variant="outline" className="font-bold" asChild>
              <Link href="/programs">View All 8 Programs</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden group hover:shadow-xl transition-all border-none">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={program.img || ''} 
                    alt={program.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary text-secondary font-bold">
                    {program.tag}
                  </Badge>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    {program.icon}
                    <h3 className="font-headline font-bold text-xl">{program.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6 pt-4">
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {program.desc}
                  </p>
                  <Button variant="secondary" className="w-full font-bold group" asChild>
                    <Link href={`/programs/${program.id}`}>
                      Explore Program
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Call to Action */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">
          <h2 className="text-5xl font-headline font-bold">Join the Movement</h2>
          <p className="text-xl text-ivory/70 font-light">
            Become a part of Kenya's most dynamic creative ecosystem. Whether you are an aspiring artist, a leader, or a community builder, AWI is your home.
          </p>
          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div>
              <div className="text-4xl font-headline font-bold text-primary">5k+</div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-60">Members</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-bold text-primary">200+</div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-60">Workshops</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-bold text-primary">15+</div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-60">Annual Events</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-16 px-12 text-lg font-bold" asChild>
              <Link href="/register">Start Free Membership</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold text-white border-white/20" asChild>
              <Link href="/community">Visit Community Hub</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2 space-y-6">
              <div className="font-headline font-bold text-2xl tracking-tight text-primary">
                ARTWORLD<span className="text-secondary ml-1">INSTITUTE</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Empowering Kenyan youth through integrated community, learning, and advocacy since 2012.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ecosystem</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/programs">Programs</Link></li>
                <li><Link href="/community">Community Hub</Link></li>
                <li><Link href="/academy">Learning Academy</Link></li>
                <li><Link href="/events">Events Calendar</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#">Instagram</Link></li>
                <li><Link href="#">Twitter</Link></li>
                <li><Link href="#">LinkedIn</Link></li>
                <li><Link href="#">WhatsApp Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-16 pt-8 text-center text-sm text-muted-foreground">
            © 2024 ArtWorld Institute. All rights reserved. Registered in Kenya.
          </div>
        </div>
      </footer>
    </div>
  );
}
