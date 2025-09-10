import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Users, 
  AlertTriangle, 
  CreditCard, 
  Headphones, 
  FileText,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  ArrowUpRight
} from 'lucide-react';

const statsCards = [
  {
    title: 'Total Customers',
    value: '24,582',
    change: '+12.5%',
    changeType: 'positive' as const,
    icon: Users,
    description: 'Active subscribers'
  },
  {
    title: 'Churn Alerts',
    value: '156',
    change: '+3.2%',
    changeType: 'negative' as const,
    icon: AlertTriangle,
    description: 'High risk customers'
  },
  {
    title: 'Billing Issues',
    value: '89',
    change: '-15.3%',
    changeType: 'positive' as const,
    icon: CreditCard,
    description: 'Outstanding issues'
  },
  {
    title: 'Support Tickets',
    value: '234',
    change: '+5.7%',
    changeType: 'negative' as const,
    icon: Headphones,
    description: 'Open tickets'
  },
];

const recentActivity = [
  {
    id: 1,
    type: 'support',
    customer: 'John Smith',
    issue: 'Network connectivity issue',
    status: 'in-progress',
    time: '2 minutes ago',
    priority: 'high'
  },
  {
    id: 2,
    type: 'billing',
    customer: 'Sarah Johnson',
    issue: 'Payment failed',
    status: 'resolved',
    time: '15 minutes ago',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'churn',
    customer: 'Mike Davis',
    issue: 'Service cancellation request',
    status: 'pending',
    time: '1 hour ago',
    priority: 'high'
  },
  {
    id: 4,
    type: 'support',
    customer: 'Emma Wilson',
    issue: 'Plan upgrade inquiry',
    status: 'resolved',
    time: '2 hours ago',
    priority: 'low'
  },
];

const quickActions = [
  { label: 'Search Customer', icon: Users, action: 'customer-lookup' },
  { label: 'Create Ticket', icon: FileText, action: 'support' },
  { label: 'Billing Inquiry', icon: CreditCard, action: 'billing' },
  { label: 'Network Status', icon: TrendingUp, action: 'network' },
];

export function DashboardHome() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="size-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="size-4 text-yellow-500" />;
      case 'pending':
        return <XCircle className="size-4 text-red-500" />;
      default:
        return <Clock className="size-4 text-gray-500" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    const variants = {
      high: 'destructive',
      medium: 'secondary',
      low: 'outline'
    } as const;
    
    return (
      <Badge variant={variants[priority as keyof typeof variants] || 'outline'}>
        {priority}
      </Badge>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your customer service metrics.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                {card.changeType === 'positive' ? (
                  <TrendingUp className="size-3 text-green-500" />
                ) : (
                  <TrendingDown className="size-3 text-red-500" />
                )}
                <span className={card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}>
                  {card.change}
                </span>
                <span>from last month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest customer interactions and tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(activity.status)}
                    <div>
                      <p className="font-medium">{activity.customer}</p>
                      <p className="text-sm text-muted-foreground">{activity.issue}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getPriorityBadge(activity.priority)}
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used tools and functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <Button key={index} variant="outline" className="w-full justify-start h-auto p-3 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <action.icon className="size-4 mr-3" />
                  <span>{action.label}</span>
                  <ArrowUpRight className="size-3 ml-auto" />
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service Requests Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Service Requests Summary</CardTitle>
          <CardDescription>Overview of today's service requests by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">45</div>
              <div className="text-sm text-muted-foreground">Technical Support</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">23</div>
              <div className="text-sm text-muted-foreground">Billing Inquiries</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-orange-600">18</div>
              <div className="text-sm text-muted-foreground">Plan Changes</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-red-600">12</div>
              <div className="text-sm text-muted-foreground">Complaints</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}