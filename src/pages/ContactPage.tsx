import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, UserIcon, AtSignIcon, MessageSquareIcon, BriefcaseIcon } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="w-full">
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 animate-fade-in">
              Neem Contact Op
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Neem contact op voor een consultatie of offerte
            </p>
          </div>
        </div>
        
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 transform hover:scale-[1.02] transition-all duration-300 h-fit">
                <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-6 lg:mb-8 text-center">
                  Stuur Ons een Bericht
                </h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="group">
                      <label htmlFor="firstName" className="block text-sm font-semibold text-secondary-700 mb-2">
                        Voornaam
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-500 group-focus-within:text-primary-600 transition-colors" />
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-300 bg-gray-50 focus:bg-white" 
                          placeholder="Uw voornaam"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="lastName" className="block text-sm font-semibold text-secondary-700 mb-2">
                        Achternaam
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-500 group-focus-within:text-primary-600 transition-colors" />
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-300 bg-gray-50 focus:bg-white" 
                          placeholder="Uw achternaam"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                      E-mailadres
                    </label>
                    <div className="relative">
                      <AtSignIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-500 group-focus-within:text-primary-600 transition-colors" />
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-300 bg-gray-50 focus:bg-white" 
                        placeholder="uw.email@voorbeeld.nl"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Telefoonnummer
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-500 group-focus-within:text-primary-600 transition-colors" />
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-300 bg-gray-50 focus:bg-white" 
                        placeholder="+31 6 12 34 56 78"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="service" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Geïnteresseerd in Dienst
                    </label>
                    <div className="relative">
                      <BriefcaseIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-500 group-focus-within:text-primary-600 transition-colors" />
                      <select 
                        id="service" 
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Selecteer een dienst</option>
                        <option value="rooftop">Dak Kunstgras</option>
                        <option value="ground">Grond Kunstgras</option>
                        <option value="custom">Maatwerk Project</option>
                        <option value="other">Anders/Niet Zeker</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="h-5 w-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Uw Bericht
                    </label>
                    <div className="relative">
                      <MessageSquareIcon className="absolute left-3 top-4 h-5 w-5 text-primary-500 group-focus-within:text-primary-600 transition-colors" />
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-300 bg-gray-50 focus:bg-white resize-none" 
                        placeholder="Vertel ons over uw project..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300 mt-6"
                  >
                    <span className="flex items-center justify-center">
                      <MailIcon className="h-5 w-5 mr-2" />
                      Verstuur Bericht
                    </span>
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-secondary-900 text-center lg:text-left">
                  Contactinformatie
                </h2>
                
                <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 transform hover:scale-[1.02] transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-start group hover:bg-primary-50 p-4 rounded-xl transition-all duration-300">
                      <div className="bg-primary-100 p-3 rounded-full group-hover:bg-primary-200 transition-colors">
                        <MapPinIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-secondary-900 mb-1 text-lg">
                          Ons Adres
                        </h3>
                        <p className="text-secondary-600">
                          Larixstraat 29, 4537 VJ TERNEUZEN
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start group hover:bg-primary-50 p-4 rounded-xl transition-all duration-300">
                      <div className="bg-primary-100 p-3 rounded-full group-hover:bg-primary-200 transition-colors">
                        <PhoneIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-secondary-900 mb-1 text-lg">
                          Telefoon
                        </h3>
                        <p className="text-secondary-600 hover:text-primary-600 transition-colors cursor-pointer">
                          +31 616 368 386
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start group hover:bg-primary-50 p-4 rounded-xl transition-all duration-300">
                      <div className="bg-primary-100 p-3 rounded-full group-hover:bg-primary-200 transition-colors">
                        <MailIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-secondary-900 mb-1 text-lg">
                          Email
                        </h3>
                        <p className="text-secondary-600 hover:text-primary-600 transition-colors cursor-pointer">
                          Info@netherlandsnatuurdak.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start group hover:bg-primary-50 p-4 rounded-xl transition-all duration-300">
                      <div className="bg-primary-100 p-3 rounded-full group-hover:bg-primary-200 transition-colors">
                        <ClockIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-secondary-900 mb-1 text-lg">
                          Openingstijden
                        </h3>
                        <div className="space-y-1 text-secondary-600">
                          <p>Maandag - Vrijdag: 07:00 - 16:00</p>
                          <p>Zaterdag: 10:00 - 16:00</p>
                          <p>Zondag: Gesloten</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Map Placeholder */}
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl h-80 flex items-center justify-center shadow-xl transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
                  <div className="relative text-center">
                    <MapPinIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                    <p className="text-secondary-700 font-semibold text-lg">Interactieve Kaart</p>
                    <p className="text-secondary-600">Wordt binnenkort toegevoegd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
};

export default ContactPage;