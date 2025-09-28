import React from 'react';
import CtaSection from '../../components/CtaSection';
import { CheckCircleIcon } from 'lucide-react';
const CustomServicePage = () => {
  const customProjects = [{
    title: 'Ogrody Dachowe',
    description: 'Kompleksowe projekty ogrodów na dachach, łączące trawę syntetyczną z roślinami doniczkowymi, elementami małej architektury i systemami nawadniania.',
    image: 'https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    title: 'Zielone Tarasy',
    description: 'Przekształcenie tarasów w zielone, funkcjonalne przestrzenie wypoczynkowe z wykorzystaniem trawy syntetycznej i innych elementów aranżacyjnych.',
    image: 'https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    title: 'Powierzchnie Sportowe',
    description: 'Specjalistyczne instalacje trawy syntetycznej dla mini boisk, stref golfowych i innych powierzchni sportowych na dachach i w przestrzeniach przyziemnych.',
    image: 'https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    title: 'Strefy dla Zwierząt',
    description: 'Dedykowane przestrzenie z trawy syntetycznej dla zwierząt domowych, zapewniające bezpieczne i higieniczne miejsce do zabawy.',
    image: 'https://images.unsplash.com/photo-1596491123074-fd69f5daa929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }];
  const clientTypes = [{
    type: 'Właściciele Domów',
    description: 'Realizujemy projekty dla właścicieli domów jednorodzinnych i apartamentów, którzy chcą stworzyć wyjątkowe przestrzenie zielone na dachach, tarasach lub w ogrodach.',
    examples: ['Prywatne tarasy dachowe', 'Ogrody przydomowe', 'Strefy wypoczynkowe']
  }, {
    type: 'Firmy i Korporacje',
    description: 'Tworzymy zielone przestrzenie dla firm i korporacji, które chcą zapewnić swoim pracownikom miejsca relaksu i integracji na dachach budynków biurowych.',
    examples: ['Strefy relaksu dla pracowników', 'Zielone dachy biurowców', 'Przestrzenie eventowe']
  }, {
    type: 'Hotele i Restauracje',
    description: 'Projektujemy i instalujemy trawę syntetyczną w hotelach i restauracjach, tworząc atrakcyjne przestrzenie dla gości na dachach, tarasach i w ogrodach.',
    examples: ['Tarasy widokowe', 'Strefy lounge', 'Ogrody restauracyjne']
  }, {
    type: 'Deweloperzy',
    description: 'Współpracujemy z deweloperami przy tworzeniu wartości dodanej dla inwestycji mieszkaniowych i komercyjnych poprzez instalację trawy syntetycznej na dachach i w przestrzeniach wspólnych.',
    examples: ['Dachy wspólne w budynkach mieszkalnych', 'Tereny rekreacyjne osiedli', 'Strefy wypoczynkowe w kompleksach biurowych']
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Niestandardowe projekty z trawy syntetycznej" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Niestandardowe Projekty z Trawy Syntetycznej
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Dostosowane rozwiązania dla Twoich unikalnych potrzeb i wymagań
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Nasze Podejście do Projektów Niestandardowych
            </h2>
            <p className="text-lg text-secondary-600 mb-10 max-w-4xl mx-auto text-center">
              W GreenTurf rozumiemy, że każda przestrzeń jest unikalna i wymaga
              indywidualnego podejścia. Nasze niestandardowe projekty z trawy
              syntetycznej są tworzone z myślą o Twoich konkretnych potrzebach,
              preferencjach estetycznych i ograniczeniach przestrzennych.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Proces Realizacji Projektów Niestandardowych
                </h3>
                <ol className="space-y-4 text-secondary-700">
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <p>
                      <strong>Konsultacja i Analiza Potrzeb</strong> -
                      szczegółowa rozmowa o Twoich oczekiwaniach, preferencjach
                      i ograniczeniach przestrzennych
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <p>
                      <strong>Wizja Lokalna i Pomiary</strong> - dokładna ocena
                      przestrzeni, analiza technicznych możliwości i ograniczeń
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <p>
                      <strong>Projekt Koncepcyjny</strong> - przygotowanie
                      wstępnej koncepcji, uwzględniającej trawę syntetyczną i
                      dodatkowe elementy
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      4
                    </span>
                    <p>
                      <strong>Szczegółowy Projekt i Wycena</strong> -
                      opracowanie szczegółowego projektu z dokładną wyceną i
                      harmonogramem
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      5
                    </span>
                    <p>
                      <strong>Realizacja Projektu</strong> - profesjonalna
                      instalacja trawy syntetycznej i wszystkich dodatkowych
                      elementów
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      6
                    </span>
                    <p>
                      <strong>Odbiór i Wsparcie</strong> - końcowy odbiór
                      projektu i zapewnienie wsparcia posprzedażowego
                    </p>
                  </li>
                </ol>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Proces realizacji projektów niestandardowych" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Przykłady Projektów Niestandardowych
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {customProjects.map((project, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary-600">{project.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="mb-16 bg-secondary-50 py-12 px-6 rounded-xl">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Dla Kogo Realizujemy Projekty
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {clientTypes.map((client, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {client.type}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {client.description}
                  </p>
                  <h4 className="font-medium text-secondary-900 mb-2">
                    Przykładowe Realizacje:
                  </h4>
                  <ul className="space-y-1">
                    {client.examples.map((example, i) => <li key={i} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-secondary-700">{example}</p>
                      </li>)}
                  </ul>
                </div>)}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Dlaczego Warto Wybrać Nasze Niestandardowe Rozwiązania
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  Indywidualne Podejście
                </h3>
                <p className="text-secondary-600">
                  Każdy projekt traktujemy indywidualnie, dostosowując
                  rozwiązania do Twoich unikalnych potrzeb i przestrzeni, aby
                  osiągnąć najlepszy możliwy efekt.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  Kompleksowa Realizacja
                </h3>
                <p className="text-secondary-600">
                  Zajmujemy się całym projektem od A do Z, zapewniając nie tylko
                  instalację trawy syntetycznej, ale także wszystkich
                  dodatkowych elementów.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  Doświadczenie i Innowacyjność
                </h3>
                <p className="text-secondary-600">
                  Łączymy wieloletnie doświadczenie z innowacyjnym podejściem,
                  aby tworzyć unikalne przestrzenie, które przewyższają
                  oczekiwania naszych klientów.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Gotowy na Realizację Swojego Unikalnego Projektu?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś, aby omówić swoje pomysły i
              rozpocząć proces tworzenia wyjątkowej przestrzeni z trawą
              syntetyczną.
            </p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg">
              Umów Bezpłatną Konsultację
            </a>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default CustomServicePage;