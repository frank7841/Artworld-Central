
import Link from 'next/link';

export function Footer() {
    const footerLinks = [
        {
            title: 'About',
            links: [
                { name: 'Who We Are', href: '/about/who-we-are' },
                { name: 'Vision & Mission', href: '/about/vision-mission' },
                { name: 'Our Values', href: '/about/values' },
                { name: 'Leadership', href: '/about/leadership' },
                { name: 'History & Legacy', href: '/about/history' },
            ]
        },
        {
            title: 'Programs',
            links: [
                { name: 'Arts Education', href: '/programs/arts-education' },
                { name: 'Festivals & Exhibitions', href: '/programs/festivals' },
                { name: 'Community Engagement', href: '/programs/community' },
                { name: 'Research & Writing', href: '/programs/research' },
                { name: 'Schools Programs', href: '/programs/schools' },
            ]
        },
        {
            title: 'Ecosystem',
            links: [
                { name: 'Initiatives', href: '/initiatives' },
                { name: 'Events', href: '/events' },
                { name: 'Impact', href: '/impact' },
                { name: 'Media', href: '/media' },
            ]
        },
        {
            title: 'Connect',
            links: [
                { name: 'Get Involved', href: '/get-involved' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Partner With Us', href: '/get-involved#partner' },
                { name: 'Volunteer', href: '/get-involved#volunteer' },
            ]
        }
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '/legal/privacy' },
        { name: 'Terms & Conditions', href: '/legal/terms' },
        { name: 'Cookie Policy', href: '/legal/cookies' },
        { name: 'Accessibility Statement', href: '/legal/accessibility' },
    ];

    return (
        <footer className="bg-white border-t py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="font-headline font-bold text-2xl tracking-tight text-primary">
                            ARTWORLD<span className="text-secondary ml-1">INSTITUTE</span>
                        </div>
                        <p className="text-muted-foreground max-w-sm leading-relaxed">
                            World Premiere Arts Training & Research Institution dedicated to nurturing creativity,
                            advancing cultural knowledge, and shaping future artistic leaders.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social icons can be added here */}
                        </div>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-bold mb-4 text-secondary">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} ArtWorld Institute. All rights reserved. Registered in Kenya.
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
