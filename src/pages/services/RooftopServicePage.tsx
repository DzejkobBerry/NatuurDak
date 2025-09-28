import React from 'react';
import CtaSection from '../../components/CtaSection';
import { CheckCircleIcon } from 'lucide-react';
const RooftopServicePage = () => {
  const benefits = ['Zwiększenie wartości nieruchomości dzięki dodatkowej przestrzeni użytkowej', 'Doskonała izolacja termiczna i akustyczna dachu', 'Redukcja efektu miejskiej wyspy ciepła', 'Brak konieczności regularnego podlewania i koszenia', 'Odporność na trudne warunki atmosferyczne i intensywne nasłonecznienie', 'Możliwość korzystania z przestrzeni przez cały rok', 'Długa żywotność - minimum 10 lat bez utraty koloru i sprężystości', 'Przyjazna dla alergików - brak pyłków i alergenów'];
  const applications = [{
    title: 'Tarasy Dachowe',
    description: 'Przekształć płaski dach w piękną przestrzeń rekreacyjną z miękką, zieloną powierzchnią.',
    image: 'https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    title: 'Dachy Skośne',
    description: 'Specjalistyczne rozwiązania dla dachów skośnych z odpowiednim systemem mocowań i drenażu.',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    title: 'Ogrody na Dachu',
    description: 'Stwórz kompleksowy ogród dachowy z trawą syntetyczną jako bazą dla dodatkowych elementów.',
    image: 'https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Trawa syntetyczna na dachu" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Trawa Syntetyczna na Dachach
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Przekształć swój dach w piękną zieloną oazę dzięki naszym
            specjalistycznym rozwiązaniom
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Dlaczego Warto Wybrać Trawę Syntetyczną na Dach?
            </h2>
            <p className="text-lg text-secondary-600 mb-10 max-w-4xl mx-auto text-center">
              Trawa syntetyczna na dachu to innowacyjne rozwiązanie, które łączy
              estetykę z praktycznością, oferując szereg korzyści dla
              właścicieli nieruchomości. Nasze specjalistyczne systemy są
              zaprojektowane z myślą o wyjątkowych wyzwaniach, jakie stawiają
              instalacje dachowe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start bg-secondary-50 p-4 rounded-lg">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-secondary-700">{benefit}</p>
                </div>)}
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Nasze Specjalistyczne Rozwiązania Dachowe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {applications.map((app, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {app.title}
                    </h3>
                    <p className="text-secondary-600">{app.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="bg-secondary-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Nasz Proces Instalacji na Dachach
            </h3>
            <p className="text-secondary-600 mb-6">
              Instalacja trawy syntetycznej na dachu wymaga specjalistycznej
              wiedzy i doświadczenia. Nasz proces obejmuje:
            </p>
            <ol className="space-y-4 text-secondary-700">
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  1
                </span>
                <p>
                  <strong>Ocena konstrukcji dachu</strong> - analiza nośności,
                  systemu drenażowego i ogólnego stanu dachu
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  2
                </span>
                <p>
                  <strong>Przygotowanie powierzchni</strong> - czyszczenie,
                  wyrównanie i zabezpieczenie powierzchni dachu
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  3
                </span>
                <p>
                  <strong>Instalacja systemu drenażowego</strong> - zapewnienie
                  odpływu wody i ochrony przed wilgocią
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  4
                </span>
                <p>
                  <strong>Montaż podkładu amortyzującego</strong> - dla
                  zwiększenia komfortu i trwałości instalacji
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  5
                </span>
                <p>
                  <strong>Układanie trawy syntetycznej</strong> - precyzyjne
                  dopasowanie i mocowanie do powierzchni
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  6
                </span>
                <p>
                  <strong>Wykończenie i szczotkowanie</strong> - nadanie
                  naturalnemu wyglądowi i ostateczne sprawdzenie
                </p>
              </li>
            </ol>
          </div>
          <div className="text-center">
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg">
              Umów Bezpłatną Konsultację
            </a>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default RooftopServicePage;