
'use client';

import { Navbar } from '@/components/navigation/navbar';
import { useAuthStore } from '@/lib/auth-store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  CreditCard, 
  FileCheck, 
  PlusCircle, 
  Search, 
  Filter,
  MoreVertical,
  ArrowUpRight,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

export default function AdminDashboard() {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user || (user.role !== 'ADMIN' && user.role !== 'SUPER_ADMIN')) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  const applications = [
    { id: '1', name: 'Alice Walker', program: 'CastReal', status: 'Pending', date: '2024-10-24' },
    { id: '2', name: 'Bob Smith', program: 'Sports', status: 'Approved', date: '2024-10-23' },
    { id: '3', name: 'Catherine N.', program: 'Pageant', status: 'Rejected', date: '2024-10-22' },
    { id: '4', name: 'David M.', program: 'CastReal', status: 'Pending', date: '2024-10-21' },
  ];

  const payments = [
    { id: 'TRX-982', talent: 'Alice Walker', amount: '500 KES', status: 'Verifying', method: 'M-Pesa' },
    { id: 'TRX-101', talent: 'Bob Smith', amount: '1,000 KES', status: 'Paid', method: 'Card' },
    { id: 'TRX-045', talent: 'Catherine N.', amount: '1,500 KES', status: 'Refunded', method: 'M-Pesa' },
  ];

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
          <div className="space-y-1">
            <h1 className="text-3xl font-headline font-bold">Admin Command Center</h1>
            <p className="text-muted-foreground">Manage the ArtWorld digital ecosystem and talent lifecycle.</p>
          </div>
          <div className="flex gap-2">
            <Button className="font-bold">
              <PlusCircle className="mr-2 h-4 w-4" /> New Program
            </Button>
            <Button variant="outline" className="font-bold">
              Export Data
            </Button>
          </div>
        </div>

        {/* High Level Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Talent', value: '1,248', icon: <Users className="text-blue-600" />, trend: '+5%' },
            { label: 'New Apps', value: '42', icon: <Clock className="text-orange-500" />, trend: '+12%' },
            { label: 'Revenue (MTD)', value: '240k KES', icon: <CreditCard className="text-green-600" />, trend: '+8%' },
            { label: 'Active Jobs', value: '18', icon: <FileCheck className="text-primary" />, trend: '0%' }
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-green-600 font-bold flex items-center mt-1">
                  <ArrowUpRight className="h-3 w-3 mr-1" /> {stat.trend} <span className="text-muted-foreground font-normal ml-1">vs last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="bg-white p-1 h-12 shadow-sm border rounded-xl">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="talent">Talent Hub</TabsTrigger>
            <TabsTrigger value="payments">Financials</TabsTrigger>
            <TabsTrigger value="programs">Program Mgmt</TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-4">
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search applicants by name or email..." className="pl-10 h-10" />
              </div>
              <Button variant="outline" className="h-10">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>

            <Card className="border-none shadow-sm overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Date Received</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell className="font-bold">{app.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">{app.program}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{app.date}</TableCell>
                      <TableCell>
                        <Badge className={
                          app.status === 'Approved' ? 'bg-green-100 text-green-700' :
                          app.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                          'bg-orange-100 text-orange-700'
                        }>
                          {app.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost">View Profile</Button>
                          <Button size="icon" variant="ghost"><MoreVertical className="h-4 w-4" /></Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <Card className="border-none shadow-sm overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Talent Name</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Verification</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell className="font-mono text-xs">{p.id}</TableCell>
                      <TableCell className="font-bold">{p.talent}</TableCell>
                      <TableCell className="font-bold text-primary">{p.amount}</TableCell>
                      <TableCell>{p.method}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          {p.status === 'Paid' && <CheckCircle className="h-4 w-4 text-green-500" />}
                          {p.status === 'Verifying' && <Clock className="h-4 w-4 text-orange-500" />}
                          {p.status === 'Refunded' && <XCircle className="h-4 w-4 text-red-500" />}
                          <span className="text-sm">{p.status}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="outline" disabled={p.status === 'Paid'}>Confirm Receipt</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
