import React, { useState } from 'react';
import CtaSection from '../../components/CtaSection';

const RooftopServicePage = () => {
  const [activeTab, setActiveTab] = useState('sedumtak');
  
  const tabsContent = {
    sedumtak: {
      title: 'Sedumtak',
      description: 'Sedunas sedumtakken zijn goed getest en uitgebreid gedocumenteerd. Onze matten worden gekweekt in Zuid-Zweden. De soortenkeuze en opbouw zijn aangepast om een lange levensduur te garanderen in ons noordelijke klimaat. Onze opbouw bevat 10 verschillende plantensoorten om een goede dekking te verzekeren in de meeste klimaatzones.'
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
                  {/* Centered Description */}
                  <div className="text-center mb-12">
                    <p className="text-lg text-secondary-600 leading-relaxed max-w-4xl mx-auto">
                      Sedunas sedumtakken zijn goed getest en uitgebreid gedocumenteerd. Onze matten worden gekweekt in Zuid-Zweden. De soortenkeuze en opbouw zijn aangepast om een lange levensduur te garanderen in ons noordelijke klimaat. Onze opbouw bevat 10 verschillende plantensoorten om een goede dekking te verzekeren in de meeste klimaatzones.
                    </p>
                  </div>
                  
                  {/* Image and VOORDELEN in one line */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="flex justify-center">
                      <img 
                        src="https://i.imgur.com/kFwyAT0.png" 
                        alt="Sedumtak systeem" 
                        className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
                      />
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="text-xl font-display font-bold text-green-700 mb-4">
                        VOORDELEN
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm">
                            Slaat regenwater op en vermindert de afvoer naar regenwatersystemen
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm">
                            Dempt de maximale waterstroom met 30% tot 60% gedurende de eerste 10-20 minuten
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm">
                            Bestand tegen windopwaartse druk
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm">
                            Dempt geluid in het frequentiebereik van 500-4000 Hz
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm">
                            Bestrijdt hitte-eilanden in onze steden
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Reversed layout - Description on left, Image on right */}
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <div className="bg-green-50 rounded-lg p-6">
                       <h3 className="text-xl font-display font-bold text-green-700 mb-4">
                         ENERGIEVOORDELEN
                       </h3>
                       <div className="space-y-3">
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Vermindert de koelbehoefte tot 25% in vergelijking met conventionele daken
                           </p>
                         </div>
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Kan de binnentemperatuur in de zomermaanden met 3-4 °C verlagen
                           </p>
                         </div>
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             In de wintermaanden beperkt een groendak de warmtestroom door het dak en fungeert het als extra isolatie
                           </p>
                         </div>
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Groene daken verminderen de concentratie van de vier belangrijkste verontreinigende stoffen: O3, SO2, PM en NOX
                           </p>
                         </div>
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Geeft hogere scores in milieucertificeringsprogramma's zoals LEED en BREEAM
                           </p>
                         </div>
                       </div>
                     </div>
                    
                    <div className="flex justify-center">
                      <img 
                        src="https://i.imgur.com/43UAd2i.png" 
                        alt="Energievoordelen groendak" 
                        className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
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