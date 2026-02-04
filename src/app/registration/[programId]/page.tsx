
'use client';

import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/navigation/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const programs = {
  castreal: { name: 'CastReal Agency', fee: '500 KES', fields: ['experience', 'measurements', 'talents'] },
  pageant: { name: 'Miss Pink Ribbon', fee: '1,500 KES', fields: ['region', 'motivation', 'advocacy'] },
  sports: { name: 'AWI Sports', fee: '1,000 KES', fields: ['discipline', 'currentLevel', 'achievements'] }
};

export default function RegistrationPage() {
  const { programId } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const program = programs[programId as keyof typeof programs];
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!program) return <div>Program not found</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast({
        title: "Registration Successful",
        description: "Your application has been received and is pending payment verification."
      });
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-muted/20">
        <Navbar />
        <div className="container mx-auto px-4 py-20 flex justify-center">
          <Card className="max-w-md w-full text-center p-8 space-y-6 border-primary/20 shadow-2xl">
            <div className="flex justify-center">
              <div className="bg-green-100 p-4 rounded-full text-green-600">
                <CheckCircle className="h-16 w-16" />
              </div>
            </div>
            <h2 className="text-3xl font-headline font-bold">Application Received!</h2>
            <p className="text-muted-foreground">Thank you for applying to {program.name}. Our team will review your profile shortly.</p>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <div className="text-sm font-bold uppercase mb-1">Registration Fee Due</div>
              <div className="text-2xl font-bold text-primary">{program.fee}</div>
              <p className="text-xs mt-2 text-muted-foreground">Follow instructions in your email to complete the M-Pesa payment.</p>
            </div>
            <Button className="w-full" onClick={() => router.push('/dashboard/talent')}>Go to Dashboard</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Programs
        </Button>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-primary text-white">
                <CardTitle className="text-2xl font-headline">Registration Form</CardTitle>
                <CardDescription className="text-ivory/80">Complete your details for {program.name}</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                      <Input placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                      <Input placeholder="+254 700 000000" required />
                    </div>
                  </div>

                  {programId === 'castreal' && (
                    <div className="space-y-6 border-t pt-6">
                      <h3 className="font-bold text-lg">Modeling Details</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase">Height (cm)</label>
                          <Input type="number" placeholder="180" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase">Shoe Size</label>
                          <Input type="number" placeholder="42" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase">Gender</label>
                          <Select>
                            <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase">Brief Bio / Experience</label>
                        <Textarea placeholder="Tell us about your background..." className="min-h-[100px]" />
                      </div>
                    </div>
                  )}

                  {programId === 'pageant' && (
                    <div className="space-y-6 border-t pt-6">
                      <h3 className="font-bold text-lg">Pageantry Application</h3>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-muted-foreground">County Representation</label>
                        <Select>
                          <SelectTrigger><SelectValue placeholder="Select County" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nairobi">Nairobi</SelectItem>
                            <SelectItem value="mombasa">Mombasa</SelectItem>
                            <SelectItem value="kisumu">Kisumu</SelectItem>
                            <SelectItem value="nakuru">Nakuru</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-muted-foreground">Your Motivation</label>
                        <Textarea placeholder="Why do you want to join Miss Pink Ribbon?" className="min-h-[100px]" />
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 border-t pt-6">
                    <h3 className="font-bold text-lg">Identity Verification</h3>
                    <div className="p-8 border-2 border-dashed rounded-xl text-center hover:bg-muted/50 cursor-pointer transition-colors">
                      <div className="flex flex-col items-center">
                        <div className="bg-primary/10 p-3 rounded-full mb-2">
                          <Loader2 className="h-6 w-6 text-primary rotate-45" />
                        </div>
                        <p className="font-bold">Upload Portrait Photo</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" disabled={loading} className="w-full h-14 text-lg font-bold">
                    {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Complete Registration'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-secondary text-white">
              <CardHeader>
                <CardTitle>Program Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="opacity-70">Program Name</span>
                  <span className="font-bold">{program.name}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="opacity-70">Registration Fee</span>
                  <span className="font-bold text-primary">{program.fee}</span>
                </div>
                <div className="pt-4 text-sm opacity-80 leading-relaxed">
                  Your registration fee covers your initial onboarding, identity verification, and access to the digital talent portal. This is a one-time non-refundable fee.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">If you're experiencing technical issues, please contact our support team.</p>
                <Button variant="outline" className="w-full">WhatsApp Support</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
