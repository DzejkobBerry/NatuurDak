import React from 'react';
import CtaSection from '../../components/CtaSection';
import { CheckCircleIcon } from 'lucide-react';
const GroundServicePage = () => {
  const benefits = [
    'Eliminatie van de noodzaak om te maaien, sproeien en bemesten',
    'Ideale oplossing voor schaduwrijke plekken waar natuurlijk gras niet goed groeit',
    'Veilige en zachte ondergrond voor kinderen en huisdieren',
    'Geen problemen met modder, plassen en ongelijke terreinen',
    'Bestand tegen intensief gebruik en moeilijke weersomstandigheden',
    'Mogelijkheid om het gazon het hele jaar door te gebruiken, ongeacht het weer',
    'Allergievriendelijk - geen pollen en allergenen',
    'Waterbesparing en eliminatie van de noodzaak voor pesticiden'
  ];
  const applications = [{
    title: 'Huistuinen',
    description: 'Transformeer uw tuin in een perfect, altijd groen gazon dat er het hele jaar door fris uitziet zonder de moeite van onderhoud.',
    image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    title: 'Speelplaatsen',
    description: 'Veilige en zachte ondergrond voor speelplaatsen, die schokdemping bij vallen biedt en het probleem van modder en plassen elimineert.',
    image: 'https://images.unsplash.com/photo-1596491123074-fd69f5daa929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    title: 'Recreatiezones',
    description: 'Ideale oplossing voor recreatiezones, terrassen, patio\'s en andere ruimtes waar u wilt genieten van groen zonder de noodzaak van onderhoud.',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Kunstgras op de grond" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Kunstgras voor Grondoppervlakken
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Perfecte, onderhoudsvrije gazons voor elke grondoppervlakte
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Waarom Kiezen voor Kunstgras?
            </h2>
            <p className="text-lg text-secondary-600 mb-10 max-w-4xl mx-auto text-center">
              Kunstgras is een moderne, praktische en esthetische
              oplossing voor mensen die de schoonheid van een natuurlijk gazon waarderen zonder
              de noodzaak van regelmatig onderhoud. Onze hoogwaardige
              producten bieden vele voordelen in vergelijking met traditionele
              gazons.
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
              Populaire Toepassingen
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
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">
                  Ons Installatieproces
                </h2>
                <p className="text-lg text-secondary-600 mb-6">
                  Onze installatie van kunstgras voor grondoppervlakken
                  omvat verschillende belangrijke stappen, die een
                  duurzaam en esthetisch resultaat garanderen:
                </p>
                <ol className="space-y-4 text-secondary-700">
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <p>
                      <strong>Terreinvoorbereiding</strong> - verwijdering van oud
                      gras, egalisatie van het oppervlak en zorgen voor adequate
                      drainage
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <p>
                      <strong>Installatie van de basislaag</strong> - leggen van
                      geotextiel en grindlaag voor stabiliteit
                      en drainage
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <p>
                      <strong>Leggen van het gras</strong> - nauwkeurig uitrollen,
                      snijden en verbinden van het materiaal
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      4
                    </span>
                    <p>
                      <strong>Bevestiging en afwerking</strong> - beveiligen van
                      randen en bevestiging aan de ondergrond
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      5
                    </span>
                    <p>
                      <strong>Opvullen met kwartszand</strong> - voor
                      stabilisatie en natuurlijke uitstraling
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      6
                    </span>
                    <p>
                      <strong>Borstelen en eindcontrole</strong> -
                      natuurlijke uitstraling geven en kwaliteitscontrole
                    </p>
                  </li>
                </ol>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Proces instalacji trawy syntetycznej" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Verzorging en Onderhoud
            </h3>
            <p className="text-secondary-600 mb-6">
              Hoewel kunstgras praktisch onderhoudsvrij is, helpen enkele
              eenvoudige handelingen om de mooie uitstraling jarenlang te behouden:
            </p>
            <ul className="space-y-3 text-secondary-700">
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p>
                  Regelmatig verwijderen van bladeren en ander vuil met behulp van
                  een hark met zachte tanden of een bladblazer
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p>
                  Periodiek spoelen met water om stof en kleine
                  vervuiling te verwijderen
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p>
                  Borstelen van het gras tegen de richting van de vezels in
                  bij plaatsen met intensief verkeer
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p>Vlekken verwijderen met milde detergenten en water</p>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg">
              Plan Gratis Consultatie
            </a>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default GroundServicePage;