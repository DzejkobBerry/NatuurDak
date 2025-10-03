import React, { useState } from 'react';
import CtaSection from '../../components/CtaSection';

const GroeneLandbedekkingServicePage = () => {
  const [activeTab, setActiveTab] = useState('sedum');

  const tabs = [
    { id: 'sedum', label: 'Sedum op de grond' },
    { id: 'weide', label: '"Weide" matten' },
    { id: 'waterplanten', label: 'Matten met waterplanten' },
    { id: 'bos', label: 'Bos matten' },
    { id: 'vaste', label: 'Vaste plantenmatten' }
  ];
   
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
            Duurzame en onderhoudsarme groene oplossingen voor elke omgeving
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {activeTab === 'sedum' && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
                  Sedum op de grond
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
                        <h3 className="text-xl font-bold text-green-800">Sedum op de grond</h3>
                      </div>
                      
                      <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                        Sedumbeplanting is zeer droogtetolerant en geschikt voor aanleg op de grond en op muren. Sedum is bijzonder geschikt voor verkeersomgevingen, zoals rotondes en middenbermen, waar de beplanting wordt blootgesteld aan zware omstandigheden zoals droogte, zout en vervuiling.
                      </p>
                      
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
                    </div>
                  </div>
                </div>
                
                {/* New section with image and benefits list */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="flex justify-center">
                    <img 
                      src="https://i.imgur.com/l3zkBeK.png" 
                      alt="Sedum miniatura" 
                      className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6 h-fit">
                    <h3 className="text-xl font-display font-bold text-green-700 mb-4">
                      Voordelen
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Sedum op de grond verdraagt zoutbelasting in verkeersomgevingen beter dan veel andere planten.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Sedum op de grond kan goed omgaan met droge en zonnige groeiplaatsen, zoals vaak voorkomt in verkeersomgevingen.
                          </p>
                        </div>
                      </div>
                   </div>
                 </div>
                 
                 {/* Second section with benefits and image in one row */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                   <div className="bg-green-50 rounded-lg p-6 h-fit">
                     <h3 className="text-xl font-display font-bold text-green-700 mb-4">Voordelen</h3>
                     <div className="space-y-4">
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                         <p className="text-secondary-700 text-sm leading-relaxed">
                           Sedum op de grond is eenvoudig en snel aan te leggen, bijvoorbeeld in rotondes en verkeerseilanden.
                         </p>
                       </div>
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                         <p className="text-secondary-700 text-sm leading-relaxed">
                           Met sedum op de grond ontstaat vanaf dag één een volledig resultaat.
                         </p>
                       </div>
                     </div>
                   </div>
                 
                   <div className="flex justify-center">
                      <img 
                        src="https://i.imgur.com/ijuRCa2.png" 
                        alt="Sedum voordelen voor milieu" 
                        className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
                      />
                    </div>
                 </div>
                </div>
              )}

            {activeTab === 'weide' && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
                  Prairie-mat
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
                        <h3 className="text-xl font-bold text-green-800">Prairie-mat</h3>
                      </div>
                      
                      <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                        De Sedunas droogteweidemat wordt geproduceerd in Zweden en is bij levering al goed ontwikkeld en wortelt snel. 
                        De mat bevat meer dan 20 sterke soorten sedum en kruiden. De droogteweidemat zorgt voor een rijke bloei en een hoge biodiversiteit. 
                        De droogteweide past zich aan de lokale omstandigheden van de locatie aan. Uiterlijk en samenstelling variëren per seizoen 
                        en afhankelijk van de klimaatzone waarin de weide zich bevindt. De droogteweidemat is geschikt voor taluds, 
                        verkeersomgevingen, daken en betonnen constructies.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-blue-700">Biodiversiteit</span>
                          </div>
                          <p className="text-sm text-secondary-600">Ondersteunt lokale flora en fauna</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-green-700">Natuurlijk</span>
                          </div>
                          <p className="text-sm text-secondary-600">Authentieke graslanduitstraling</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-green-700">Seizoensvariatie</span>
                          </div>
                          <p className="text-sm text-secondary-600">Kleurveranderingen door het jaar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* New section with image and benefits list */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="flex justify-center">
                    <img 
                      src="https://i.imgur.com/mDuZwT8.png" 
                      alt="Weide matten voordelen" 
                      className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6 h-fit">
                    <h3 className="text-xl font-display font-bold text-green-700 mb-4">
                      Voordelen
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Kosteneffectieve oplossing met een vestigingstijd van enkele maanden, in tegenstelling tot ingezaaide weiden die tot 2 jaar nodig kunnen hebben
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Hoge biodiversiteit met een groot aantal soorten
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Bevordert fauna, mens en milieu
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Flexibele opbouw doordat de hoeveelheid substraat kan worden aangepast aan de gewenste bouwhoogte
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Hoog waterbergend vermogen, aanpasbaar met de substraatdikte, &gt;70 liter/m²
                          </p>
                        </div>
                      </div>
                   </div>
                 </div>
                 
                 {/* Second section with reversed layout */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                   <div className="bg-green-50 rounded-lg p-6 h-fit">
                     <h3 className="text-xl font-display font-bold text-green-700 mb-4">Voordelen</h3>
                     <div className="space-y-4">
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                         <p className="text-secondary-700 text-sm leading-relaxed">
                           Plantenmateriaal aangepast aan ons Scandinavische klimaat
                         </p>
                       </div>
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                         <p className="text-secondary-700 text-sm leading-relaxed">
                           Kan worden aangevuld met lokaal voorkomende kruiden
                         </p>
                       </div>
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                         <p className="text-secondary-700 text-sm leading-relaxed">
                           Prefab weidematten met een organische drager die na verloop van tijd natuurlijk afbreekt
                         </p>
                       </div>
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                         <p className="text-secondary-700 text-sm leading-relaxed">
                           Geen noodzaak om het gebied af te schermen voor het publiek, zoals bij inzaai
                         </p>
                       </div>
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                         <p className="text-secondary-700 text-sm leading-relaxed">
                           Hoge soortenrijkdom die bestuivers ten goede komt
                         </p>
                       </div>
                     </div>
                   </div>
                 
                   <div className="flex justify-center">
                     <img 
                       src="https://i.imgur.com/Vsyg4rr.png" 
                       alt="Weide matten voordelen" 
                       className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
                     />
                   </div>
                 </div>
                </div>
              )}

            {activeTab === 'waterplanten' && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
                  Matten met waterplanten
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
                      <h3 className="text-xl font-bold text-green-800">Waterplantenmat</h3>
                    </div>
                    
                    <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                      De waterplantenmatten van Seduna worden bij uitstek gebruikt als erosiebescherming rond vijvers en waterlopen. 
                      Ze kunnen ook worden toegepast in wadi's en regenbedden. De waterplantenmatten van Seduna hebben een draaglaag 
                      van kokosmateriaal met voorgekweekte laag- en hooggroeiende moerasplanten.
                    </p>
                    
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
                        <p className="text-sm text-secondary-600">Reduceert fosfor en stikstof effectief</p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-semibold text-cyan-700">Erosiebescherming</span>
                        </div>
                        <p className="text-sm text-secondary-600">Voorkomt erosie rond waterpartijen</p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-semibold text-green-700">Moerasecosysteem</span>
                        </div>
                        <p className="text-sm text-secondary-600">Creëert natuurlijke moerashabitats</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                
                {/* First section with image and benefits list */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="flex justify-center">
                    <img 
                      src="https://i.imgur.com/o1n74lf.png" 
                      alt="Waterplanten matten voordelen" 
                      className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6 h-fit">
                    <h3 className="text-xl font-display font-bold text-green-700 mb-4">
                      Voordelen
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Moerasplanten hebben een groot vermogen om fosfor en stikstof te reduceren.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Waterplantenmatten dienen als erosiebescherming.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Snelle aanleg dankzij prefabmatten met voorgekweekte moerasplanten.
                          </p>
                        </div>
                      </div>
                   </div>
                 </div>

              </div>
            )}

            {activeTab === 'bos' && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
                  Bos matten
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
                      <h3 className="text-xl font-bold text-green-800">Bos matten</h3>
                    </div>
                    
                    <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                      Help de natuur een handje bij het herstel na een ingreep. Door het aanleggen van kant-en-klare bosmatten ontstaat er vanaf de eerste dag een volledig resultaat. De bosmatten worden zo uitgesneden dat ze geen extra ingrepen in de natuur veroorzaken. Ze kunnen ook op daken worden toegepast. De bosmatten bestaan uit bosbes, veenbes, kraaihei, heide, mos en korstmossen. Bosmatten gedijen goed op voedselarme grond met een mengsel van zand, grind en turf in een schaduwrijke omgeving.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-semibold text-blue-700">Schaduwresistent</span>
                        </div>
                        <p className="text-sm text-secondary-600">Gedijt uitstekend in schaduwrijke omgevingen</p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-semibold text-green-700">Natuurlijk herstel</span>
                        </div>
                        <p className="text-sm text-secondary-600">Ondersteunt natuurlijk bodemherstel</p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-semibold text-green-700">Ecosysteem</span>
                        </div>
                        <p className="text-sm text-secondary-600">Creëert rijke bosecosystemen</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                
                {/* First section with image and benefits list */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="flex justify-center">
                    <img 
                      src="https://i.imgur.com/AUaWDBl.png" 
                      alt="Bos matten" 
                      className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6 h-fit">
                    <h3 className="text-xl font-display font-bold text-green-700 mb-4">
                      Voordelen
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Prefab-mat met voorgekweekte bosplanten
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Eenvoudig aan te leggen
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Ideaal voor het herstel van bosomgevingen
                          </p>
                        </div>
                      </div>
                   </div>
                 </div>

              </div>
            )}

            {activeTab === 'vaste' && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
                  Vaste plantenmatten
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
                        <h3 className="text-xl font-bold text-green-800">Vaste plantenmat</h3>
                      </div>
                      
                      <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                        De perennematten van Seduna worden geleverd met voorgekweekte vaste planten en wortelen snel op hun nieuwe locatie. 
                        De vaste planten worden gekweekt op een kokosdrager, waardoor de mat gemakkelijk te hanteren en duurzaam is. 
                        Vaste plantenmatten zijn geschikt voor bloembedden op de grond en op betonnen constructies.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-blue-700">Meerjarig</span>
                          </div>
                          <p className="text-sm text-secondary-600">Planten keren elk seizoen terug</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-green-700">Kleurrijk</span>
                          </div>
                          <p className="text-sm text-secondary-600">Langdurige bloeiperiodes</p>
                        </div>
                        
                        <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-semibold text-green-700">Veelzijdig</span>
                          </div>
                          <p className="text-sm text-secondary-600">Geschikt voor diverse toepassingen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* First section with image and benefits list */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="flex justify-center">
                    <img 
                      src="https://i.imgur.com/hu2FTOu.png" 
                      alt="Vaste plantenmatten" 
                      className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6 h-fit">
                    <h3 className="text-xl font-display font-bold text-green-700 mb-4">
                      Voordelen
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Direct resultaat vanaf dag één met een prefab-mat met voorgekweekte vaste planten
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Eenvoudig aan te leggen
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-secondary-700 text-sm leading-relaxed">
                            Volledige bedekking
                          </p>
                        </div>
                      </div>
                   </div>
                 </div>
                 
                 {/* Second section with reversed layout */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                   <div className="bg-green-50 rounded-lg p-6 h-fit">
                     <h3 className="text-xl font-display font-bold text-green-700 mb-4">Voordelen</h3>
                     <div className="space-y-4">
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                         <p className="text-secondary-700 text-sm leading-relaxed">
                           Laag onderhoud
                         </p>
                       </div>
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                         <p className="text-secondary-700 text-sm leading-relaxed">
                           Bemoeilijkt onkruidgroei
                         </p>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex justify-center">
                     <img 
                       src="https://i.imgur.com/rz7X4Ax.png" 
                       alt="Vaste plantenmatten voordelen" 
                       className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
                     />
                   </div>
                 </div>
                 
                 {/* New Vinca minor section for Vaste plantenmatten */}
                 <div className="mt-16">
                   <h3 className="text-2xl font-display font-bold text-green-600 text-center mb-8">
                     Vinca minor
                   </h3>
                   
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div className="flex justify-center items-center">
                               <img 
                                 src="https://i.imgur.com/MjNQcsH.png" 
                                 alt="Vinca minor" 
                                 className="w-full max-w-md h-80 object-contain mt-16"
                               />
                             </div>
                     
                     <div className="space-y-6">

                        
                        {/* Technical specifications table */}
                         <div className="bg-green-50 rounded-lg p-6">
                           <div className="overflow-x-auto">
                             <table className="w-full">
                               <tbody>
                                 <tr className="bg-green-100">
                                   <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">
                                     Handelsnaam
                                   </td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">
                                     Wintergroen
                                   </td>
                                 </tr>
                                 <tr>
                                   <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">
                                     Kleur / Bloei
                                   </td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">
                                      Blauw, mei/juni
                                     </td>
                                 </tr>
                                 <tr className="bg-green-100">
                                   <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">
                                     Winterhardheid
                                   </td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">
                                     B
                                   </td>
                                 </tr>
                                 <tr>
                                   <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">
                                     Standplaats
                                   </td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">
                                     Zon–schaduw
                                   </td>
                                 </tr>
                                 <tr className="bg-green-100">
                                   <td className="px-4 py-3 font-semibold text-green-800">
                                     Hoogte
                                   </td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800">
                                     10–15 cm
                                   </td>
                                 </tr>
                               </tbody>
                             </table>
                           </div>
                         </div>
                     </div>
                   </div>
                 </div>
                 
                 {/* Second Vinca minor section with swapped layout */}
                 <div className="mt-16">
                   <h3 className="text-2xl font-display font-bold text-green-600 text-center mb-8">
                     Vinca minor white
                   </h3>
                   
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                     <div className="space-y-6">
                        {/* Technical specifications table */}
                         <div className="bg-green-50 rounded-lg p-6">
                           <div className="overflow-x-auto">
                             <table className="w-full">
                               <tbody>
                                 <tr className="bg-green-100">
                                   <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">
                                     Handelsnaam
                                   </td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">
                                     Wintergroen
                                   </td>
                                 </tr>
                                 <tr>
                                   <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">
                                     Kleur / Bloei
                                   </td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">
                                     Wit, mei/juni
                                   </td>
                                 </tr>
                                 <tr className="bg-green-100">
                                   <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">
                                     Winterhardheid
                                   </td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">
                                     B
                                   </td>
                                 </tr>
                                 <tr>
                                   <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">
                                     Standplaats
                                   </td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">
                                     Zon–schaduw
                                   </td>
                                 </tr>
                                 <tr className="bg-green-100">
                                   <td className="px-4 py-3 font-semibold text-green-800">
                                     Hoogte
                                   </td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800">
                                     10–15 cm
                                   </td>
                                 </tr>
                               </tbody>
                             </table>
                           </div>
                         </div>
                     </div>
                     
                      <div className="flex justify-center items-center">
                               <img 
                                 src="https://i.imgur.com/Ke372Ty.png" 
                                 alt="Vinca minor white" 
                                 className="w-full max-w-md h-80 object-contain mt-16"
                               />
                             </div>
                   </div>
                 </div>
                 
                 {/* Additional Vinca minor white section with swapped layout */}
                 <div className="mt-16">
                   <h3 className="text-2xl font-display font-bold text-green-600 text-center mb-8">Vinca minor white</h3>
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                     <div className="flex justify-center items-center">
                       <img src="https://i.imgur.com/Ke372Ty.png" alt="Vinca minor white" className="w-full max-w-md h-80 object-contain mt-16" />
                     </div>
                     <div className="space-y-6">
                       <div className="bg-green-50 rounded-lg p-6">
                         <div className="overflow-x-auto">
                           <table className="w-full">
                             <tbody>
                               <tr className="bg-green-100">
                                 <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">Handelsnaam</td>
                                 <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">Maagdenpalm</td>
                               </tr>
                               <tr>
                                 <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">Kleur / Bloei</td>
                                 <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">Paars, mei/juni</td>
                               </tr>
                               <tr className="bg-green-100">
                                 <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">Winterhardheid</td>
                                 <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">B</td>
                               </tr>
                               <tr>
                                 <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">Standplaats</td>
                                 <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">Zon – schaduw</td>
                               </tr>
                               <tr className="bg-green-100">
                                 <td className="px-4 py-3 font-semibold text-green-800">Hoogte</td>
                                 <td className="px-4 py-3 text-right font-medium text-green-800">10–15 cm</td>
                               </tr>
                             </tbody>
                           </table>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            )}
          </div>
          
          <div className="text-center mt-8">
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg">
              Plan Gratis Consultatie
            </a>
          </div>
        </div>
      </div>
      
      <CtaSection />
    </div>
  );
};

export default GroeneLandbedekkingServicePage;