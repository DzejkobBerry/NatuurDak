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
   
  return (
    <div className="w-full">
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
                          <h3 className="text-xl font-bold text-green-800">Getest & Gedocumenteerd</h3>
                        </div>
                        
                        <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                          <span className="text-green-700 font-semibold">Sedunas sedumtakken</span> zijn goed getest en uitgebreid gedocumenteerd. 
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-blue-700">Zuid-Zweden</span>
                            </div>
                            <p className="text-sm text-secondary-600">Onze matten worden gekweekt in Zuid-Zweden</p>
                          </div>
                          
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-green-700">Noordelijk Klimaat</span>
                            </div>
                            <p className="text-sm text-secondary-600">Aangepast voor lange levensduur in ons klimaat</p>
                          </div>
                          
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-white">10</span>
                              </div>
                              <span className="font-semibold text-green-700">Plantensoorten</span>
                            </div>
                            <p className="text-sm text-secondary-600">Voor goede dekking in klimaatzones</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                  
                  {/* Third section - SRS 1-27° with technical specifications */}
                   <div className="mt-16">
                     <h3 className="text-2xl font-display font-bold text-green-600 text-center mb-8">
                       SRS 1-27°
                     </h3>
                     
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="flex justify-center items-center">
                                 <img 
                                   src="https://i.imgur.com/VEFA8T3.png" 
                                   alt="SRS 1-27° systeem" 
                                   className="w-full max-w-md h-80 object-contain mt-16"
                                 />
                               </div>
                       
                       <div className="space-y-6">
                         <div>
                            <p className="text-lg text-secondary-600 leading-relaxed mb-4">
                               Sedunas SRS 1–27° bestaat uit prefab-elementen die eenvoudig te monteren zijn. Het systeem heeft een lage bouwhoogte, wat onkruidgroei beperkt en het onderhoud van het dak minimaliseert. De lage bouwhoogte zorgt voor een minimaal gewicht van het systeem, waardoor het toepassingsgebied groter wordt.
                             </p>
                             <p className="text-lg text-secondary-600 leading-relaxed mb-4">
                               SRS 1–27° heeft een goede wateropslagcapaciteit. Het systeem is brandgeclassificeerd volgens BROOF<sub>(T2)</sub>, wat installatie op de meeste dakoppervlakken mogelijk maakt.
                             </p>
                             <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                               SRS 1–27° is gebaseerd op een milieuvriendelijke constructie met een minimaal plasticgehalte, die wordt aangebracht bovenop een waterhoudende laag met drainerende eigenschappen.
                             </p>
                          </div>
                          
                          {/* Technical specifications table */}
                           <div className="bg-green-50 rounded-lg p-6">
                             <div className="overflow-x-auto">
                               <table className="w-full">
                                 <tbody>
                                   <tr className="bg-green-100">
                                     <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">
                                       Bouwhoogte (mm)
                                     </td>
                                     <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">
                                       50
                                     </td>
                                   </tr>
                                   <tr>
                                     <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">
                                       Droog gewicht, kg/m²
                                     </td>
                                     <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">
                                       19,3
                                     </td>
                                   </tr>
                                   <tr className="bg-green-100">
                                     <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">
                                       Gewicht bij verzadiging met water bij 0° helling, kg/m²
                                     </td>
                                     <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">
                                       51,1
                                     </td>
                                   </tr>
                                   <tr>
                                     <td className="px-4 py-3 font-semibold text-green-800">
                                       Wateropnamecapaciteit 30 min na verzadiging bij 0° helling
                                     </td>
                                     <td className="px-4 py-3 text-right font-medium text-green-800">
                                       31,8
                                     </td>
                                   </tr>
                                 </tbody>
                               </table>
                             </div>
                           </div>
                       </div>
                   </div>
                   
                   {/* Fourth section - New SRS section with image */}
                    <div className="mt-16">
                      <h3 className="text-2xl font-display font-bold text-green-600 text-center mb-8">
                        SRS 1–3°
                      </h3>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6">
                          <div>
                             <p className="text-lg text-secondary-600 leading-relaxed mb-4">
                               Sedunas SRS 1–3° bestaat uit prefab-elementen die eenvoudig te monteren zijn. Het systeem heeft een lage bouwhoogte, wat onkruidgroei beperkt en het onderhoud van het dak minimaliseert.
                             </p>
                             <p className="text-lg text-secondary-600 leading-relaxed mb-4">
                               De lage bouwhoogte geeft het systeem een minimaal gewicht, waardoor het toepassingsgebied groter wordt. SRS 1–3° heeft een goede wateropslagcapaciteit.
                             </p>
                             <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                               Het systeem is brandgeclassificeerd volgens BROOF(T2), wat installatie op de meeste dakoppervlakken mogelijk maakt. SRS 1–3° wordt aangelegd bovenop een filter- en drainagelaag. Het systeem is geschikt voor zogenaamde omgekeerde dakconstructies, waarbij de waterdichte laag onder de isolatie ligt.
                             </p>
                           </div>
                           
                           {/* Technical specifications table */}
                              <div className="bg-green-50 rounded-lg p-6">
                                <div className="overflow-x-auto">
                                  <table className="w-full">
                                    <tbody>
                                      <tr className="bg-green-100">
                                        <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">Bouwhoogte (mm)</td>
                                        <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">50–60</td>
                                      </tr>
                                      <tr>
                                        <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">Droog gewicht, kg/m²</td>
                                        <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">19,3</td>
                                      </tr>
                                      <tr className="bg-green-100">
                                        <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">Gewicht bij verzadiging met water bij 0° helling, kg/m²</td>
                                        <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">51,9</td>
                                      </tr>
                                      <tr>
                                        <td className="px-4 py-3 font-semibold text-green-800">Wateropnamecapaciteit 30 min na verzadiging bij 0° helling</td>
                                        <td className="px-4 py-3 text-right font-medium text-green-800">32,1</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                        </div>
                       
                       <div className="flex justify-center items-center mt-24">
                         <img 
                           src="https://i.imgur.com/5eVLe6b.png" 
                           alt="SRS Extensiv System" 
                           className="w-full max-w-md h-80 object-contain"
                         />
                       </div>
                     </div>
                   </div>

                   {/* New SRS 0-15° Section */}
                   <div className="mt-16">
                     <h3 className="text-2xl font-display font-bold text-green-600 text-center mb-8">
                       SRS 0–15°
                     </h3>
                     
                     <div className="grid md:grid-cols-2 gap-8 items-start">
                         <div className="flex justify-center items-center mt-48">
                           <img 
                             src="https://i.imgur.com/ZSGDdQb.png" 
                             alt="SRS 0-15°" 
                             className="w-full max-w-md h-80 object-contain"
                           />
                         </div>
                         
                         <div>
                         
                         <p className="text-lg text-secondary-600 leading-relaxed mb-4">
                           Sedunas SRS 0–15° maakt een grotere variatie aan vegetatietypes op daken mogelijk, wat bijdraagt aan een hoge biodiversiteit.
                         </p>
                         
                         <p className="text-lg text-secondary-600 leading-relaxed mb-4">
                           SRS 0–15° kan worden aangelegd met verschillende vegetatiedragers, zoals sedummatten of bloemenweidematten, gecombineerd met kruiden.
                         </p>
                         
                         <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                           Het systeem heeft een hoge wateropslagcapaciteit voor regenwater. De waterhoudende capaciteit kan worden vergroot door de bouwhoogte te verhogen met extra substraat.
                         </p>

                         <div className="bg-green-50 rounded-lg p-6">
                           <div className="overflow-x-auto">
                             <table className="w-full">
                               <tbody>
                                 <tr className="bg-green-100">
                                   <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">Bouwhoogte (mm)</td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">140–180</td>
                                 </tr>
                                 <tr>
                                   <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">Droog gewicht, kg/m²</td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">70–105</td>
                                 </tr>
                                 <tr className="bg-green-100">
                                   <td className="px-4 py-3 font-semibold text-green-800 border-b border-green-200">Gewicht bij verzadiging met water bij 0° helling, kg/m²</td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800 border-b border-green-200">145–200</td>
                                 </tr>
                                 <tr>
                                   <td className="px-4 py-3 font-semibold text-green-800">Wateropnamecapaciteit 30 min na verzadiging bij 0° helling</td>
                                   <td className="px-4 py-3 text-right font-medium text-green-800">82–110</td>
                                 </tr>
                               </tbody>
                             </table>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                </div>
              ) : activeTab === 'droge_weiden' ? (
                <div>
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
                          <h3 className="text-xl font-bold text-green-800">Natuurlijke & Duurzame Oplossing</h3>
                        </div>
                        
                        <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                           De Sedunas <span className="text-green-700 font-semibold">droogweidemat</span> wordt geproduceerd in Zweden en is bij levering goed ontwikkeld en wortelt snel. De mat bevat meer dan 20 robuuste soorten, waaronder sedum en kruiden.
                         </p>
                         <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium mt-4">
                           De droogweidemat zorgt voor een rijke bloei en heeft een hoge soortenrijkdom. Het droogdak past zich aan de lokale omstandigheden op de locatie aan. Het uiterlijk en de samenstelling variëren per seizoen en afhankelijk van de klimaatzone waarin de weide zich bevindt.
                         </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-blue-700">Inheemse Planten</span>
                            </div>
                            <p className="text-sm text-secondary-600">Gebruik van inheemse plantensoorten</p>
                          </div>
                          
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-green-700">Droogtebestendig</span>
                            </div>
                            <p className="text-sm text-secondary-600">Bestand tegen droogte en extreme weersomstandigheden</p>
                          </div>
                          
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-white">EX</span>
                              </div>
                              <span className="font-semibold text-green-700">Extensieve Daken</span>
                            </div>
                            <p className="text-sm text-secondary-600">Ideaal voor extensieve groene daken</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image and VOORDELEN in one line */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="flex justify-center">
                      <img 
                        src="https://i.imgur.com/BX5BiZo.png" 
                        alt="Droge weiden systeem" 
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
                             Aanzienlijk kortere vestigingstijd dan ingezaaide weiden
                           </p>
                         </div>
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Hoge biodiversiteit met een groot aantal soorten
                           </p>
                         </div>
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Bevordert fauna, mensen en milieu
                           </p>
                         </div>
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Flexibele opbouw, omdat de hoeveelheid substraat kan worden aangepast aan de gewenste bouwhoogte
                           </p>
                         </div>
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Hoge wateropslagcapaciteit die kan worden aangepast met de hoeveelheid substraat, &gt;70 liter/m²
                           </p>
                         </div>
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Verbetert de score in milieucertificeringsprogramma's zoals LEED & BREEAM
                           </p>
                         </div>
                       </div>
                    </div>
                  </div>
                  
                  {/* Reversed layout - Description on left, Image on right */}
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     <div className="bg-green-50 rounded-lg p-6">
                       <h3 className="text-xl font-display font-bold text-green-700 mb-4">
                         GELUIDSDEMPING
                       </h3>
                       <div className="space-y-3">
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Groene daken verminderen stress, verlagen de bloeddruk, ontspannen de spieren en verhogen ons gevoel van welzijn.
                           </p>
                         </div>
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Ze verlagen de windsnelheid in onze steden, waardoor stof, deeltjes en vervuiling door de vegetatie kunnen worden opgenomen.
                           </p>
                         </div>
                         <div className="flex items-start space-x-3">
                           <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                           <p className="text-secondary-700 text-sm">
                             Groene daken verlagen de concentratie van de vier belangrijkste verontreinigende stoffen: O₃, SO₂, PM en NOₓ.
                           </p>
                         </div>
                       </div>
                     </div>
                    
                    <div className="flex justify-center">
                      <img 
                        src="https://i.imgur.com/LqJc2No.png" 
                        alt="Milieuvoordelen droge weiden" 
                        className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              ) : activeTab === 'dakframe' ? (
                <div>
                  {/* Enhanced Description with Visual Elements for Dakframe */}
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
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-green-800">Dakvloerconstructies</h3>
                        </div>
                        <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl mx-auto font-medium">
                          De Sedunas <span className="text-green-700 font-semibold">dakvloerconstructies</span> hebben een grote wateropslagcapaciteit, oftewel veldcapaciteit, met de juiste verhouding tussen lucht, water en substraat dankzij speciaal geselecteerde bouwcomponenten.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-blue-700">Inheemse Planten</span>
                            </div>
                            <p className="text-sm text-secondary-600">Gebruik van inheemse plantensoorten</p>
                          </div>
                          
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                              </div>
                              <span className="font-semibold text-green-700">Droogtebestendig</span>
                            </div>
                            <p className="text-sm text-secondary-600">Bestand tegen droogte en extreme weersomstandigheden</p>
                          </div>
                          
                          <div className="bg-white/70 rounded-lg p-4 border border-green-200/50 hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-white">EX</span>
                              </div>
                              <span className="font-semibold text-green-700">Extensieve Daken</span>
                            </div>
                            <p className="text-sm text-secondary-600">Ideaal voor extensieve groene daken</p>
                          </div>
                        </div>
                      </div>
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
    </div>
  );
};
export default RooftopServicePage;