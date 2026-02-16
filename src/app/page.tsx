
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  CheckCircle2,
  Star,
  Users,
  Briefcase,
  Trophy,
  Zap,
  GraduationCap,
  Heart,
  Leaf,
  Book,
  Film,
  Mic2,
  Tv,
  Theater,
  Palette,
  Shirt,
  Monitor,
  Scissors,
  Sparkles,
  Coffee,
  ArrowRight,
  ChevronRight,
  Award,
  Truck,
  TrendingUp
} from 'lucide-react';
import { MissPinkRibbonModal } from '@/components/modals/miss-pink-ribbon-modal';

const schools = [
  { name: 'Film School', icon: <Film className="h-6 w-6" />, color: 'bg-blue-500/10 text-blue-600' },
  { name: 'Media School', icon: <Tv className="h-6 w-6" />, color: 'bg-purple-500/10 text-purple-600' },
  { name: 'Theatre Arts School', icon: <Theater className="h-6 w-6" />, color: 'bg-red-500/10 text-red-600' },
  { name: 'Fine Art School', icon: <Palette className="h-6 w-6" />, color: 'bg-orange-500/10 text-orange-600' },
  { name: 'Fashion School', icon: <Shirt className="h-6 w-6" />, color: 'bg-pink-500/10 text-pink-600' },
  { name: 'Graphic Design & IT School', icon: <Monitor className="h-6 w-6" />, color: 'bg-indigo-500/10 text-indigo-600' },
  { name: 'Hair Dressing School', icon: <Scissors className="h-6 w-6" />, color: 'bg-emerald-500/10 text-emerald-600' },
  { name: 'Beauty School', icon: <Sparkles className="h-6 w-6" />, color: 'bg-yellow-500/10 text-yellow-600' },
  { name: 'Hospitality, Languages & Tuition', icon: <Coffee className="h-6 w-6" />, color: 'bg-stone-500/10 text-stone-600' },
  { name: 'Business & Management School', icon: <Briefcase className="h-6 w-6" />, color: 'bg-cyan-500/10 text-cyan-600' },
];

