import React from 'react';
import CtaSection from '../components/CtaSection';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ShieldIcon, LeafIcon, SunIcon, DropletIcon } from 'lucide-react';
const ServicesPage = () => {
  const mainServices = [{
    title: 'Trawa na Dachach Płaskich',
    description: 'Specjalizujemy się w przekształcaniu płaskich dachów w zielone, funkcjonalne przestrzenie przy użyciu wysokiej jakości trawy syntetycznej, odpowiedniej izolacji i systemów drenażowych.',
    image: 'https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/services/rooftop'
  }, {
    title: 'Systemy dla Dachów Skośnych',
    description: 'Nasze innowacyjne rozwiązania umożliwiają instalację trawy syntetycznej nawet na dachach skośnych, z wykorzystaniem specjalnych systemów mocowań i zabezpieczeń.',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/services/rooftop'
  }, {
    title: 'Trawa dla Przestrzeni Przyziemnych',
    description: 'Oprócz specjalizacji w instalacjach dachowych, oferujemy również rozwiązania z trawy syntetycznej dla ogrodów, tarasów i innych przestrzeni przyziemnych.',
    image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    link: '/services/ground'
  }, {
    title: 'Projekty Niestandardowe',
    description: 'Realizujemy projekty niestandardowe, dostosowane do unikalnych potrzeb i wymagań naszych klientów, od małych tarasów po rozległe ogrody dachowe.',
    image: 'https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/services/custom'
  }];
  const additionalServices = [{
    icon: <ShieldIcon className="h-12 w-12 text-primary-600" />,
    title: 'Konsultacje i Ocena',
    description: 'Profesjonalna ocena dachu pod kątem możliwości instalacji trawy syntetycznej, uwzględniająca nośność, drenaż i inne kluczowe czynniki.'
  }, {
    icon: <LeafIcon className="h-12 w-12 text-primary-600" />,
    title: 'Projektowanie Przestrzeni',
    description: 'Kompleksowe projektowanie przestrzeni dachowych, uwzględniające elementy zieleni, meble i inne elementy aranżacyjne.'
  }, {
    icon: <SunIcon className="h-12 w-12 text-primary-600" />,
    title: 'Serwis i Konserwacja',
    description: 'Regularne przeglądy i konserwacja zainstalowanej trawy syntetycznej, zapewniające jej długotrwałą estetykę i funkcjonalność.'
  }, {
    icon: <DropletIcon className="h-12 w-12 text-primary-600" />,
    title: 'Systemy Nawadniania',
    description: 'Instalacja opcjonalnych systemów nawadniania dla roślin doniczkowych i elementów zieleni towarzyszących trawie syntetycznej.'
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Usługi GreenTurf" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Nasze Usługi
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Odkryj nasze premium usługi instalacji trawy syntetycznej dla dachów
            i nie tylko
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Services Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Główne Usługi
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Specjalistyczne Rozwiązania z Trawy Syntetycznej
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Oferujemy kompleksowe usługi instalacji trawy syntetycznej, ze
                szczególnym uwzględnieniem specjalistycznych rozwiązań dla
                przestrzeni dachowych.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainServices.map((service, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                  <div className="h-64 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {service.description}
                    </p>
                    <Link to={service.link} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                      Dowiedz się więcej{' '}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>)}
            </div>
          </div>
          {/* Additional Services Section */}
          <div className="mb-20 bg-secondary-50 py-16 px-6 rounded-xl">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Usługi Dodatkowe
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Kompleksowe Wsparcie
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Oprócz głównych usług instalacyjnych, oferujemy szereg usług
                dodatkowych, zapewniających kompleksową obsługę i wsparcie na
                każdym etapie projektu.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600">{service.description}</p>
                </div>)}
            </div>
          </div>
          {/* Why Choose Us Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Dlaczego My
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Co Wyróżnia Nasze Usługi
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Nasza specjalizacja w instalacjach dachowych, doświadczenie i
                zaangażowanie w jakość sprawiają, że jesteśmy liderem w branży.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    Specjalistyczna Wiedza
                  </h3>
                  <p className="text-secondary-600">
                    Nasz zespół posiada unikalne doświadczenie i wiedzę w
                    zakresie instalacji trawy syntetycznej na dachach, co
                    pozwala nam realizować nawet najbardziej wymagające projekty
                    z najwyższą precyzją i bezpieczeństwem.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    Premium Materiały
                  </h3>
                  <p className="text-secondary-600">
                    Używamy wyłącznie najwyższej jakości trawy syntetycznej i
                    materiałów instalacyjnych, które są odporne na warunki
                    atmosferyczne, promieniowanie UV i intensywne użytkowanie,
                    zapewniając trwałość i estetykę na lata.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    Kompleksowa Obsługa
                  </h3>
                  <p className="text-secondary-600">
                    Od pierwszej konsultacji, przez projekt i instalację, po
                    obsługę posprzedażową - zapewniamy kompleksowe wsparcie na
                    każdym etapie realizacji, dbając o najdrobniejsze szczegóły
                    i pełną satysfakcję klienta.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Jakość usług GreenTurf" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Gotowy na Transformację?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś, aby omówić swój projekt i otrzymać
              bezpłatną wycenę.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
              Otrzymaj Bezpłatną Wycenę
            </Link>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default ServicesPage;