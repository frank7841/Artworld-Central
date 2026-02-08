
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, PenTool, Library, MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function BookWeekPage() {
    return (
        <div className="py-12 md:py-24 bg-[#FFFBF0]">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-amber-100">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-8 md:p-16 space-y-8 flex flex-col justify-center">
                                <Badge className="bg-amber-100 text-amber-800 px-4 py-1.5 w-fit uppercase font-bold tracking-widest text-xs border-none">
                                    Literary Festival
                                </Badge>
                                <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight text-amber-950">
                                    KIKAOO <br />
                                    <span className="text-amber-600">National Book Week</span>
                                </h1>
                                <p className="text-lg text-amber-900/70 leading-relaxed font-serif">
                                    KIKAOO National Book Week promotes reading, writing, and literary culture through author engagements, school programs, book exhibitions, and storytelling forums. "A reader lives a thousand lives before he dies."
                                </p>
                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                                            <PenTool className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-amber-900">Author Signings</h3>
                                            <p className="text-sm text-amber-800/60">Meet your favorite writers.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                                            <Library className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-amber-900">Book Fair</h3>
                                            <p className="text-sm text-amber-800/60">Discounts on thousands of titles.</p>
                                        </div>
                                    </div>
                                </div>
                                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white mt-4 w-fit rounded-xl h-14 px-8 font-bold">
                                    View Schedule <MoveRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                            <div className="relative h-full min-h-[400px] bg-amber-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800"
                                    alt="Book reading"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
