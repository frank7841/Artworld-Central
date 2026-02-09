'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function MissPinkRibbonModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show modal on mount (page load/reload)
        // Optional: Check local storage to only show once per session if desired later
        // For now, always show on reload as requested
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000); // Small delay for better UX
        return () => clearTimeout(timer);
    }, []);

    const heroImg = PlaceHolderImages.find(img => img.id === 'program-pink-ribbon');

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none shadow-2xl bg-white">
                <div className="relative h-48 sm:h-56 w-full">
                    <Image
                        src={heroImg?.imageUrl || '/image/misspinkribbon.jpeg'}
                        alt="Miss Pink Ribbon Kenya"
                        fill
                        className="object-cover brightness-[0.6]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <Badge className="bg-primary text-secondary mb-2 hover:bg-primary/90">2025 – 2029</Badge>
                        <DialogTitle className="text-2xl sm:text-3xl font-headline font-bold text-white leading-tight">
                            Miss Pink Ribbon <span className="text-primary italic">Kenya</span>
                        </DialogTitle>
                        <p className="text-white/90 text-sm italic font-light mt-1">
                            "Kuwa kivuli kwa wanaohitaji..."
                        </p>
                    </div>
                </div>

                <div className="p-6 pt-4 space-y-4">
                    <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                        Celebrating Beauty, Advocacy & Life. Join the movement to raise awareness for breast cancer and support those affected by it.
                    </DialogDescription>

                    <div className="grid grid-cols-1 gap-3 pt-2">
                        <Button className="w-full font-bold text-lg h-12 shadow-lg shadow-primary/20" size="lg" asChild>
                            <Link href="https://forms.gle/csJR7npkCiAQnmrS8" target="_blank" rel="noopener noreferrer">
                                <Trophy className="mr-2 h-5 w-5" /> Register Now
                            </Link>
                        </Button>
                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="w-full font-semibold border-primary/20 hover:bg-primary/5 text-primary" asChild>
                                <Link href="#">
                                    <Heart className="mr-2 h-4 w-4" /> Become a Sponsor
                                </Link>
                            </Button>
                            <Button variant="ghost" className="w-full text-muted-foreground" onClick={() => setIsOpen(false)}>
                                Maybe Later
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
