import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">
              Natuur Dak B.V.
            </h3>
            <p className="text-gray-300 mb-4">
              Wij transformeren daken in prachtige, groene ruimtes met
              kunstgras van de hoogste kwaliteit.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61581267250155&mibextid=wwXIfr&rdid=yo8e4VLByiXmqNeM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CD3inRD13%2F%3Fmibextid%3DwwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors"
                title="Volg Natuur Dak op Facebook"
                aria-label="Facebook pagina van Natuur Dak"
              >
                <FacebookIcon size={20} />
              </a>
              <a 
                href="https://www.instagram.com/netherlandsnatuurdak/?igsh=MWZhazlwbmU5aHRveA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors"
                title="Volg Natuur Dak op Instagram"
                aria-label="Instagram pagina van Natuur Dak"
              >
                <InstagramIcon size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary-400 transition-colors"
                title="Volg Natuur Dak op Twitter"
                aria-label="Twitter pagina van Natuur Dak"
              >
                <TwitterIcon size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary-400 transition-colors"
                title="Volg Natuur Dak op LinkedIn"
                aria-label="LinkedIn pagina van Natuur Dak"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  title="Ga naar Home pagina"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  title="Ga naar Over Ons pagina"
                >
                  Over Ons
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  title="Ga naar Diensten pagina"
                >
                  Diensten
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  title="Ga naar Galerij pagina"
                >
                  Galerij
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  title="Ga naar Contact pagina"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Onze Diensten</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services/rooftop" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  title="Lees meer over Groene Daken"
                >
                  Groene Daken
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/groene-gevels" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  title="Lees meer over Groene Gevels"
                >
                  Groene Gevels
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/groene-landbedekking" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  title="Lees meer over Groene Landbedekking"
                >
                  Groene Landbedekking
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-works" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  title="Lees meer over Hoe Het Werkt"
                >
                  Hoe Het Werkt
                </Link>
              </li>
              <li>
                <Link 
                  to="/reviews" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                  title="Lees meer over Klantbeoordelingen"
                >
                  Klantbeoordelingen
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Neem Contact Op</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-primary-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Larixstraat 29, 4537 VJ TERNEUZEN
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a href="tel:+31616368386" className="text-gray-300 hover:text-primary-400 transition-colors">
                  +31 616 368 386
                </a>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a href="mailto:Info@netherlandsnatuurdak.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Info@netherlandsnatuurdak.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Natuur Dak B.V. Alle rechten voorbehouden. Ontworpen door{' '}
              <a 
                href="https://bloompixel.pl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors underline"
              >
                bloompixel.pl
              </a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                Privacybeleid
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;