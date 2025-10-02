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
                      src="https://i.imgur.com/5bNa8DG.png" 
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
                            Direct resultaat vanaf dag één met een kant-en-klare mat uitgerold met voorgekweekte vaste planten
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
                 
                 {/* Second section with benefits and image in one row */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                   <div className="bg-green-50 rounded-lg p-6 h-fit">
                     <h3 className="text-xl font-display font-bold text-green-700 mb-4">Voordelen</h3>
                     <div className="space-y-4">
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                         <p className="text-secondary-700 text-sm leading-relaxed">
                           Laag onderhoudsbehoefte
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
                        src="https://i.imgur.com/zh1TMMH.png" 
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
                      <h3 className="text-xl font-bold text-green-800">Voordelen – Waterplantenmat</h3>
                    </div>
                    
                    <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                      De waterplantenmatten van Seduna worden bij uitstek gebruikt als erosiebescherming rond vijvers en waterlopen. 
                      Ze kunnen ook worden toegepast in wadi's en regenbedden. De waterplantenmatten van Seduna hebben een draaglaag 
                      van kokosmateriaal met voorgekweekte laag- en hooggroeiende moerasplanten.
                    </p>
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
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                      alt="Bos matten" 
                      className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-6">
                    <h3 className="text-xl font-display font-bold text-amber-700 mb-4">
                      VOORDELEN VAN BOS MATTEN
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                        <p className="text-secondary-700 text-sm">
                          Perfect voor schaduwrijke gebieden
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                        <p className="text-secondary-700 text-sm">
                          Bevat mossen, varens en schaduwplanten
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                        <p className="text-secondary-700 text-sm">
                          Simuleert natuurlijke bosbodem
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
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="flex justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                      alt="Vaste plantenmatten" 
                      className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-display font-bold text-purple-700 mb-4">
                      VOORDELEN VAN VASTE PLANTEN
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-secondary-700 text-sm">
                          Meerjarige planten die elk seizoen terugkeren
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-secondary-700 text-sm">
                          Langdurige bloeiperiodes voor continue kleur
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <p className="text-secondary-700 text-sm">
                          Mix van bloeiende planten en siergrassen
                        </p>
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