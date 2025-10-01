import React, { useState } from 'react';
import CtaSection from '../../components/CtaSection';

const GroeneLandbedekkingServicePage = () => {
  const [activeTab, setActiveTab] = useState('sedum');
  
  const tabsContent = {
    sedum: {
      title: 'Sedum op de grond',
      description: 'Sedum op de grond biedt een onderhoudsarme en duurzame oplossing voor groene landbedekkingen. Deze vetplanten zijn perfect geschikt voor droge omstandigheden en creëren een prachtig tapijt van groen dat het hele jaar door mooi blijft.'
    },
    weide: {
      title: '"Weide" matten',
      description: 'Weide matten bieden een natuurlijke graslanduitstraling met een mix van grassen en wilde bloemen. Deze matten creëren een biodiverse omgeving die insecten en kleine dieren aantrekt.'
    },
    waterplanten: {
      title: 'Matten met waterplanten',
      description: 'Matten met waterplanten zijn speciaal ontworpen voor vochtige gebieden en waterpartijen. Ze helpen bij natuurlijke waterzuivering en creëren een unieke aquatische omgeving.'
    },
    bos: {
      title: 'Bos matten',
      description: 'Bos matten simuleren de natuurlijke bosbodem met een mix van schaduwminnende planten, mossen en varens. Perfect voor schaduwrijke gebieden waar traditioneel gras niet goed groeit.'
    },
    vasteplanten: {
      title: 'Vaste plantenmatten',
      description: 'Vaste plantenmatten bevatten een zorgvuldig geselecteerde mix van meerjarige planten die seizoen na seizoen terugkeren. Ze bieden kleur, textuur en structuur gedurende het hele jaar.'
    }
  };

  const tabs = [
    { id: 'sedum', label: 'Sedum op de grond' },
    { id: 'weide', label: '"Weide" matten' },
    { id: 'waterplanten', label: 'Matten met waterplanten' },
    { id: 'bos', label: 'Bos matten' },
    { id: 'vasteplanten', label: 'Vaste plantenmatten' }
  ];

  const currentContent = tabsContent[activeTab];
   
  return (
    <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="/images/team.jpg" alt="Groene Landbedekking" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Groene Landbedekking
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Duurzame groene landbedekkingsoplossingen voor tuinen, parken en openbare ruimtes
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
                      <h3 className="text-xl font-bold text-green-800">{currentContent.title}</h3>
                    </div>
                    
                    <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                      {currentContent.description}
                    </p>
                    
                    {/* Tab-specific content */}
                    {activeTab === 'sedum' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-blue-700">Droogteresistent</span>
                          </div>
                          <p className="text-sm text-secondary-600">Minimaal water nodig, perfect voor droge gebieden</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-green-700">Onderhoudsarm</span>
                          </div>
                          <p className="text-sm text-secondary-600">Zeer weinig onderhoud vereist</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-green-700">Jaarrond Groen</span>
                          </div>
                          <p className="text-sm text-secondary-600">Behoudt kleur in alle seizoenen</p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'weide' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-yellow-700">Biodiversiteit</span>
                          </div>
                          <p className="text-sm text-secondary-600">Trekt bijen, vlinders en andere insecten aan</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-green-700">Natuurlijke Uitstraling</span>
                          </div>
                          <p className="text-sm text-secondary-600">Creëert een authentieke weidegevoeling</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-purple-700">Seizoenskleur</span>
                          </div>
                          <p className="text-sm text-secondary-600">Verschillende kleuren door het jaar heen</p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'waterplanten' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-blue-700">Waterzuivering</span>
                          </div>
                          <p className="text-sm text-secondary-600">Helpt bij natuurlijke waterzuivering</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-cyan-700">Aquatische Omgeving</span>
                          </div>
                          <p className="text-sm text-secondary-600">Perfect voor vijvers en waterpartijen</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-teal-700">Vochtregulatie</span>
                          </div>
                          <p className="text-sm text-secondary-600">Reguleert vochtniveaus in de omgeving</p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'bos' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-green-700">Schaduwminnend</span>
                          </div>
                          <p className="text-sm text-secondary-600">Perfect voor schaduwrijke gebieden</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-amber-700">Natuurlijke Bosbodem</span>
                          </div>
                          <p className="text-sm text-secondary-600">Simuleert authentieke bosomgeving</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-emerald-700">Mossen & Varens</span>
                          </div>
                          <p className="text-sm text-secondary-600">Bevat diverse bosplanten en mossen</p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'vasteplanten' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-purple-700">Meerjarig</span>
                          </div>
                          <p className="text-sm text-secondary-600">Komen elk jaar terug</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-pink-700">Kleur & Textuur</span>
                          </div>
                          <p className="text-sm text-secondary-600">Diverse kleuren en texturen</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-indigo-700">Jaarrond Structuur</span>
                          </div>
                          <p className="text-sm text-secondary-600">Structuur in alle seizoenen</p>
                        </div>
                      </div>
                    )}
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

export default GroeneLandbedekkingServicePage;