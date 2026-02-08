
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PiggyBank, TrendingUp, ShieldCheck, Banknote } from 'lucide-react';
import Image from 'next/image';

export default function AWIWelfareClubPage() {
    return (
        <div className="py-12 md:py-24 bg-gradient-to-b from-blue-900 to-slate-900 text-white min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <Badge className="bg-blue-500 text-white px-4 py-1.5 uppercase font-bold tracking-widest text-xs border-none shadow-lg shadow-blue-500/20">
                            Financial Growth
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
                            AWI Welfare <br />
                            <span className="text-blue-400">Savings & Investment Club</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200/80 leading-relaxed font-light">
                            Securing the future of the creative community. Collective investment strategies, emergency funds, and financial literacy for artists.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Smart Savings", icon: <PiggyBank className="h-8 w-8 text-blue-400" />, desc: "Flexible saving plans with competitive interest rates tailored for irregular incomes." },
                            { title: "Strategic Investment", icon: <TrendingUp className="h-8 w-8 text-green-400" />, desc: "Access to high-yield investment opportunities in real estate and bonds." },
                            { title: "Member Welfare", icon: <ShieldCheck className="h-8 w-8 text-amber-400" />, desc: "Emergency assistance and benevolent funds for members in need." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-blue-200/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-2 text-center md:text-left">
                            <h3 className="text-2xl font-bold">Start Building Wealth Today</h3>
                            <p className="text-blue-100">Join over 500 members growing their financial portfolio.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold h-14 px-8 rounded-xl w-full sm:w-auto">
                                Register Now
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold h-14 px-8 rounded-xl w-full sm:w-auto">
                                Member Login
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
