import Settings from '@/components/ui/settings';

export default function SettingsPage() {
  return <Settings />;
}
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Monitor,
  Moon,
  Sun,
  Volume2,
  Mail,
  MessageSquare,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';

export function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    // Profile settings
    name: 'CSE Agent',
    email: 'agent@infintra.com',
    phone: '+1 (555) 123-4567',
    department: 'Customer Service',
    
    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    desktopNotifications: true,
    soundEnabled: true,
    
    // Appearance
    theme: 'light',
    language: 'en',
    timezone: 'America/New_York',
    
    // Privacy & Security
    twoFactorAuth: false,
    sessionTimeout: '30',
    loginAlerts: true,
    
    // Dashboard preferences
    defaultPage: 'dashboard',
    itemsPerPage: '25',
    autoRefresh: true,
    refreshInterval: '30'
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Customize your dashboard preferences and account settings.
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="size-4" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Update your personal information and contact details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={settings.name}
                    onChange={(e) => handleSettingChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={settings.email}
                    onChange={(e) => handleSettingChange('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={settings.phone}
                    onChange={(e) => handleSettingChange('phone', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select 
                    value={settings.department} 
                    onValueChange={(value) => handleSettingChange('department', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Customer Service">Customer Service</SelectItem>
                      <SelectItem value="Technical Support">Technical Support</SelectItem>
                      <SelectItem value="Billing">Billing</SelectItem>
                      <SelectItem value="Sales">Sales</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio (Optional)</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  rows={3}
                />
              </div>
              <Button>Save Profile Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="size-4" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose how you want to be notified about important events
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Mail className="size-4 text-muted-foreground" />
                      <span className="font-medium">Email Notifications</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="size-4 text-muted-foreground" />
                      <span className="font-medium">SMS Notifications</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Receive important alerts via SMS
                    </p>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => handleSettingChange('smsNotifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Monitor className="size-4 text-muted-foreground" />
                      <span className="font-medium">Desktop Notifications</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Show browser notifications
                    </p>
                  </div>
                  <Switch
                    checked={settings.desktopNotifications}
                    onCheckedChange={(checked) => handleSettingChange('desktopNotifications', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Volume2 className="size-4 text-muted-foreground" />
                      <span className="font-medium">Sound Notifications</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Play sound for new notifications
                    </p>
                  </div>
                  <Switch
                    checked={settings.soundEnabled}
                    onCheckedChange={(checked) => handleSettingChange('soundEnabled', checked)}
                  />
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">Notification Types</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">New support tickets</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Churn alerts</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">System updates</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Weekly reports</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="size-4" />
                Appearance Settings
              </CardTitle>
              <CardDescription>
                Customize the look and feel of your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <div className="flex gap-4">
                    <div 
                      className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 ${
                        settings.theme === 'light' ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => handleSettingChange('theme', 'light')}
                    >
                      <Sun className="size-4" />
                      <span>Light</span>
                    </div>
                    <div 
                      className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 ${
                        settings.theme === 'dark' ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => handleSettingChange('theme', 'dark')}
                    >
                      <Moon className="size-4" />
                      <span>Dark</span>
                    </div>
                    <div 
                      className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 ${
                        settings.theme === 'system' ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => handleSettingChange('theme', 'system')}
                    >
                      <Monitor className="size-4" />
                      <span>System</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select 
                      value={settings.language} 
                      onValueChange={(value) => handleSettingChange('language', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select 
                      value={settings.timezone} 
                      onValueChange={(value) => handleSettingChange('timezone', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/New_York">Eastern Time</SelectItem>
                        <SelectItem value="America/Chicago">Central Time</SelectItem>
                        <SelectItem value="America/Denver">Mountain Time</SelectItem>
                        <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="size-4" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage your account security and privacy settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <div className="relative">
                    <Input
                      id="current-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter current password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Enter new password"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm new password"
                  />
                </div>

                <Button>Update Password</Button>
              </div>

              <div className="pt-4 border-t space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Lock className="size-4 text-muted-foreground" />
                      <span className="font-medium">Two-Factor Authentication</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => handleSettingChange('twoFactorAuth', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-medium">Login Alerts</span>
                    <p className="text-sm text-muted-foreground">
                      Get notified of new login attempts
                    </p>
                  </div>
                  <Switch
                    checked={settings.loginAlerts}
                    onCheckedChange={(checked) => handleSettingChange('loginAlerts', checked)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Select 
                    value={settings.sessionTimeout} 
                    onValueChange={(value) => handleSettingChange('sessionTimeout', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="size-4" />
                Dashboard Preferences
              </CardTitle>
              <CardDescription>
                Customize your dashboard behavior and default settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="default-page">Default Page</Label>
                  <Select 
                    value={settings.defaultPage} 
                    onValueChange={(value) => handleSettingChange('defaultPage', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dashboard">Dashboard</SelectItem>
                      <SelectItem value="customer-lookup">Customer Lookup</SelectItem>
                      <SelectItem value="analytics">Analytics</SelectItem>
                      <SelectItem value="chat-templates">Chat Templates</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="items-per-page">Items Per Page</Label>
                  <Select 
                    value={settings.itemsPerPage} 
                    onValueChange={(value) => handleSettingChange('itemsPerPage', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-medium">Auto-refresh Data</span>
                    <p className="text-sm text-muted-foreground">
                      Automatically refresh dashboard data
                    </p>
                  </div>
                  <Switch
                    checked={settings.autoRefresh}
                    onCheckedChange={(checked) => handleSettingChange('autoRefresh', checked)}
                  />
                </div>

                {settings.autoRefresh && (
                  <div className="space-y-2">
                    <Label htmlFor="refresh-interval">Refresh Interval (seconds)</Label>
                    <Select 
                      value={settings.refreshInterval} 
                      onValueChange={(value) => handleSettingChange('refreshInterval', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 seconds</SelectItem>
                        <SelectItem value="30">30 seconds</SelectItem>
                        <SelectItem value="60">1 minute</SelectItem>
                        <SelectItem value="300">5 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t">
                <div className="flex gap-2">
                  <Button>Save Preferences</Button>
                  <Button variant="outline">Reset to Defaults</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}