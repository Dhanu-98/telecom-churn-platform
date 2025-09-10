import CustomerLookup from '@/components/ui/customer-lookup';

export default function CustomerPage() {
  return <CustomerLookup />;
}
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Search, Phone, Mail, MapPin, Calendar, CreditCard, Wifi, AlertCircle, CheckCircle } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  plan: string;
  status: 'active' | 'inactive' | 'suspended';
  accountBalance: number;
  joinDate: string;
  lastPayment: string;
  dataUsage: {
    used: number;
    total: number;
  };
  recentTickets: Array<{
    id: string;
    subject: string;
    status: string;
    date: string;
  }>;
}

const mockCustomer: Customer = {
  id: 'CUST-001',
  name: 'John Smith',
  email: 'john.smith@email.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main St, New York, NY 10001',
  plan: 'Premium Unlimited',
  status: 'active',
  accountBalance: -45.99,
  joinDate: '2022-03-15',
  lastPayment: '2024-01-15',
  dataUsage: {
    used: 85,
    total: 100
  },
  recentTickets: [
    {
      id: 'TKT-001',
      subject: 'Network connectivity issue',
      status: 'open',
      date: '2024-01-20'
    },
    {
      id: 'TKT-002',
      subject: 'Billing inquiry',
      status: 'resolved',
      date: '2024-01-18'
    }
  ]
};

export function CustomerLookup() {
  const [searchQuery, setSearchQuery] = useState('');
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setCustomer(mockCustomer);
      setIsLoading(false);
    }, 1000);
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'default',
      inactive: 'secondary',
      suspended: 'destructive'
    } as const;
    
    return (
      <Badge variant={variants[status as keyof typeof variants] || 'secondary'}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getTicketStatusIcon = (status: string) => {
    return status === 'resolved' ? (
      <CheckCircle className="size-4 text-green-500" />
    ) : (
      <AlertCircle className="size-4 text-orange-500" />
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Customer Lookup</h1>
        <p className="text-muted-foreground">
          Search for customers by phone number, email, or customer ID.
        </p>
      </div>

      {/* Search Section */}
      <Card>
        <CardHeader>
          <CardTitle>Search Customer</CardTitle>
          <CardDescription>Enter customer information to find their account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Enter phone number, email, or customer ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} disabled={isLoading}>
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Customer Details */}
      {customer && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{customer.name}</CardTitle>
                  <CardDescription>Customer ID: {customer.id}</CardDescription>
                </div>
                {getStatusBadge(customer.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-muted-foreground" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-muted-foreground" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-muted-foreground" />
                  <span className="truncate">{customer.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-muted-foreground" />
                  <span>Joined {customer.joinDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="account" className="space-y-4">
            <TabsList>
              <TabsTrigger value="account">Account Details</TabsTrigger>
              <TabsTrigger value="billing">Billing & Usage</TabsTrigger>
              <TabsTrigger value="support">Support History</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Service Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Current Plan:</span>
                        <Badge>{customer.plan}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        {getStatusBadge(customer.status)}
                      </div>
                      <div className="flex justify-between">
                        <span>Auto-renew:</span>
                        <span>Enabled</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Preferred Contact:</span>
                        <span>Email</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Marketing Emails:</span>
                        <span>Enabled</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SMS Notifications:</span>
                        <span>Enabled</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="billing" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="size-4" />
                      Account Balance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-red-600">
                        ${Math.abs(customer.accountBalance).toFixed(2)} outstanding
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Last payment: {customer.lastPayment}
                      </div>
                      <Button variant="outline" className="w-full mt-2">
                        Process Payment
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wifi className="size-4" />
                      Data Usage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Used:</span>
                        <span>{customer.dataUsage.used}GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total:</span>
                        <span>{customer.dataUsage.total}GB</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${(customer.dataUsage.used / customer.dataUsage.total) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {customer.dataUsage.used}/{customer.dataUsage.total}GB ({Math.round((customer.dataUsage.used / customer.dataUsage.total) * 100)}%)
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Support Tickets</CardTitle>
                  <CardDescription>Customer's support history and current issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {customer.recentTickets.map((ticket) => (
                      <div key={ticket.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          {getTicketStatusIcon(ticket.status)}
                          <div>
                            <p className="font-medium">{ticket.subject}</p>
                            <p className="text-sm text-muted-foreground">Ticket #{ticket.id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={ticket.status === 'resolved' ? 'default' : 'secondary'}>
                            {ticket.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{ticket.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4">
                    Create New Ticket
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}