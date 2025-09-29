import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon } from 'lucide-react';
import { usePhoneModal } from '../contexts/PhoneModalContext';

const CtaSection = () => {
  const { openPhoneModal } = usePhoneModal();

  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Klaar voor de Transformatie van Uw Dak?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Neem vandaag nog contact met ons op voor een gratis consultatie en
            offerte. Ons team van experts staat klaar om u te helpen bij het
            creëren van de perfecte groene ruimte op uw dak met onze hoogwaardige
            kunstgras oplossingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/contact" className="px-8 py-4 bg-white text-primary-600 font-medium rounded-md hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
              <MailIcon className="mr-2 h-5 w-5" /> Ontvang Gratis Offerte
            </Link>
            <button 
              onClick={openPhoneModal}
              className="px-8 py-4 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <PhoneIcon className="mr-2 h-5 w-5" /> Bel Nu
            </button>
          </div>
          <p className="text-white/80 text-sm">
            Consultatie zonder verplichtingen. Wij helpen u de ideale oplossing
            voor uw dak te vinden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;