
import { Badge } from '@/components/ui/badge';

export default function CookiesPage() {
    return (
        <div className="prose prose-zinc max-w-none">
            <Badge variant="outline" className="mb-6">Legal</Badge>
            <h1 className="text-4xl font-headline font-bold mb-8">Cookie Policy</h1>
            <p className="text-muted-foreground mb-6">
                Last updated: February 2026
            </p>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. What are Cookies?</h2>
                <p>
                    Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                </p>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
                <p>
                    We use cookies to understand how you use our website, remember your preferences, and improve your overall experience.
                </p>
            </section>
        </div>
    );
}
