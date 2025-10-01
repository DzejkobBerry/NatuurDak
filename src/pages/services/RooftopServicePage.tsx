import React, { useState } from 'react';
import CtaSection from '../../components/CtaSection';

const RooftopServicePage = () => {
  const [activeTab, setActiveTab] = useState('sedumtak');
  
  const tabsContent = {
    sedumtak: {
      title: 'Sedumdak',
      description: 'Sedunas sedumdaken zijn professionele sedum matten gekweekt in Zuid-Zweden met 10 verschillende plantensoorten. Deze matten zijn speciaal afgestemd op ons Noordse klimaat voor optimale groei en lange levensduur, met gegarandeerde goede bedekking in de meeste klimaatzones dankzij zorgvuldige soortkeuze.'
    },
    droge_weiden: {
      title: 'Droge weiden op daken',
      description: 'Droge weiden op daken bieden een natuurlijke en duurzame oplossing voor groene dakbedekking. Deze systemen maken gebruik van inheemse plantensoorten die goed bestand zijn tegen droogte en extreme weersomstandigheden, waardoor ze ideaal zijn voor extensieve groene daken.'
    },
    dakframe: {
      title: 'Dakframe',
      description: 'Professionele dakframe systemen vormen de basis voor elke succesvolle groene dakinstallatie. Onze dakframes zijn ontworpen om optimale drainage, structurele integriteit en lange levensduur te garanderen, geschikt voor verschillende daktypen en belastingen.'
    },
    accessoires: {
      title: 'Accessoires & Aanvullingen',
      description: 'Complete accessoires en aanvullingen voor groene daken, inclusief drainage systemen, beschermingslagen, irrigatie oplossingen en onderhoudsproducten. Deze aanvullingen zorgen voor optimale prestaties en lange levensduur van uw groene dak.'
    }
  };

  const tabs = [
    { id: 'sedumtak', label: 'Sedumtak' },
    { id: 'droge_weiden', label: 'Droge weiden op daken' },
    { id: 'dakframe', label: 'Dakframe' },
    { id: 'accessoires', label: 'Accessoires & Aanvullingen' }
  ];

  const currentContent = tabsContent[activeTab];
   
   return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="/images/team.jpg" alt="Kunstgras op het dak" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Groene Daken
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transformeer uw dak in een prachtige groene oase met onze
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
              
              {/* Special layout for Sedumtak */}
              {activeTab === 'sedumtak' ? (
                <div>
                  {/* Description and Image Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="flex flex-col justify-center">
                      <p className="text-lg text-secondary-600 leading-relaxed">
                        {currentContent.description}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img 
                        src="/images/team.jpg" 
                        alt="Sedumdak" 
                        className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Default layout for other tabs */
                <div className="text-center">
                  <p className="text-lg text-secondary-600 leading-relaxed max-w-4xl mx-auto mb-8">
                    {currentContent.description}
                  </p>
                  <div className="flex justify-center">
                    <img 
                      src="/images/team.jpg" 
                      alt={currentContent.title} 
                      className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="text-center">
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg">
              Plan Gratis Consultatie
            </a>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default RooftopServicePage;