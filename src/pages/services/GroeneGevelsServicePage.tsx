import React, { useState } from 'react';
import CtaSection from '../../components/CtaSection';

const GroeneGevelsServicePage = () => {
  const [activeTab, setActiveTab] = useState('installatiedraden');
  
  const tabsContent = {
    installatiedraden: {
      title: 'Plantenstaven',
      description: 'Het SGW-draadsysteem van Seduna bestaat uit onderdelen van hoogwaardig roestvrij staal om de gevel te beschermen tegen de krachten die klimmende en slingervormende planten uitoefenen op het draadsysteem. Met dit draadsysteem ontstaat een veilige groene gevel met een lange levensduur. Het draadsysteem is een flexibele oplossing die kan worden aangepast aan het uiterlijk en de vorm van de gevel.'
    },
    plantenpanelen: {
      title: 'Planten Panelen',
      description: 'Professionele installatiedraden voor groene gevels - inhoud wordt binnenkort toegevoegd.'
    }
  };

  const tabs = [
    { id: 'installatiedraden', label: 'Plantenstaven' },
    { id: 'plantenpanelen', label: 'Planten Panelen' }
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
              {activeTab === 'installatiedraden' ? (
                // Plantendraad content
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
                    {currentContent.title}
                  </h2>
                  
                  {/* Enhanced Description with Visual Elements */}
                  <div className="text-center mb-12">
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
                          <h3 className="text-xl font-bold text-green-800">Hoogwaardig SGW-draadsysteem</h3>
                        </div>
                        
                        <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                          Het <span className="text-green-700 font-semibold">SGW-draadsysteem van Seduna</span> bestaat uit onderdelen van hoogwaardig roestvrij staal om de gevel te beschermen tegen de krachten die klimmende en slingervormende planten uitoefenen op het draadsysteem.
                        </p>
                        <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium mt-4">
                          Met dit draadsysteem ontstaat een veilige groene gevel met een lange levensduur. Het draadsysteem is een flexibele oplossing die kan worden aangepast aan het uiterlijk en de vorm van de gevel.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-blue-700">Roestvrij Staal</span>
                            </div>
                            <p className="text-sm text-secondary-600">Hoogwaardige materialen voor lange levensduur</p>
                          </div>
                          
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-green-700">Flexibele Oplossing</span>
                            </div>
                            <p className="text-sm text-secondary-600">Aanpasbaar aan elke gevelvorm en -stijl</p>
                          </div>
                          
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-green-700">Veilige Gevel</span>
                            </div>
                            <p className="text-sm text-secondary-600">Bescherming tegen plantenkrachten</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* New section with image and benefits list */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="flex justify-center">
                      <img 
                        src="https://i.imgur.com/7E5H3AT.png" 
                        alt="Plantenstaven systeem" 
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
                              Robuuste constructie met een lange levensduur
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <p className="text-secondary-700 text-sm">
                              Klimplanten krijgen een stevige grip rond de draad
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <p className="text-secondary-700 text-sm">
                              Minder belasting op de gevel vergeleken met kassetsystemen dankzij minimaal eigen gewicht
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <p className="text-secondary-700 text-sm">
                              Discreet, de aandacht ligt op de planten en niet op de bevestiging
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <p className="text-secondary-700 text-sm">
                              Esthetisch aantrekkelijk, ook tijdens de koude maanden wanneer de planten hun bladeren verliezen
                            </p>
                          </div>
                        </div>
                    </div>
                  </div>
                  
                  {/* Second section with reversed layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="bg-green-50 rounded-lg p-6">
                        <h3 className="text-xl font-display font-bold text-green-700 mb-4">
                          VOORDELEN VAN GEVELKLIMPLANTEN
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <p className="text-secondary-700 text-sm">
                              Vermindert opname van zonnewarmte tot 90% en temperatuurschommelingen tot 50%
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <p className="text-secondary-700 text-sm">
                              Beschermt gevels tegen vocht, vorst en UV-straling
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <p className="text-secondary-700 text-sm">
                              Werkt als winddemper en vermindert windtunnels in stedelijke gebieden
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <p className="text-secondary-700 text-sm">
                              Helpt organische verontreinigingen zoals formaldehyde en koolmonoxide te verminderen (Hedera Helix is zeer effectief)
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <p className="text-secondary-700 text-sm">
                              Biedt uitstekende graffiti-bescherming
                            </p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <p className="text-secondary-700 text-sm">
                              Eenvoudig aan te passen met losse eindterminals
                            </p>
                          </div>
                        </div>
                      </div>
                    
                    <div className="flex justify-center">
                      <img 
                        src="https://i.imgur.com/0mDQ1ih.png" 
                        alt="Energievoordelen plantenstaven" 
                        className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                // Planten Panelen content
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
                    {currentContent.title}
                  </h2>
                  
                  <div className="text-center mb-12">
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
                          <h3 className="text-xl font-bold text-green-800">Plantenafscherming</h3>
                        </div>
                        
                        <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                          Seduna Green Screens worden gebruikt om ruimtes te creëren in tuinen en binnenplaatsen. De plantenafschermingen nemen minimale ruimte in beslag en spreiden zich niet zoals een gewone haag. Met Seduna Green Screens heeft u vanaf dag één een groene afscheiding.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-blue-700">Minimale Ruimte</span>
                            </div>
                            <p className="text-sm text-secondary-600">Nemen weinig ruimte in beslag in de tuin</p>
                          </div>
                          
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-green-700">Directe Groene Afscheiding</span>
                            </div>
                            <p className="text-sm text-secondary-600">Vanaf dag één een groene afscheiding</p>
                          </div>
                          
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-green-700">Geen Uitbreiding</span>
                            </div>
                            <p className="text-sm text-secondary-600">Spreiden zich niet zoals gewone hagen</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* New Table Section for Planten Panelen */}
                  <div className="mt-16">
                    <div className="bg-gradient-to-r from-green-50 via-green-100 to-green-50 rounded-2xl p-8 shadow-lg border border-green-100/50 backdrop-blur-sm">
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-display font-bold text-green-800 mb-4">GPP 25 – Green Plant Panels</h2>
                        
                        <div className="space-y-4 mb-8">
                          <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                            <span className="text-green-700 font-semibold">GPP 25</span> wordt gebruikt als modulaire plantendrager bij gevelconstructies.
                          </p>
                          <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                            GPP 25 heeft een <span className="text-green-700 font-semibold">uitstekende plantenondersteuning</span> in verhouding tot zijn gewicht en installatiegemak.
                          </p>
                        </div>
                      </div>
                      
                      {/* Properties and Benefits Table with Enhanced Design */}
                      <div className="bg-white/80 rounded-xl shadow-lg overflow-hidden border border-gray-200/50">
                        <div className="grid grid-cols-2">
                          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6">
                            <div className="flex items-center space-x-3">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                              </svg>
                              <h3 className="text-xl font-bold">Eigenschappen</h3>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6">
                            <div className="flex items-center space-x-3">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              <h3 className="text-xl font-bold">Voordelen</h3>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 divide-x divide-gray-200">
                          <div className="p-5 border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">Lichtgewicht constructie, 45 kg/m²</p>
                            </div>
                          </div>
                          <div className="p-5 border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">Eenvoudige montage aan bestaande gevels.</p>
                            </div>
                          </div>
                          
                          <div className="p-5 border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">Modulaire opbouw. Flexibele configuratie</p>
                            </div>
                          </div>
                          <div className="p-5 border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">Uitstekende ventilatie en drainage eigenschappen.</p>
                            </div>
                          </div>
                          
                          <div className="p-5 border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">Wordt geleverd in panelen 800 x 600 x 25 mm</p>
                            </div>
                          </div>
                          <div className="p-5 border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">Snelle installatie en onderhoudsvriendelijk.</p>
                            </div>
                          </div>
                          
                          <div className="p-5 border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">Geïntegreerd irrigatiesysteem</p>
                            </div>
                          </div>
                          <div className="p-5 border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">Vermindert onderhoudstijd en waterverbruik.</p>
                            </div>
                          </div>
                          
                          <div className="p-5 border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">Duurzame kunststof constructie</p>
                            </div>
                          </div>
                          <div className="p-5 border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">UV-bestendig en weerbestendig materiaal.</p>
                            </div>
                          </div>
                          
                          <div className="p-5 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">Plantencapaciteit 12 planten/m²</p>
                            </div>
                          </div>
                          <div className="p-5 hover:bg-green-50/50 transition-colors duration-200">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-secondary-700 font-medium">Optimale plantendichtheid voor groene gevels.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
      
      <CtaSection />
    </div>
  );
};

export default GroeneGevelsServicePage;