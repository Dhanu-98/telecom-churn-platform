import About from '@/components/ui/about';

export default function AboutPage() {
  return <About />;
}
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Info, 
  Award, 
  Users, 
  Globe, 
  Zap, 
  Shield, 
  Heart,
  TrendingUp,
  Phone,
  ExternalLink,
  CheckCircle,
  Star
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Customer-First Approach',
    description: 'Everything we build is designed to help you deliver exceptional customer service and support.'
  },
  {
    icon: Zap,
    title: 'Real-time Analytics',
    description: 'Monitor customer interactions, churn rates, and service metrics in real-time.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime to ensure your data is always protected.'
  },
  {
    icon: Globe,
    title: 'Multi-channel Support',
    description: 'Manage customer interactions across phone, email, chat, and social media in one place.'
  }
];

const stats = [
  {
    value: '10,000+',
    label: 'Customer Service Agents',
    description: 'Trust our platform daily'
  },
  {
    value: '500M+',
    label: 'Customer Interactions',
    description: 'Handled through our system'
  },
  {
    value: '99.9%',
    label: 'System Uptime',
    description: 'Reliable service guaranteed'
  },
  {
    value: '4.8/5',
    label: 'Customer Rating',
    description: 'Average satisfaction score'
  }
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    description: 'Leading product strategy and customer experience initiatives',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    description: 'Building robust and scalable customer service solutions',
    avatar: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    description: 'Designing intuitive interfaces for customer service teams',
    avatar: 'ER'
  },
  {
    name: 'David Kim',
    role: 'Data Scientist',
    description: 'Developing AI-powered analytics and churn prediction models',
    avatar: 'DK'
  }
];

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Started with a vision to revolutionize customer service in telecom'
  },
  {
    year: '2021',
    title: 'First 1,000 Users',
    description: 'Reached our first milestone of serving 1,000 customer service agents'
  },
  {
    year: '2022',
    title: 'AI Integration',
    description: 'Launched advanced AI-powered churn prediction and analytics'
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded to serve telecom companies across 15 countries'
  },
  {
    year: '2024',
    title: 'Industry Recognition',
    description: 'Won "Best Customer Service Platform" award'
  }
];

export function About() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">About Infintra</h1>
        <p className="text-muted-foreground">
          Empowering customer service teams with intelligent tools and insights.
        </p>
      </div>

      {/* Mission Statement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="size-5 text-red-500" />
            Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            We believe that exceptional customer service is the foundation of successful businesses. 
            Our mission is to empower customer service teams with intelligent tools, real-time insights, 
            and seamless workflows that enable them to deliver outstanding customer experiences while 
            driving business growth through reduced churn and increased satisfaction.
          </p>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="size-4" />
            Why Choose Infintra
          </CardTitle>
          <CardDescription>
            Discover what makes our platform the preferred choice for customer service teams
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="size-4" />
            Platform Statistics
          </CardTitle>
          <CardDescription>
            Numbers that showcase our impact and reliability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="size-4" />
              Meet Our Team
            </CardTitle>
            <CardDescription>
              The passionate people behind Infintra
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-medium text-primary">
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{member.name}</h4>
                    <Badge variant="outline" className="text-xs mb-1">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Company Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="size-4" />
              Our Journey
            </CardTitle>
            <CardDescription>
              Key milestones in our company's growth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="size-4 text-primary" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-8 bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline">{milestone.year}</Badge>
                      <h4 className="font-medium">{milestone.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technology Stack */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="size-4" />
            Technology & Security
          </CardTitle>
          <CardDescription>
            Built with modern technologies and enterprise-grade security
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-3">Frontend Technologies</h4>
              <div className="space-y-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Recharts</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Security Features</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="size-3 text-green-500" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="size-3 text-green-500" />
                  <span>SOC 2 Type II compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="size-3 text-green-500" />
                  <span>GDPR compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="size-3 text-green-500" />
                  <span>Multi-factor authentication</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Integrations</h4>
              <div className="space-y-2">
                <Badge variant="outline">CRM Systems</Badge>
                <Badge variant="outline">Billing Platforms</Badge>
                <Badge variant="outline">Communication APIs</Badge>
                <Badge variant="outline">Analytics Tools</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact & Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="size-4" />
            Get in Touch
          </CardTitle>
          <CardDescription>
            Have questions or need support? We're here to help
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Sales Inquiries</div>
                <div className="text-sm text-muted-foreground">Learn about our solutions</div>
              </div>
              <ExternalLink className="size-4 ml-auto" />
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Technical Support</div>
                <div className="text-sm text-muted-foreground">Get help with the platform</div>
              </div>
              <ExternalLink className="size-4 ml-auto" />
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Partnership</div>
                <div className="text-sm text-muted-foreground">Explore partnership opportunities</div>
              </div>
              <ExternalLink className="size-4 ml-auto" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Version Information */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Infintra Dashboard v2.1.0</span>
              <span>•</span>
              <span>Last updated: January 2024</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Star className="size-3 fill-yellow-400 text-yellow-400" />
                <span>4.8/5 rating</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Release Notes
              </Button>
              <Button variant="outline" size="sm">
                Documentation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
