
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { Badge } from '@/components/ui/badge';
import { Book, FileText, Camera, Video, Newspaper, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MediaPage() {
    const categories = [
        { name: "Articles & Essays", icon: <FileText className="h-5 w-5" />, count: 48 },
        { name: "Books & Writing", icon: <Book className="h-5 w-5" />, count: 12 },
        { name: "Press Releases", icon: <Newspaper className="h-5 w-5" />, count: 24 },
        { name: "Photo & Video", icon: <Camera className="h-5 w-5" />, count: 150 }
    ];

    const recentMedia = [
        {
            title: "The Renaissance of Nairobi Urban Culture",
            type: "Article",
            date: "Feb 2026",
            image: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?q=80&w=800"
        },
        {
            title: "AWI x NIFA: 2023 Highlights Reel",
            type: "Video",
            date: "Jan 2026",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800"
        },
        {
            title: "Voices of Africa: Literary Anthology",
            type: "Book",
            date: "Dec 2023",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-24">
                        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
                            <div className="space-y-4 max-w-2xl">
                                <Badge variant="outline" className="text-primary border-primary px-4 py-1">Media Center</Badge>
                                <h1 className="text-5xl md:text-8xl font-headline font-bold leading-tight">Stories that <span className="text-primary italic">Inspire</span>.</h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Explore our collection of articles, research papers, creative writing, and visual documentation of the African artistic landscape.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {categories.map((cat, index) => (
                                    <div key={index} className="px-6 py-3 rounded-2xl bg-muted/50 border border-muted flex items-center gap-3 hover:bg-white hover:shadow-md transition-all cursor-pointer group">
                                        <span className="text-primary">{cat.icon}</span>
                                        <span className="text-sm font-bold">{cat.name}</span>
                                        <Badge variant="secondary" className="bg-white text-muted-foreground">{cat.count}</Badge>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recentMedia.map((item, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-6">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <Badge className="absolute top-4 left-4 bg-white/90 text-primary font-bold backdrop-blur-sm border-none shadow-sm">
                                            {item.type}
                                        </Badge>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-primary uppercase tracking-widest">{item.date}</p>
                                        <h3 className="text-2xl font-bold font-headline group-hover:text-primary transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            Read More <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="p-12 rounded-[40px] bg-primary text-white space-y-6">
                                <h2 className="text-3xl font-headline font-bold italic">Press & Reports</h2>
                                <div className="space-y-4">
                                    {[
                                        "KIKAOO Awards 2026 - Official Press Kit",
                                        "Heal the Future: Impact Assessment Q1",
                                        "New Residency Program for Digital Artists"
                                    ].map((doc, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
                                            <span className="font-medium">{doc}</span>
                                            <ArrowRight className="h-5 w-5" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-12 rounded-[40px] bg-secondary text-white space-y-6">
                                <h2 className="text-3xl font-headline font-bold italic">Photo Gallery</h2>
                                <p className="opacity-80">A visual journey through our workshops, festivals, and community programs.</p>
                                <div className="grid grid-cols-3 gap-4">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div key={i} className="aspect-square rounded-2xl overflow-hidden relative">
                                            <Image
                                                src={`https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400&sig=${i}`}
                                                alt="Gallery Image"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