const modules = [
  { id: 1, title: 'Introduction to the Institute', desc: 'Understanding philosophy, ethics and program expectations.' },
  { id: 2, title: 'Fundamentals of Film', desc: 'Film production process, roles, media & society, ratings & audience awareness.' },
  { id: 3, title: 'Screenwriting & Genres', desc: 'Script-to-screen process, storyboarding, formatting, budgeting & scheduling.' },
  { id: 4, title: 'Conceptualization', desc: 'Logframes, planning, and pre-production logistics.' },
  { id: 5, title: 'Production Team Skills', desc: 'Workflow management (Dev vs Prod vs Post) and crew management.' },
  { id: 6, title: 'Technical Mastery', desc: 'Camera, Lighting, Sound, Editing, Special Effects, and Green Screen.' },
  { id: 7, title: 'Industry & Careers', desc: 'Career pathways and creative industry structures.' },
  { id: 8, title: 'Management & Marketing', desc: 'Budgeting, PR, Freelance life, and Film critique.' },
];

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const featuredPrograms = [

    {
      id: 'castreal-agency',
      name: 'CastReal Agency',
      tag: 'Talent',
      desc: "Professional talent and casting agency connecting models, actors, and performers with opportunities in film, fashion, advertising, and creative productions.",
      icon: <Users className="h-6 w-6 text-white" />,
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200',
      href: '/initiatives/castreal-agency',
      color: 'bg-blue-50'
    },
    {
      id: 'kikaoo-awards',
      name: 'KIKAOO Awards',
      tag: 'Excellence',
      desc: 'The KIKAOO Awards celebrate excellence in film, storytelling, and creative expression, recognizing outstanding artists, filmmakers, and cultural contributors from Kenya and beyond.',
      icon: <Trophy className="h-5 w-5 text-white" />,
      img: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=800',
      href: '/initiatives/kikaoo-awards'
    },
    {
      id: 'heal-future',
      name: 'Heal the Future Climate Action Program – Schools Program',
      tag: 'Climate Action',
      desc: 'Arts-led climate action initiative that empowers schools, youth, and communities to address environmental challenges through creative education, awareness campaigns, and sustainable practices',
      icon: <Leaf className="h-5 w-5 text-white" />,
      img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800',
      href: '/initiatives/heal-future'
    },
    {
      id: 'pink-ribbon',
      name: 'MISS PINK RIBBON Kenya',
      tag: 'Advocacy',
      desc: 'Purpose-driven beauty pageant that combines elegance with advocacy, promoting breast cancer awareness, women’s health education, and community empowerment.',
      icon: <Heart className="h-5 w-5 text-white" />,
      img: PlaceHolderImages.find(i => i.id === 'program-pink-ribbon')?.imageUrl || '',
      href: '/initiatives/miss-pink-ribbon'
    },
    {
      id: 'kntea',
      name: 'KNTEA Awards',
      tag: 'Mobility',
      desc: 'Driving safety, inclusivity, and sustainable mobility across compliance, operational excellence, and innovation in Kenya’s transport ecosystem.',
      icon: <Truck className="h-5 w-5 text-white" />,
      img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800',
      href: '/initiatives/kntea'
    },
    {
      id: 'awi-welfare-club',
      name: 'AWI Welfare Club',
      tag: 'Finance',
      desc: 'Building financial resilience through collective savings, welfare support, and smart investment opportunities for the creative community.',
      icon: <TrendingUp className="h-5 w-5 text-white" />,
      img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800',
      href: '/initiatives/awi-welfare-club'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1492691523567-3075677aa163?q=80&w=2000"
            alt="ArtWorld Academy Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4 py-3">
              <Badge className="bg-primary text-white hover:bg-primary/90 px-4 py-1.5 uppercase tracking-widest text-xs border-none animate-in fade-in slide-in-from-left duration-500 py-4">
                ArtWorld Institute AI
              </Badge>
              <h1 className="text-5xl md:text-8xl font-headline font-extrabold text-white leading-[1.1] animate-in fade-in slide-in-from-left duration-700 delay-100">
                ArtWorld Institute AWI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
                  (Incorporating ArtWorld Media Centre)
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left duration-700 delay-200 font-medium">
                Developing professional excellence across the Creative Industry value chain.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <Button size="xl" className="font-bold rounded-full px-8 h-14 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20" asChild>
                <Link href="/register">Join Community</Link>
              </Button>
              <Button size="xl" variant="outline" className="font-bold rounded-full px-8 h-14 border-white/20 text-primary hover:bg-white/10 backdrop-blur-sm" asChild>
                <Link href="/programs">Our Programs <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-white/10 animate-in fade-in slide-in-from-bottom duration-700 delay-500 pb-4">
              {/* Item 1 */}
              <div>
                <div className="text-3xl font-bold text-white">6 Months</div>
                <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Short Courses</div>
              </div>
              {/* Item 2 */}
              <div>
                <div className="text-3xl font-bold text-white">12 Months</div>
                <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Certificates</div>
              </div>
              {/* Item 3 */}
              <div>
                <div className="text-3xl font-bold text-white">18 Months</div>
                <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Diplomas</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                <span className="w-12 h-px bg-primary opacity-30" />
                Executive Summary
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
                Transforming Raw Talent into <br />
                <span className="text-primary">Industry-Standard Professionals</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  ArtWorld Institute is a premier arts training and research institution dedicated to nurturing creativity, advancing cultural knowledge, and shaping future artistic leaders through education, innovation, and community engagement.
                </p>
                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Intensive & Immersive</h4>
                      <p className="text-sm">Structured as creative "boot camps" designed for rapid growth and technical mastery.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Industry Mentorship</h4>
                      <p className="text-sm">Learn in a studio-based environment mentored by accomplished professionals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[40px] -rotate-2" />
              <Card className="relative overflow-hidden border-none shadow-2xl rounded-[32px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
                  alt="Students collaborating"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
                  <p className="text-white text-lg font-bold italic">
                    "Great creative work is made with intention, vision, discipline and responsibility."
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Schools */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <Badge variant="outline" className="border-primary text-primary font-bold px-4 py-1 uppercase tracking-widest text-xs">
              Specializations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold">Our Ten Specialist Schools</h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Tailored learning pathways designed to cover every aspect of the creative and professional ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {schools.map((school) => (
              <div key={school.name} className="group p-8 rounded-[32px] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-6">
                <div className={`w-16 h-16 rounded-2xl ${school.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                  {school.icon}
                </div>
                <h3 className="font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">{school.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Structure - Modules */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              <Badge className="bg-secondary text-primary font-extrabold px-4 py-1.5 uppercase tracking-widest text-[10px] border-none">
                Master Training Structure
              </Badge>
              <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
                8 Progressive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400 italic">Modules</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Our curriculum is built to take applicants from foundational theory to technical mastery and professional readiness.
              </p>

              <div className="space-y-4 pt-8">
                {["Intention-driven design", "Vision-focused execution", "Professional discipline", "Social responsibility"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="text-slate-300 font-bold text-sm uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-4">
              {modules.map((mod) => (
                <div key={mod.id} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-secondary font-black text-xl shrink-0">
                    {mod.id}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold font-headline text-white">{mod.title}</h4>
                    <p className="text-slate-400 font-medium leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
              <Link key={program.id} href={program.href}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all border-none rounded-2xl md:rounded-[32px] relative h-[400px] md:h-[500px]">
                  <Image
                    src={program.img || ''}
                    alt={program.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.4]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end space-y-4">
                    <Badge className="w-fit bg-primary text-secondary font-bold text-xs uppercase tracking-widest px-3 py-1">
                      {program.tag}
                    </Badge>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
                        {program.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-headline font-bold text-white leading-tight">{program.name}</h3>
                    </div>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                      {program.desc}
                    </p>
                    <div className="pt-4 flex items-center text-primary font-bold text-sm tracking-wide group-hover:translate-x-2 transition-transform">
                      EXPLORE PROGRAM < Zap className="ml-2 h-4 w-4 fill-primary" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study Here & Industry Connections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-headline font-bold">Why Study at AWI?</h2>
                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                  {[
                    "Small class sizes",
                    "Hands-on studio training",
                    "Industry Mentorship",
                    "Internship placement",
                    "Job placement pipeline",
                    "Industry partnerships"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-colors">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="font-bold text-slate-700 text-sm whitespace-nowrap">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-[40px] bg-primary text-white space-y-6 shadow-2xl shadow-primary/20">
                <Award className="h-12 w-12 text-secondary" />
                <h3 className="text-2xl font-bold font-headline">Go Further</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  Through ArtWorld Media Centre and Media Kreative Films, ArtWorld Institute operates as a training-to-employment ecosystem.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="px-5 py-2 rounded-full border border-white/20 bg-white/10 text-xs font-bold uppercase tracking-wider">Media Kreative</div>
                  <div className="px-5 py-2 rounded-full border border-white/20 bg-white/10 text-xs font-bold uppercase tracking-wider">AWI Media Centre</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 pl-0 lg:pl-12">
              <div className="grid gap-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-headline font-bold">Admissions & Requirements</h3>
                  <p className="text-slate-500 font-medium">Admission is based on academic background, professional experience, life journey, and unique worldview.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Card className="rounded-3xl border-slate-100 shadow-sm p-8 space-y-6">
                    <h4 className="font-bold text-slate-900 border-b pb-4">Essentials</h4>
                    <ul className="space-y-4">
                      {[
                        "Letters of Recommendation (2)",
                        "Personal Statement Essays (2)",
                        "Resume/CV",
                        "ID/Passport copies (2)"
                      ].map(item => (
                        <li key={item} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="rounded-3xl border-slate-100 shadow-sm p-8 space-y-6 bg-slate-900 text-white">
                    <h4 className="font-bold text-slate-100 border-b border-white/10 pb-4">Personal Statement</h4>
                    <p className="text-sm text-slate-300 leading-relaxed italic">
                      "Essay 1: Why ArtWorld? <br />
                      Essay 2: Significant collaborative experience."
                    </p>
                    <p className="text-xs text-white/80 font-bold uppercase tracking-widest">
                      750 Words each
                    </p>
                  </Card>
                </div>

                <div className="p-8 rounded-[32px] bg-secondary/10 border border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-slate-900">Applications are Ongoing</h4>
                    <p className="text-slate-500 text-sm font-medium">Web-based submission coming soon. Inquire now.</p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8">
                    Start Application
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-headline font-bold">Ready to Launch Your Career?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="xl" className="w-full sm:w-auto rounded-full px-12 h-16 font-extrabold shadow-2xl">
              Apply to AWI
            </Button>
            <Button size="xl" variant="outline" className="w-full sm:w-auto rounded-full px-12 h-16 font-extrabold">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      <MissPinkRibbonModal />
    </div>
  );
}
