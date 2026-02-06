'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';
import { Loader2, AlertCircle, Mail, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email.trim()) {
            setError('Please enter your email address');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setLoading(true);

        // Simulate sending reset email
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 1500);
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/30 via-background to-muted/20 px-4">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <Link href="/" className="font-headline font-bold text-3xl tracking-tight text-primary inline-block hover:opacity-80 transition-opacity">
                            ARTWORLD<span className="text-secondary ml-1">CENTRAL</span>
                        </Link>
                    </div>

                    <Card className="border-none shadow-2xl backdrop-blur-sm bg-card/95">
                        <CardContent className="pt-12 pb-8 text-center space-y-6">
                            <div className="flex justify-center">
                                <div className="bg-green-100 p-4 rounded-full text-green-600">
                                    <CheckCircle2 className="h-12 w-12" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-headline font-bold">Check Your Email</h2>
                                <p className="text-muted-foreground">
                                    We've sent password reset instructions to <span className="font-semibold text-foreground">{email}</span>
                                </p>
                            </div>
                            <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
                                <p>Didn't receive the email? Check your spam folder or try again in a few minutes.</p>
                            </div>
                            <div className="space-y-3 pt-4">
                                <Button className="w-full h-11 font-semibold" asChild>
                                    <Link href="/login">Back to Sign In</Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full h-11 font-semibold"
                                    onClick={() => {
                                        setSuccess(false);
                                        setEmail('');
                                    }}
                                >
                                    Try Different Email
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/30 via-background to-muted/20 px-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-2">
                    <Link href="/" className="font-headline font-bold text-3xl tracking-tight text-primary inline-block hover:opacity-80 transition-opacity">
                        ARTWORLD<span className="text-secondary ml-1">CENTRAL</span>
                    </Link>
                    <p className="text-muted-foreground font-light">Reset your password</p>
                </div>

                <Card className="border-none shadow-2xl backdrop-blur-sm bg-card/95">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-center text-2xl font-headline">Forgot Password?</CardTitle>
                        <CardDescription className="text-center">
                            Enter your email address and we'll send you instructions to reset your password
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {error && (
                            <Alert variant="destructive" className="animate-in fade-in slide-in-from-top-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={loading}
                                        className="h-11 pl-10"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 text-lg font-bold mt-6 shadow-lg hover:shadow-xl transition-shadow"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Sending Instructions...
                                    </>
                                ) : (
                                    'Send Reset Instructions'
                                )}
                            </Button>
                        </form>

                        <div className="pt-4">
                            <Button
                                variant="ghost"
                                className="w-full font-semibold"
                                asChild
                            >
                                <Link href="/login">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Sign In
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
