
import { Badge } from '@/components/ui/badge';

export default function PrivacyPage() {
    return (
        <div className="prose prose-zinc max-w-none">
            <Badge variant="outline" className="mb-6">Legal</Badge>
            <h1 className="text-4xl font-headline font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">
                Last updated: February 2026
            </p>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p>
                    ArtWorld Institute ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website.
                </p>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <p>
                    We collect information you provide directly to us, such as when you create an account, register for a program, or contact us. This may include your name, email address, and payment information.
                </p>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. Use of Information</h2>
                <p>
                    We use the information we collect to provide, maintain, and improve our services, communicate with you, and process transactions.
                </p>
            </section>
            {/* Add more sections as needed */}
        </div>
    );
}
