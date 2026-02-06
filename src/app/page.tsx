
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, Star, Users, Briefcase, Trophy, Zap, GraduationCap, Heart, Leaf, Book, Film, Mic2 } from 'lucide-react';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const featuredPrograms = [
    {
      id: 'nifa',
      name: 'Nairobi Festival of Arts',
      tag: 'Festival',
      desc: 'Multidisciplinary cultural festival celebrating visual arts, performance, and music.',
      icon: <Zap className="h-5 w-5 text-primary" />,
      img: PlaceHolderImages.find(i => i.id === 'program-nifa')?.imageUrl,
      href: '/programs/festivals'
    },
    {
      id: 'kikaoo-awards',
      name: 'KIKAOO Awards',
      tag: 'Excellence',
      desc: 'Celebrating excellence in film, storytelling, and creative expression from Kenya.',
      icon: <Trophy className="h-5 w-5 text-primary" />,
      img: 'https://images.unsplash.com/photo-1531050171651-61afc2834d75?q=80&w=800',
      href: '/initiatives/kikaoo-awards'
    },
    {
      id: 'heal-future',
      name: 'Heal the Future',
      tag: 'Climate Action',
      desc: 'Arts-led climate action initiative empowering youth to address environmental challenges.',
      icon: <Leaf className="h-5 w-5 text-primary" />,
      img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800',
      href: '/initiatives/heal-future'
    },
    {
      id: 'pink-ribbon',
      name: 'Miss Pink Ribbon Kenya',
      tag: 'Advocacy',
      desc: 'Promoting breast cancer awareness and women’s health through elegance.',
      icon: <Heart className="h-5 w-5 text-primary" />,
      img: PlaceHolderImages.find(i => i.id === 'program-pink-ribbon')?.imageUrl,
      href: '/initiatives/miss-pink-ribbon'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:h-[90vh] flex items-center overflow-hidden">
        <Image
          src={heroImg?.imageUrl || ''}
          alt="ArtWorld Institute"
          fill
          className="object-cover brightness-[0.3]"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
        <div className="container mx-auto px-4 relative z-10 text-white py-12">
          <div className="max-w-4xl space-y-8">
            <Badge variant="outline" className="text-primary border-primary border-2 px-4 py-1 font-bold text-sm bg-primary/10">
              KENYA'S HUB FOR CREATIVE & SOCIAL IMPACT
            </Badge>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-8xl font-bold leading-[1.1] md:leading-tight">
              Where <span className="text-secondary italic">Creativity</span> Connects.
            </h1>
            <p className="text-lg md:text-2xl text-ivory/80 font-light max-w-2xl leading-relaxed">
              ArtWorld Institute is a premier arts training and research institution dedicated to nurturing creativity, advancing cultural knowledge, and shaping future artistic leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-16 px-10 text-lg font-bold" asChild>
                <Link href="/registration">Join the Community</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold bg-white/5 border-white/20 hover:bg-white/10" asChild>
                <Link href="/programs">Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
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
          <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
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
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Diverse Programs</h2>
              <p className="text-muted-foreground max-w-xl text-sm md:text-base">From high fashion to social leadership, discover the pathway that fits your vision.</p>
            </div>
            <Button variant="outline" className="font-bold w-full md:w-auto" asChild>
              <Link href="/programs">View All 8 Programs</Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden group hover:shadow-xl transition-all border-none rounded-2xl md:rounded-3xl">
                <div className="relative h-48 md:h-64 overflow-hidden">
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
                    <Link href={program.href}>
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
      <section className="py-16 md:py-24 bg-secondary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-8 md:space-y-10">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Join the Movement</h2>
          <p className="text-xl text-ivory/70 font-light">
            Become a part of Kenya's most dynamic creative ecosystem. Whether you are an aspiring artist, a leader, or a community builder, AWI is your home.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 py-8">
            <div>
              <div className="text-3xl md:text-4xl font-headline font-bold text-primary">5k+</div>
              <div className="text-[10px] md:text-sm uppercase tracking-widest font-medium opacity-60">Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-headline font-bold text-primary">200+</div>
              <div className="text-[10px] md:text-sm uppercase tracking-widest font-medium opacity-60">Workshops</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-headline font-bold text-primary">15+</div>
              <div className="text-[10px] md:text-sm uppercase tracking-widest font-medium opacity-60">Annual Events</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-16 px-12 text-lg font-bold" asChild>
              <Link href="/registration">Start Free Membership</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold hover:text-white text-primary border-white/20" asChild>
              <Link href="/community">Visit Community Hub</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
