import ChatTemplates from '@/components/ui/chat-templates';

export default function TemplatesPage() {
  return <ChatTemplates />;
}
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  MessageSquare, 
  Search, 
  Plus, 
  Copy, 
  Edit, 
  Trash2,
  Tag,
  Clock,
  Star,
  Filter
} from 'lucide-react';

interface ChatTemplate {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  usage: number;
  lastUsed: string;
  rating: number;
}

const chatTemplates: ChatTemplate[] = [
  {
    id: '1',
    title: 'Welcome Greeting',
    content: 'Hello! Thank you for contacting our customer service. My name is {AGENT_NAME} and I\'ll be happy to assist you today. How can I help you?',
    category: 'greeting',
    tags: ['welcome', 'introduction'],
    usage: 145,
    lastUsed: '2024-01-20',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Billing Inquiry Response',
    content: 'I understand you have a question about your billing. Let me pull up your account details to better assist you. Can you please confirm your account number or the phone number associated with your account?',
    category: 'billing',
    tags: ['billing', 'account', 'verification'],
    usage: 98,
    lastUsed: '2024-01-19',
    rating: 4.6
  },
  {
    id: '3',
    title: 'Technical Issue Acknowledgment',
    content: 'I\'m sorry to hear you\'re experiencing technical difficulties. I completely understand how frustrating this must be. Let me help you troubleshoot this issue step by step.',
    category: 'technical',
    tags: ['technical', 'troubleshooting', 'empathy'],
    usage: 76,
    lastUsed: '2024-01-20',
    rating: 4.7
  },
  {
    id: '4',
    title: 'Service Cancellation Retention',
    content: 'I understand you\'re considering canceling your service. Before we proceed, I\'d love to see if there\'s anything we can do to address your concerns. May I ask what\'s prompting this decision?',
    category: 'retention',
    tags: ['cancellation', 'retention', 'feedback'],
    usage: 54,
    lastUsed: '2024-01-18',
    rating: 4.9
  },
  {
    id: '5',
    title: 'Payment Failure Follow-up',
    content: 'We noticed there was an issue processing your recent payment. This could be due to expired card information or insufficient funds. Would you like me to help you update your payment method?',
    category: 'billing',
    tags: ['payment', 'billing', 'resolution'],
    usage: 42,
    lastUsed: '2024-01-19',
    rating: 4.5
  },
  {
    id: '6',
    title: 'Escalation to Supervisor',
    content: 'I understand your frustration and I want to ensure you receive the best possible service. I\'m going to connect you with my supervisor who will be able to provide additional assistance. Please hold for just a moment.',
    category: 'escalation',
    tags: ['escalation', 'supervisor', 'service'],
    usage: 23,
    lastUsed: '2024-01-17',
    rating: 4.4
  }
];

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'greeting', label: 'Greetings' },
  { value: 'billing', label: 'Billing' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'retention', label: 'Customer Retention' },
  { value: 'escalation', label: 'Escalations' }
];

export function ChatTemplates() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState<ChatTemplate | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const filteredTemplates = chatTemplates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryBadge = (category: string) => {
    const colors = {
      greeting: 'bg-blue-100 text-blue-800',
      billing: 'bg-green-100 text-green-800',
      technical: 'bg-orange-100 text-orange-800',
      retention: 'bg-purple-100 text-purple-800',
      escalation: 'bg-red-100 text-red-800'
    } as const;
    
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    // You could add a toast notification here
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
        <h1 className="text-3xl font-bold">Chat Templates</h1>
        <p className="text-muted-foreground">
          Pre-written responses and templates to improve customer service efficiency.
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search templates by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="size-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button>
                <Plus className="size-4 mr-2" />
                New Template
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Templates List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredTemplates.map((template) => (
            <Card 
              key={template.id} 
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedTemplate?.id === template.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedTemplate(template)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{template.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryBadge(template.category)}>
                        {template.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {renderStars(template.rating)}
                        <span className="text-sm text-muted-foreground ml-1">
                          ({template.rating})
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline" onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(template.content);
                    }}>
                      <Copy className="size-3" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTemplate(template);
                      setIsEditing(true);
                    }}>
                      <Edit className="size-3" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {template.content}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="size-3" />
                      {template.usage} uses
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      Last used {template.lastUsed}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {template.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Template Preview/Editor */}
        <div className="space-y-4">
          {selectedTemplate ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="size-4" />
                    {isEditing ? 'Edit Template' : 'Template Preview'}
                  </CardTitle>
                  {!isEditing && (
                    <Button size="sm" onClick={() => setIsEditing(true)}>
                      <Edit className="size-3 mr-1" />
                      Edit
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Title</label>
                      <Input defaultValue={selectedTemplate.title} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <Select defaultValue={selectedTemplate.category}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.slice(1).map(category => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Content</label>
                      <Textarea 
                        defaultValue={selectedTemplate.content} 
                        rows={6}
                        placeholder="Enter template content..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tags</label>
                      <Input 
                        defaultValue={selectedTemplate.tags.join(', ')} 
                        placeholder="Enter tags separated by commas"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">Save Changes</Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-medium">{selectedTemplate.title}</h3>
                        <Badge className={getCategoryBadge(selectedTemplate.category)}>
                          {selectedTemplate.category}
                        </Badge>
                      </div>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-sm">{selectedTemplate.content}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Usage Count:</span>
                          <span className="font-medium">{selectedTemplate.usage}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Rating:</span>
                          <div className="flex items-center gap-1">
                            {renderStars(selectedTemplate.rating)}
                            <span className="ml-1">{selectedTemplate.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Last Used:</span>
                          <span>{selectedTemplate.lastUsed}</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm font-medium">Tags:</label>
                        <div className="flex flex-wrap gap-1">
                          {selectedTemplate.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              <Tag className="size-2 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1" 
                          onClick={() => copyToClipboard(selectedTemplate.content)}
                        >
                          <Copy className="size-3 mr-2" />
                          Copy Template
                        </Button>
                        <Button variant="outline" size="sm">
                          <Star className="size-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="size-3" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center text-muted-foreground">
                  <MessageSquare className="size-12 mx-auto mb-2 opacity-50" />
                  <p>Select a template to view details</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Template Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{chatTemplates.length}</div>
                <div className="text-sm text-muted-foreground">Total Templates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {chatTemplates.reduce((sum, t) => sum + t.usage, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Total Uses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {(chatTemplates.reduce((sum, t) => sum + t.rating, 0) / chatTemplates.length).toFixed(1)}
                </div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}