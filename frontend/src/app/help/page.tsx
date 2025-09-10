import HelpCenter from '@/components/ui/help-center';

export default function HelpPage() {
  return <HelpCenter />;
}
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Search, 
  HelpCircle, 
  Book, 
  Video, 
  Download, 
  ExternalLink,
  Clock,
  Users,
  Star,
  MessageCircle,
  FileText,
  Headphones
} from 'lucide-react';

interface HelpArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  views: number;
  rating: number;
  lastUpdated: string;
}

const helpArticles: HelpArticle[] = [
  {
    id: '1',
    title: 'How to Handle Billing Disputes',
    content: 'Step-by-step guide for resolving customer billing disputes effectively...',
    category: 'billing',
    views: 2456,
    rating: 4.8,
    lastUpdated: '2024-01-15'
  },
  {
    id: '2',
    title: 'Network Troubleshooting Guide',
    content: 'Comprehensive troubleshooting steps for common network connectivity issues...',
    category: 'technical',
    views: 1823,
    rating: 4.6,
    lastUpdated: '2024-01-18'
  },
  {
    id: '3',
    title: 'Customer Retention Best Practices',
    content: 'Proven strategies for retaining customers and preventing churn...',
    category: 'retention',
    views: 1234,
    rating: 4.9,
    lastUpdated: '2024-01-12'
  },
  {
    id: '4',
    title: 'Escalation Procedures',
    content: 'When and how to escalate customer issues to supervisors...',
    category: 'procedures',
    views: 987,
    rating: 4.7,
    lastUpdated: '2024-01-20'
  }
];

const faqData = [
  {
    question: 'How do I access customer account information?',
    answer: 'You can access customer account information through the Customer Lookup page. Enter the customer\'s phone number, email, or customer ID to view their complete profile including billing, usage, and support history.'
  },
  {
    question: 'What should I do if a customer wants to cancel their service?',
    answer: 'First, try to understand the reason for cancellation. Use the retention scripts in the Chat Templates section. If retention isn\'t possible, follow the cancellation procedures in the help documentation and ensure proper documentation.'
  },
  {
    question: 'How do I process a refund for a customer?',
    answer: 'Refunds require supervisor approval for amounts over $50. For smaller amounts, you can process them directly through the billing system. Always document the reason for the refund and get customer confirmation.'
  },
  {
    question: 'Where can I find troubleshooting guides?',
    answer: 'All troubleshooting guides are available in the Help Center under the Technical Support category. They include step-by-step instructions for common issues and when to escalate to technical specialists.'
  },
  {
    question: 'How do I update customer contact information?',
    answer: 'Customer contact information can be updated through their account profile. Always verify the customer\'s identity before making changes and confirm the new information with them.'
  }
];

const trainingVideos = [
  {
    id: '1',
    title: 'Customer Service Excellence',
    duration: '15:32',
    description: 'Learn the fundamentals of excellent customer service',
    category: 'basics'
  },
  {
    id: '2',
    title: 'Handling Difficult Customers',
    duration: '22:18',
    description: 'Strategies for de-escalating tense situations',
    category: 'advanced'
  },
  {
    id: '3',
    title: 'Billing System Overview',
    duration: '18:45',
    description: 'Complete guide to using the billing system',
    category: 'technical'
  },
  {
    id: '4',
    title: 'Churn Prevention Techniques',
    duration: '12:20',
    description: 'Proven methods for customer retention',
    category: 'retention'
  }
];

const downloads = [
  {
    id: '1',
    title: 'Quick Reference Guide',
    type: 'PDF',
    size: '2.3 MB',
    description: 'Essential information for daily operations'
  },
  {
    id: '2',
    title: 'Billing Codes Reference',
    type: 'PDF',
    size: '1.8 MB',
    description: 'Complete list of billing and error codes'
  },
  {
    id: '3',
    title: 'Escalation Contact List',
    type: 'PDF',
    size: '0.5 MB',
    description: 'Emergency contacts and escalation procedures'
  },
  {
    id: '4',
    title: 'Script Templates',
    type: 'DOC',
    size: '1.2 MB',
    description: 'Collection of call scripts and templates'
  }
];

export function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = helpArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      billing: 'bg-blue-100 text-blue-800',
      technical: 'bg-green-100 text-green-800',
      retention: 'bg-purple-100 text-purple-800',
      procedures: 'bg-orange-100 text-orange-800',
      basics: 'bg-gray-100 text-gray-800',
      advanced: 'bg-red-100 text-red-800'
    } as const;
    
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`size-3 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="text-muted-foreground">
          Find guides, documentation, and resources to help you provide excellent customer service.
        </p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search help articles, guides, and FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="articles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="articles">Knowledge Base</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="training">Training Videos</TabsTrigger>
          <TabsTrigger value="downloads">Downloads</TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge className={getCategoryColor(article.category)}>
                            {article.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {renderStars(article.rating)}
                            <span className="text-sm text-muted-foreground ml-1">
                              ({article.rating})
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="size-3" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3 line-clamp-2">{article.content}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Users className="size-3" />
                          {article.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3" />
                          Updated {article.lastUpdated}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="size-4" />
                    Quick Help
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="size-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Headphones className="size-4 mr-2" />
                    Schedule Training
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="size-4 mr-2" />
                    Submit Feedback
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {helpArticles.slice(0, 3).map((article) => (
                    <div key={article.id} className="p-2 border rounded hover:bg-muted/50 cursor-pointer">
                      <p className="font-medium text-sm">{article.title}</p>
                      <p className="text-xs text-muted-foreground">{article.views} views</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Common questions and answers for customer service representatives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingVideos.map((video) => (
              <Card key={video.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Video className="size-4" />
                        {video.title}
                      </CardTitle>
                      <Badge className={getCategoryColor(video.category)}>
                        {video.category}
                      </Badge>
                    </div>
                    <Badge variant="outline">{video.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{video.description}</p>
                  <Button className="w-full">
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="downloads" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((download) => (
              <Card key={download.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="size-4" />
                        {download.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{download.type}</Badge>
                        <Badge variant="outline">{download.size}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{download.description}</p>
                  <Button variant="outline" className="w-full">
                    <Download className="size-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
