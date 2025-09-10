import Analytics from '@/components/ui/analytics';

export default function AnalyticsPage() {
  return <Analytics />;
}
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Phone, 
  DollarSign, 
  Clock,
  BarChart3,
  PieChart as PieChartIcon,
  Calendar
} from 'lucide-react';

const churnData = [
  { month: 'Jan', churnRate: 2.8, newCustomers: 450, totalCustomers: 24120 },
  { month: 'Feb', churnRate: 3.1, newCustomers: 380, totalCustomers: 24200 },
  { month: 'Mar', churnRate: 2.9, newCustomers: 520, totalCustomers: 24450 },
  { month: 'Apr', churnRate: 3.4, newCustomers: 410, totalCustomers: 24380 },
  { month: 'May', churnRate: 3.2, newCustomers: 470, totalCustomers: 24520 },
  { month: 'Jun', churnRate: 2.7, newCustomers: 560, totalCustomers: 24780 },
];

const supportTicketsData = [
  { day: 'Mon', technical: 45, billing: 23, general: 18, complaints: 12 },
  { day: 'Tue', technical: 52, billing: 19, general: 24, complaints: 8 },
  { day: 'Wed', technical: 48, billing: 31, general: 21, complaints: 15 },
  { day: 'Thu', technical: 61, billing: 25, general: 19, complaints: 10 },
  { day: 'Fri', technical: 55, billing: 28, general: 26, complaints: 14 },
  { day: 'Sat', technical: 32, billing: 16, general: 15, complaints: 6 },
  { day: 'Sun', technical: 28, billing: 12, general: 11, complaints: 4 },
];

const revenueData = [
  { month: 'Jan', revenue: 2450000, target: 2400000 },
  { month: 'Feb', revenue: 2380000, target: 2400000 },
  { month: 'Mar', revenue: 2520000, target: 2450000 },
  { month: 'Apr', revenue: 2490000, target: 2450000 },
  { month: 'May', revenue: 2630000, target: 2500000 },
  { month: 'Jun', revenue: 2580000, target: 2500000 },
];

const customerSegmentData = [
  { name: 'Basic Plan', value: 45, color: '#8884d8' },
  { name: 'Standard Plan', value: 30, color: '#82ca9d' },
  { name: 'Premium Plan', value: 20, color: '#ffc658' },
  { name: 'Enterprise', value: 5, color: '#ff7300' },
];

const responseTimeData = [
  { time: '9 AM', avgTime: 2.3, target: 3.0 },
  { time: '11 AM', avgTime: 4.1, target: 3.0 },
  { time: '1 PM', avgTime: 5.2, target: 3.0 },
  { time: '3 PM', avgTime: 3.8, target: 3.0 },
  { time: '5 PM', avgTime: 6.1, target: 3.0 },
  { time: '7 PM', avgTime: 2.9, target: 3.0 },
];

export function Analytics() {
  const [timeRange, setTimeRange] = useState('6months');

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into customer service metrics and performance.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="size-4 text-muted-foreground" />
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 min</div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <TrendingDown className="size-3 text-green-500" />
              <span className="text-green-600">-12%</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.6/5.0</div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <TrendingUp className="size-3 text-green-500" />
              <span className="text-green-600">+0.2</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">First Call Resolution</CardTitle>
            <Phone className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <TrendingUp className="size-3 text-green-500" />
              <span className="text-green-600">+5%</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.58M</div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <TrendingUp className="size-3 text-green-500" />
              <span className="text-green-600">+8.2%</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="churn" className="space-y-4">
        <TabsList>
          <TabsTrigger value="churn">Churn Analysis</TabsTrigger>
          <TabsTrigger value="support">Support Metrics</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Trends</TabsTrigger>
          <TabsTrigger value="segments">Customer Segments</TabsTrigger>
        </TabsList>

        <TabsContent value="churn" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Churn Rate</CardTitle>
                <CardDescription>Customer churn percentage over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={churnData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}%`, 'Churn Rate']} />
                    <Line 
                      type="monotone" 
                      dataKey="churnRate" 
                      stroke="#ef4444" 
                      strokeWidth={2}
                      dot={{ fill: '#ef4444' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Growth</CardTitle>
                <CardDescription>New vs total customers</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={churnData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="newCustomers" 
                      stackId="1"
                      stroke="#3b82f6" 
                      fill="#3b82f6"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="support" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Support Tickets by Category</CardTitle>
                <CardDescription>Weekly breakdown of support requests</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={supportTicketsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="technical" stackId="a" fill="#3b82f6" />
                    <Bar dataKey="billing" stackId="a" fill="#10b981" />
                    <Bar dataKey="general" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="complaints" stackId="a" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Time Trends</CardTitle>
                <CardDescription>Average response time vs target</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={responseTimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} min`, '']} />
                    <Line 
                      type="monotone" 
                      dataKey="avgTime" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      name="Actual"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="target" 
                      stroke="#ef4444" 
                      strokeDasharray="5 5"
                      name="Target"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Performance</CardTitle>
              <CardDescription>Monthly revenue vs targets</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => formatCurrency(value)} />
                  <Tooltip formatter={(value) => [formatCurrency(value as number), '']} />
                  <Legend />
                  <Bar dataKey="revenue" fill="#3b82f6" name="Actual Revenue" />
                  <Bar dataKey="target" fill="#e5e7eb" name="Target Revenue" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="segments" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Distribution by Plan</CardTitle>
                <CardDescription>Percentage breakdown of customer segments</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={customerSegmentData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {customerSegmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Segment Analysis</CardTitle>
                <CardDescription>Key metrics by customer segment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerSegmentData.map((segment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: segment.color }}
                        />
                        <span className="font-medium">{segment.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{segment.value}%</div>
                        <div className="text-xs text-muted-foreground">
                          {Math.round((segment.value / 100) * 24780)} customers
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}