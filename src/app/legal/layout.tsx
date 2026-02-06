
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
