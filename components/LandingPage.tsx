// components/LandingPage.tsx
import React from 'react';

interface LandingPageProps {
  onNavigateToAuth: () => void;
}

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <p className="mt-2 text-slate-600">{description}</p>
    </div>
);

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToAuth }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">Church<span className="text-blue-600">Desk</span></h1>
          <button onClick={onNavigateToAuth} className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors">
            Login / Register
          </button>
        </div>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="text-center py-20 px-4 bg-white">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Streamline Your Church's Finances</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">The all-in-one platform for managing requisitions, approvals, and payments with transparency and ease. Get back to focusing on ministry.</p>
          <div className="mt-8">
            <button onClick={onNavigateToAuth} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform hover:scale-105">
              Get Started for Free
            </button>
            <p className="mt-3 text-sm text-slate-500">90-day free trial, no credit card required.</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Why Choose ChurchDesk?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                title="Structured Workflows"
                description="Create requests that flow through a clear, multi-step approval process from department heads to finance."
              />
              <FeatureCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                title="Financial Tracking"
                description="Keep a detailed record of every payment, disbursement, and final receipt, ensuring full accountability."
              />
              <FeatureCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                title="Insightful Reports"
                description="Generate reports and view dashboards to understand spending patterns by department, section, or category."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} ChurchDesk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
