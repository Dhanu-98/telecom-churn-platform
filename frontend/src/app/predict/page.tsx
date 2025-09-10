import ChurnPrediction from '@/components/ui/churn-prediction';

export default function PredictPage() {
  return <ChurnPrediction />;
}
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { AlertTriangle, TrendingDown, Users, Target, CheckCircle, XCircle } from 'lucide-react';

interface ChurnPredictionResult {
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  factors: Array<{
    factor: string;
    impact: number;
    description: string;
  }>;
  recommendations: string[];
}

const mockPredictionResult: ChurnPredictionResult = {
  riskScore: 75,
  riskLevel: 'high',
  factors: [
    {
      factor: 'Support Tickets',
      impact: 85,
      description: 'Multiple unresolved support tickets in the last month'
    },
    {
      factor: 'Payment Issues',
      impact: 70,
      description: 'Recent payment failures and late payments'
    },
    {
      factor: 'Usage Decline',
      impact: 60,
      description: '40% decrease in service usage over 3 months'
    },
    {
      factor: 'Competitor Activity',
      impact: 45,
      description: 'High competitor marketing in customer area'
    }
  ],
  recommendations: [
    'Contact customer within 24 hours to address support concerns',
    'Offer payment plan assistance or billing adjustment',
    'Provide personalized retention offer (e.g., 20% discount for 6 months)',
    'Schedule technical support call to resolve service issues',
    'Assign dedicated account manager for proactive support'
  ]
};

export function ChurnPrediction() {
  const [formData, setFormData] = useState({
    customerId: '',
    accountTenure: '',
    monthlySpend: '',
    supportTickets: '',
    paymentIssues: '',
    usagePattern: '',
    planType: ''
  });
  const [prediction, setPrediction] = useState<ChurnPredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePredict = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPrediction(mockPredictionResult);
      setIsLoading(false);
    }, 2000);
  };

  const getRiskBadge = (level: string) => {
    const variants = {
      low: 'default',
      medium: 'secondary',
      high: 'destructive'
    } as const;
    
    return (
      <Badge variant={variants[level as keyof typeof variants] || 'secondary'}>
        {level.toUpperCase()} RISK
      </Badge>
    );
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Churn Prediction</h1>
        <p className="text-muted-foreground">
          Analyze customer data to predict churn risk and get retention recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Prediction Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="size-5" />
              Customer Analysis
            </CardTitle>
            <CardDescription>
              Enter customer information to predict churn probability
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="customerId">Customer ID</Label>
                <Input
                  id="customerId"
                  placeholder="e.g., CUST-001"
                  value={formData.customerId}
                  onChange={(e) => handleInputChange('customerId', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="accountTenure">Account Tenure (months)</Label>
                <Input
                  id="accountTenure"
                  type="number"
                  placeholder="e.g., 24"
                  value={formData.accountTenure}
                  onChange={(e) => handleInputChange('accountTenure', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlySpend">Monthly Spend ($)</Label>
                <Input
                  id="monthlySpend"
                  type="number"
                  placeholder="e.g., 89.99"
                  value={formData.monthlySpend}
                  onChange={(e) => handleInputChange('monthlySpend', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="supportTickets">Support Tickets (last 3 months)</Label>
                <Input
                  id="supportTickets"
                  type="number"
                  placeholder="e.g., 3"
                  value={formData.supportTickets}
                  onChange={(e) => handleInputChange('supportTickets', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentIssues">Payment Issues (last 6 months)</Label>
                <Input
                  id="paymentIssues"
                  type="number"
                  placeholder="e.g., 1"
                  value={formData.paymentIssues}
                  onChange={(e) => handleInputChange('paymentIssues', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="usagePattern">Usage Pattern</Label>
                <Select onValueChange={(value) => handleInputChange('usagePattern', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select usage pattern" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="increasing">Increasing</SelectItem>
                    <SelectItem value="stable">Stable</SelectItem>
                    <SelectItem value="declining">Declining</SelectItem>
                    <SelectItem value="irregular">Irregular</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="planType">Plan Type</Label>
                <Select onValueChange={(value) => handleInputChange('planType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select plan type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handlePredict} 
              disabled={isLoading || !formData.customerId}
              className="w-full"
              size="lg"
            >
              {isLoading ? 'Analyzing...' : 'Predict Churn Risk'}
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="size-4" />
                Churn Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">3.2%</div>
                <div className="text-sm text-muted-foreground">Monthly Churn Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">856</div>
                <div className="text-sm text-muted-foreground">High Risk Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">89%</div>
                <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="size-4" />
                Retention Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Monthly Target</span>
                  <span>85%</span>
                </div>
                <Progress value={78} className="h-2" />
                <div className="text-xs text-muted-foreground">78% achieved</div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Yearly Target</span>
                  <span>90%</span>
                </div>
                <Progress value={82} className="h-2" />
                <div className="text-xs text-muted-foreground">82% achieved</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Prediction Results */}
      {prediction && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="size-5" />
                    Churn Risk Assessment
                  </CardTitle>
                  <CardDescription>Analysis results for customer {formData.customerId}</CardDescription>
                </div>
                {getRiskBadge(prediction.riskLevel)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className={`text-4xl font-bold ${getRiskColor(prediction.riskLevel)}`}>
                    {prediction.riskScore}%
                  </div>
                  <div className="text-muted-foreground">Churn Probability</div>
                </div>
                <Progress value={prediction.riskScore} className="h-3" />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Risk Factors */}
            <Card>
              <CardHeader>
                <CardTitle>Risk Factors</CardTitle>
                <CardDescription>Key factors contributing to churn risk</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prediction.factors.map((factor, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{factor.factor}</span>
                        <span className="text-sm text-muted-foreground">{factor.impact}%</span>
                      </div>
                      <Progress value={factor.impact} className="h-2" />
                      <p className="text-xs text-muted-foreground">{factor.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Retention Recommendations</CardTitle>
                <CardDescription>Suggested actions to reduce churn risk</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {prediction.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <CheckCircle className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{recommendation}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button className="w-full">
                    Implement Retention Strategy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
