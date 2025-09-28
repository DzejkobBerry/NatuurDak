import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
const ContactPage = () => {
  return <div className="w-full">
      <div className="bg-primary-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Neem Contact Op
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Neem contact op voor een consultatie of offerte
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Stuur Ons een Bericht
              </h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-1">
                      Voornaam
                    </label>
                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-1">
                      Achternaam
                    </label>
                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                    E-mailadres
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                    Telefoonnummer
                  </label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-1">
                    Geïnteresseerd in Dienst
                  </label>
                  <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Selecteer een dienst</option>
                    <option value="rooftop">Dak Kunstgras</option>
                    <option value="ground">Grond Kunstgras</option>
                    <option value="custom">Maatwerk Project</option>
                    <option value="other">Anders/Niet Zeker</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                    Uw Bericht
                  </label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300">
                  Verstuur Bericht
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Contactinformatie
              </h2>
              <div className="bg-secondary-50 rounded-lg p-8 mb-8">
                <div className="flex items-start mb-6">
                  <MapPinIcon className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">
                      Ons Adres
                    </h3>
                    <p className="text-secondary-600">
                      Groene Straat 123, Eco Stad, EC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <PhoneIcon className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">
                      Telefoon
                    </h3>
                    <p className="text-secondary-600">+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <MailIcon className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">
                      Email
                    </h3>
                    <p className="text-secondary-600">info@natuurdak.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">
                      Openingstijden
                    </h3>
                    <p className="text-secondary-600">
                      Maandag - Vrijdag: 9:00 - 17:00
                    </p>
                    <p className="text-secondary-600">Zaterdag: 10:00 - 14:00</p>
                    <p className="text-secondary-600">Zondag: Gesloten</p>
                  </div>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="bg-secondary-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-secondary-600">Kaart wordt hier weergegeven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ContactPage;