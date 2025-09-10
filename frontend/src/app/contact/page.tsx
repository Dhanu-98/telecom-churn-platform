import Contact from '@/components/ui/contact';

export default function ContactPage() {
  return <Contact />;
}
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Headphones,
  AlertTriangle,
  Users,
  Globe,
  Send
} from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us for immediate assistance',
    contact: '+1 (800) 555-0123',
    availability: '24/7 Available',
    type: 'primary'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email for detailed inquiries',
    contact: 'support@infintra.com',
    availability: 'Response within 2 hours',
    type: 'secondary'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team',
    contact: 'Available in dashboard',
    availability: 'Mon-Fri 8AM-8PM',
    type: 'secondary'
  },
  {
    icon: Headphones,
    title: 'Technical Helpdesk',
    description: 'For system and technical issues',
    contact: '+1 (800) 555-0124',
    availability: 'Mon-Fri 6AM-10PM',
    type: 'secondary'
  }
];

const departments = [
  {
    name: 'IT Support',
    description: 'System issues, login problems, technical difficulties',
    contact: 'ext. 1001',
    email: 'it-support@infintra.com'
  },
  {
    name: 'HR Department',
    description: 'Training, scheduling, employee resources',
    contact: 'ext. 1002',
    email: 'hr@infintra.com'
  },
  {
    name: 'Quality Assurance',
    description: 'Feedback, suggestions, quality improvements',
    contact: 'ext. 1003',
    email: 'qa@infintra.com'
  },
  {
    name: 'Management',
    description: 'Escalations, policy questions, urgent matters',
    contact: 'ext. 1004',
    email: 'management@infintra.com'
  }
];

const officeLocations = [
  {
    city: 'New York',
    address: '123 Business Center Dr, New York, NY 10001',
    phone: '+1 (212) 555-0100',
    hours: 'Mon-Fri 8AM-6PM'
  },
  {
    city: 'Los Angeles',
    address: '456 Corporate Blvd, Los Angeles, CA 90210',
    phone: '+1 (323) 555-0200',
    hours: 'Mon-Fri 7AM-5PM'
  },
  {
    city: 'Chicago',
    address: '789 Office Plaza, Chicago, IL 60601',
    phone: '+1 (312) 555-0300',
    hours: 'Mon-Fri 8AM-6PM'
  }
];

export function Contact() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact Support</h1>
        <p className="text-muted-foreground">
          Get help when you need it. Our support team is here to assist you.
        </p>
      </div>

      {/* Quick Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contactMethods.map((method, index) => (
          <Card key={index} className={`hover:shadow-md transition-shadow cursor-pointer ${
            method.type === 'primary' ? 'ring-2 ring-primary' : ''
          }`}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  method.type === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  <method.icon className="size-4" />
                </div>
                <div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
              <p className="font-medium mb-1">{method.contact}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="size-3" />
                {method.availability}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="size-4" />
              Send us a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@infintra.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">IT Support</SelectItem>
                  <SelectItem value="hr">HR Department</SelectItem>
                  <SelectItem value="qa">Quality Assurance</SelectItem>
                  <SelectItem value="management">Management</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - General question</SelectItem>
                  <SelectItem value="medium">Medium - Need assistance</SelectItem>
                  <SelectItem value="high">High - Urgent issue</SelectItem>
                  <SelectItem value="critical">Critical - System down</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Brief description of your issue" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Please describe your issue or question in detail..."
                rows={5}
              />
            </div>

            <Button className="w-full">
              <Send className="size-4 mr-2" />
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Department Directory */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="size-4" />
                Department Directory
              </CardTitle>
              <CardDescription>
                Direct contact information for specific departments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium">{dept.name}</h4>
                        <p className="text-sm text-muted-foreground">{dept.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Phone className="size-3" />
                            {dept.contact}
                          </span>
                          <span className="flex items-center gap-1">
                            <Mail className="size-3" />
                            {dept.email}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="size-4 text-red-500" />
                Emergency Contacts
              </CardTitle>
              <CardDescription>
                For critical system issues and emergencies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border border-red-200 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="size-4 text-red-500" />
                    <span className="font-medium text-red-700">Critical System Issues</span>
                  </div>
                  <p className="text-sm text-red-600 mb-2">
                    For system outages affecting customer service
                  </p>
                  <div className="text-sm">
                    <p className="font-medium">Emergency Hotline: +1 (800) 555-9999</p>
                    <p>Available 24/7</p>
                  </div>
                </div>

                <div className="p-3 border border-orange-200 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Phone className="size-4 text-orange-500" />
                    <span className="font-medium text-orange-700">After Hours Support</span>
                  </div>
                  <p className="text-sm text-orange-600 mb-2">
                    For urgent issues outside business hours
                  </p>
                  <div className="text-sm">
                    <p className="font-medium">On-call Support: +1 (800) 555-8888</p>
                    <p>Weekends and holidays</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Office Locations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="size-4" />
            Office Locations
          </CardTitle>
          <CardDescription>
            Our physical office locations and contact information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {officeLocations.map((office, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">{office.city}</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="size-4" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}