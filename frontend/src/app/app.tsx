import React, { useState } from 'react';
import { DashboardSidebar } from './components/dashboard-sidebar';
import { DashboardHome } from './components/dashboard-home';
import { CustomerLookup } from './components/customer-lookup';
import { ChurnPrediction } from './components/churn-prediction';
import { Analytics } from './components/analytics';
import { ChatTemplates } from './components/chat-templates';
import { HelpCenter } from './components/help-center';
import { Settings } from './components/settings';
import { Contact } from './components/contact';
import { About } from './components/about';
import { SidebarProvider } from './components/ui/sidebar';

export type PageType = 'dashboard' | 'customer-lookup' | 'churn-prediction' | 'analytics' | 'chat-templates' | 'help-center' | 'settings' | 'contact' | 'about';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardHome />;
      case 'customer-lookup':
        return <CustomerLookup />;
      case 'churn-prediction':
        return <ChurnPrediction />;
      case 'analytics':
        return <Analytics />;
      case 'chat-templates':
        return <ChatTemplates />;
      case 'help-center':
        return <HelpCenter />;
      case 'settings':
        return <Settings />;
      case 'contact':
        return <Contact />;
      case 'about':
        return <About />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </SidebarProvider>
  );
}