import React, { useState } from 'react';
import CtaSection from '../../components/CtaSection';

const GroeneGevelsServicePage = () => {
  const [activeTab, setActiveTab] = useState('installatiedraden');
  
  const tabsContent = {
    installatiedraden: {
      title: 'Installatiedraden',
      description: 'Professionele installatiedraden voor groene gevels - inhoud wordt binnenkort toegevoegd.'
    },
    plantenpanelen: {
      title: 'Plantenpanelen',
      description: 'Innovatieve plantenpanelen voor verticale tuinen - inhoud wordt binnenkort toegevoegd.'
    }
  };

  const tabs = [
    { id: 'installatiedraden', label: 'Installatiedraden' },
    { id: 'plantenpanelen', label: 'Plantenpanelen' }
  ];

  const currentContent = tabsContent[activeTab];
   
  return (
    <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="/images/team.jpg" alt="Groene Gevels" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Groene Gevels
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transformeer uw gevels in prachtige groene wanden met onze
            gespecialiseerde oplossingen
          </p>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mini Navigation Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
                {currentContent.title}
              </h2>
              
              {/* Placeholder content for both tabs */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-50 via-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border border-green-100/50 backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-green-800">Binnenkort Beschikbaar</h3>
                    </div>
                    
                    <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto">
                      {currentContent.description}
                    </p>
                    
                    <div className="mt-8 p-6 bg-white/70 rounded-xl border border-green-200">
                      <p className="text-secondary-600 italic">
                        Deze sectie wordt momenteel ontwikkeld. Neem contact met ons op voor meer informatie over onze {currentContent.title.toLowerCase()} oplossingen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CtaSection />
    </div>
  );
};

export default GroeneGevelsServicePage;