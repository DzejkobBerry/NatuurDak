import React from 'react';
import CtaSection from '../../components/CtaSection';
import { CheckCircleIcon } from 'lucide-react';

const CustomServicePage = () => {
  const customProjects = [
    {
      title: 'Daktuinen',
      description: 'Uitgebreide daktuinprojecten die kunstgras combineren met potplanten, elementen van kleine architectuur en irrigatiesystemen.',
      image: 'https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Groene Terrassen',
      description: 'Transformatie van terrassen in groene, functionele recreatieruimtes met gebruik van kunstgras en andere decoratieve elementen.',
      image: '/images/team.jpg'
    },
    {
      title: 'Sportoppervlakken',
      description: 'Gespecialiseerde kunstgrasinstallaties voor mini-velden, golfzones en andere sportoppervlakken op daken en in grondoppervlakken.',
      image: 'https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Zones voor Dieren',
      description: 'Toegewijde kunstgrasruimtes voor huisdieren, die een veilige en hygiënische speelplek bieden.',
      image: 'https://images.unsplash.com/photo-1596491123074-fd69f5daa929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    }
  ];
  const clientTypes = [{
    type: 'Huiseigenaren',
    description: 'Wij realiseren projecten voor eigenaren van eengezinswoningen en appartementen die unieke groene ruimtes willen creëren op daken, terrassen of in tuinen.',
    examples: ['Privé dakterrassen', 'Huistuinen', 'Recreatiezones']
  }, {
    type: 'Bedrijven en Corporaties',
    description: 'Wij creëren groene ruimtes voor bedrijven en corporaties die hun werknemers ontspannings- en integratieplekken willen bieden op de daken van kantoorgebouwen.',
    examples: ['Ontspanningszones voor werknemers', 'Groene daken van kantoorgebouwen', 'Evenementenruimtes']
  }, {
    type: 'Hotels en Restaurants',
    description: 'Wij ontwerpen en installeren kunstgras in hotels en restaurants, waarbij we aantrekkelijke ruimtes voor gasten creëren op daken, terrassen en in tuinen.',
    examples: ['Uitzichtterrassen', 'Loungezones', 'Restauranttuinen']
  }, {
    type: 'Ontwikkelaars',
    description: 'Wij werken samen met ontwikkelaars bij het creëren van toegevoegde waarde voor woon- en commerciële investeringen door kunstgras te installeren op daken en in gemeenschappelijke ruimtes.',
    examples: ['Gemeenschappelijke daken in woongebouwen', 'Recreatiegebieden van wijken', 'Ontspanningszones in kantoorComplexen']
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Niestandardowe projekty z trawy syntetycznej" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Maatwerk Kunstgrasprojecten
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Op maat gemaakte oplossingen voor uw unieke behoeften en vereisten
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Onze Benadering van Maatwerk Projecten
            </h2>
            <p className="text-lg text-secondary-600 mb-10 max-w-4xl mx-auto text-center">
              Bij Natuur Dak begrijpen we dat elke ruimte uniek is en een
              individuele benadering vereist. Onze maatwerk kunstgrasprojecten
              worden gecreëerd met uw specifieke behoeften,
              esthetische voorkeuren en ruimtelijke beperkingen in gedachten.
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
                  <img src="https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Proces van realisatie van maatwerk projecten" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Voorbeelden van Maatwerk Projecten
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
              Voor Wie Realiseren Wij Projecten
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
              Klaar om Uw Unieke Project te Realiseren?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Neem vandaag nog contact met ons op om uw ideeën te bespreken en
              het proces van het creëren van een unieke ruimte met kunstgras
              te starten.
            </p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg">
              Plan Gratis Consultatie
            </a>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default CustomServicePage;