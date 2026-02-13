
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Briefcase, Heart, Star, Zap, Book, Film, Truck, Palette, Trophy, Leaf, Clock, Sparkles, ArrowRight, Users, Mic, GraduationCap, Clapperboard, ShoppingBag, HandHeart, Library, Shield, Dumbbell, PiggyBank, Newspaper } from 'lucide-react';
import { ExploreMore } from '@/components/layout/ExploreMore';

export default function InitiativesPage() {
    const initiatives = [
        {
            id: 'nifa',
            name: 'Nairobi Festival of Arts NFA',
            desc: 'Nairobi Festival of Arts is a multidisciplinary cultural festival bringing together visual arts, performance, literature, film, and music to celebrate creativity and cultural diversity.',
            icon: <Zap className="h-6 w-6 text-primary" />,
            href: '/initiatives/nifa',
            color: 'bg-blue-50'
        },
        {
            id: 'kikaoo-awards',
            name: 'KIKAOO Awards incorporating Nairobi Film Festival',
            desc: 'The KIKAOO Awards celebrate excellence in film, storytelling, and creative expression, recognizing outstanding artists, filmmakers, and cultural contributors from Kenya and beyond, incorporating the Nairobi Film Festival.',
            icon: <Trophy className="h-6 w-6 text-primary" />,
            href: '/initiatives/kikaoo-awards',
            color: 'bg-amber-50'
        },
        {
            id: 'miss-pink-ribbon',
            name: 'MISS PINK RIBBON Kenya',
            desc: 'Miss Pink Ribbon Kenya is a purpose-driven beauty pageant that combines elegance with advocacy, promoting breast cancer awareness, women’s health education, and community empowerment.',
            icon: <Heart className="h-6 w-6 text-pink-600" />,
            href: '/initiatives/miss-pink-ribbon',
            color: 'bg-pink-50'
        },
        {
            id: 'heal-future',
            name: 'Heal the Future Climate Action Program – Schools Program',
            desc: 'A school-based initiative empowering learners to become climate champions through regenerative agriculture, tree growing, and leadership.',
            icon: <Leaf className="h-6 w-6 text-green-600" />,
            href: '/initiatives/heal-future',
            color: 'bg-green-50'
        },
        {
            id: 'mmm',
            name: 'Metropolitan Midnight Marathon',
            desc: 'Unique night racing experience promoting health and urban culture.',
            icon: <Clock className="h-6 w-6 text-zinc-900" />,
            href: '/initiatives/mmm',
            color: 'bg-zinc-100'
        },
        {
            id: 'armani-4ever',
            name: 'Armani 4Ever Campaign',
            desc: 'Armani 4Ever is a creative advocacy campaign using fashion, art, and storytelling to inspire youth confidence, self-expression, and positive social identity.',
            icon: <Sparkles className="h-6 w-6 text-amber-600" />,
            href: '/initiatives/armani-4ever',
            color: 'bg-orange-50'
        },
        {
            id: 'castreal-agency',
            name: 'CastReal Agency',
            desc: 'CastReal Agency is a professional talent and casting hub dedicated to discovering, developing, and deploying exceptional models and performers for world-class productions.',
            icon: <Users className="h-6 w-6 text-violet-600" />,
            href: '/initiatives/castreal-agency',
            color: 'bg-violet-50'
        },
        {
            id: 'kikao-open-mic',
            name: 'KIKAOO Open MIC Live',
            desc: 'KIKAOO Open MIC Live is a vibrant performance platform for poets, musicians, comedians, and spoken-word artists to share original work and connect with live audiences.',
            icon: <Mic className="h-6 w-6 text-rose-600" />,
            href: '/initiatives/kikao-open-mic',
            color: 'bg-rose-50'
        },
        {
            id: 'academy',
            name: 'ArtWorld Institute AWI',
            desc: 'AWI (Incorporating ArtWorld Media Centre) is our premier creative arts training hub, dedicated to professional excellence across the industry value chain.',
            icon: <GraduationCap className="h-6 w-6 text-blue-800" />,
            href: '/academy',
            color: 'bg-blue-50'
        },

        {
            id: 'nairobi-pop-life',
            name: 'NAIROBI POP LIFE',
            desc: 'Nairobi Pop Life captures and celebrates urban culture, youth expression, music, fashion, and contemporary lifestyle trends shaping the modern African city.',
            icon: <ShoppingBag className="h-6 w-6 text-pink-500" />,
            href: '/initiatives/nairobi-pop-life',
            color: 'bg-pink-50'
        },
        {
            id: 'kacdp',
            name: 'KACDP',
            desc: 'KACDP is a cultural development program focused on arts education, community participation, and creative capacity building as tools for social and economic growth.',
            icon: <HandHeart className="h-6 w-6 text-green-700" />,
            href: '/initiatives/kacdp',
            color: 'bg-green-50'
        },
        {
            id: 'kikaoo-book-week',
            name: 'KIKAOO NATIONAL BOOK WEEK',
            desc: 'KIKAOO National Book Week promotes reading, writing, and literary culture through author engagements, school programs, book exhibitions, and storytelling forums.',
            icon: <Library className="h-6 w-6 text-amber-700" />,
            href: '/initiatives/kikaoo-book-week',
            color: 'bg-amber-50'
        },
        {
            id: 'transport-safety-awards',
            name: 'National Transport & Safety Awards',
            desc: 'The Kenya National Transport and Safety Awards recognize excellence, innovation, and responsibility in transport, road safety, and mobility across the country.',
            icon: <Shield className="h-6 w-6 text-slate-700" />,
            href: '/initiatives/transport-safety-awards',
            color: 'bg-slate-50'
        },
        {
            id: 'awi-sports-club',
            name: 'AWI Sports and Arts Club',
            desc: 'A holistic community for creatives to nurture physical health and artistic spirit.',
            icon: <Dumbbell className="h-6 w-6 text-orange-600" />,
            href: '/initiatives/awi-sports-club',
            color: 'bg-orange-50'
        },
        {
            id: 'awi-welfare-club',
            name: 'AWI Welfare Investment Club',
            desc: 'Securing the financial future of the creative community through collective investment.',
            icon: <PiggyBank className="h-6 w-6 text-emerald-600" />,
            href: '/initiatives/awi-welfare-club',
            color: 'bg-emerald-50'
        },
        {
            id: 'artworld-journal',
            name: 'ArtWorld Journal',
            desc: 'The definitive voice on African art, culture, critic, and creative policy.',
            icon: <Newspaper className="h-6 w-6 text-stone-700" />,
            href: '/initiatives/artworld-journal',
            color: 'bg-stone-50'
        }
    ];

    return (
        <div className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4 max-w-3xl mx-auto px-4 md:px-0">
                        <Badge variant="outline" className="text-primary border-primary px-4 py-1">Our Focus</Badge>
                        <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight">Flagship Initiatives</h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Targeted programs designed to create lasting social impact, celebrate excellence, and empower the next generation of creative leaders.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {initiatives.map((item) => (
                            <Link key={item.id} href={item.href}>
                                <Card className={`h-full border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group rounded-2xl md:rounded-[32px] ${item.color}`}>
                                    <CardContent className="p-6 md:p-10 space-y-4 md:space-y-6">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold font-headline">{item.name}</h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                            Explore Initiative <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <ExploreMore
                type="Programs"
                title="Our Core Programs"
                description="Join our specialized communities and gain access to resources, mentorship, and professional growth."
                items={[
                    { id: 'academy', name: 'AWI Institute', desc: 'Master training programs across ten specialist creative schools.', icon: <GraduationCap />, href: '/academy', color: 'bg-muted/50' },
                    { id: 'arts-ed', name: 'Arts Education', desc: 'Practical workshops in fine arts, digital media, and performance.', icon: <Palette />, href: '/programs/arts-education', color: 'bg-muted/50' },
                    { id: 'festivals', name: 'Festivals & Events', desc: 'Showcasing the best of Kenyan and African creativity to the world.', icon: <Zap />, href: '/programs/festivals', color: 'bg-muted/50' },
                ]}
            />
        </div>
    );
}
