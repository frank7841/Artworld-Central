'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose, DialogTitle } from '@/components/ui/dialog';
import Link from 'next/link';

export function MissPinkRibbonModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if modal has been seen in this session
        const hasSeenModal = sessionStorage.getItem('missPinkRibbonModalSeen');
        if (!hasSeenModal) {
            // Small delay for better UX
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        if (!open) {
            sessionStorage.setItem('missPinkRibbonModalSeen', 'true');
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-md p-0 overflow-hidden border-none bg-transparent shadow-none">
                <DialogTitle className="sr-only">Miss Pink Ribbon Kenya 2025–2029</DialogTitle>
                <div className="relative flex flex-col items-center justify-center">
                    {/* Close button positioned outside or top-right of the content */}
                    <div className="absolute top-2 right-2 z-50">
                        <DialogClose asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/20 backdrop-blur-sm">
                                <X className="h-5 w-5" />
                                <span className="sr-only">Close</span>
                            </Button>
                        </DialogClose>
                    </div>

                    <div className="relative w-full aspect-[6/7] sm:aspect-square max-h-[100vh] rounded-2xl overflow-hidden shadow-2xl bg-white">
                        <Image
                            src="/image/misspinkribbon.jpeg"
                            alt="Miss Pink Ribbon Kenya 2025–2029"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* CTA Overlay */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-12 flex flex-col items-center text-center space-y-3">
                            <h3 className="text-white text-xl font-bold font-headline">Miss Pink Ribbon Kenya</h3>
                            <p className="text-white/80 text-sm max-w-xs">Join the movement. Celebrate beauty, advocacy, and life.</p>
                            <Button asChild size="lg" className="bg-primary text-secondary font-bold hover:bg-primary/90 rounded-full w-full max-w-[200px]">
                                <Link href="/initiatives/miss-pink-ribbon" onClick={() => setIsOpen(false)}>
                                    Learn More
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
