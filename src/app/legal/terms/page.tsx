
import { Badge } from '@/components/ui/badge';

export default function TermsPage() {
    return (
        <div className="prose prose-zinc max-w-none">
            <Badge variant="outline" className="mb-6">Legal</Badge>
            <h1 className="text-4xl font-headline font-bold mb-8">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-6">
                Last updated: February 2026
            </p>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p>
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on ArtWorld Institute's website for personal, non-commercial transitory viewing only.
                </p>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                <p>
                    The materials on ArtWorld Institute's website are provided on an 'as is' basis. ArtWorld Institute makes no warranties, expressed or implied.
                </p>
            </section>
        </div>
    );
}
