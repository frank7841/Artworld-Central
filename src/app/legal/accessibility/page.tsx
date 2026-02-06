
import { Badge } from '@/components/ui/badge';

export default function AccessibilityPage() {
    return (
        <div className="prose prose-zinc max-w-none">
            <Badge variant="outline" className="mb-6">Legal</Badge>
            <h1 className="text-4xl font-headline font-bold mb-8">Accessibility Statement</h1>
            <p className="text-muted-foreground mb-6">
                Last updated: February 2026
            </p>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                <p>
                    ArtWorld Institute is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Standards</h2>
                <p>
                    We aim to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards.
                </p>
            </section>
        </div>
    );
}
