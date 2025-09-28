import React from 'react';
import CtaSection from '../../components/CtaSection';
import { CheckCircleIcon } from 'lucide-react';
const RooftopServicePage = () => {
  const benefits = [
    'Verhoogt de waarde van het onroerend goed door extra gebruiksruimte',
    'Uitstekende thermische en akoestische isolatie van het dak',
    'Vermindering van het stedelijke hitte-eilandeffect',
    'Geen noodzaak voor regelmatig sproeien en maaien',
    'Bestand tegen moeilijke weersomstandigheden en intense zonnestraling',
    'Mogelijkheid om de ruimte het hele jaar door te gebruiken',
    'Lange levensduur - minimaal 10 jaar zonder kleur- en elasticiteitsverlies',
    'Allergievriendelijk - geen pollen en allergenen'
  ];
  const applications = [{
    title: 'Dakterrassen',
    description: 'Transformeer uw platte dak in een prachtige recreatieruimte met een zachte, groene ondergrond.',
    image: 'https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    title: 'Hellende Daken',
    description: 'Gespecialiseerde oplossingen voor hellende daken met het juiste bevestigings- en drainagesysteem.',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    title: 'Daktuinen',
    description: 'Creëer een uitgebreide daktuin met kunstgras als basis voor aanvullende elementen.',
    image: 'https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Kunstgras op het dak" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Kunstgras op Daken
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transformeer uw dak in een prachtige groene oase met onze
            gespecialiseerde oplossingen
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Waarom Kiezen voor Kunstgras op het Dak?
            </h2>
            <p className="text-lg text-secondary-600 mb-10 max-w-4xl mx-auto text-center">
              Kunstgras op het dak is een innovatieve oplossing die esthetiek
              combineert met functionaliteit, en biedt een reeks voordelen voor
              eigenaren van onroerend goed. Onze gespecialiseerde systemen zijn
              ontworpen met het oog op de unieke uitdagingen van dakinstallaties.
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
              Onze Gespecialiseerde Dakoplossingen
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
              Ons Installatieproces op Daken
            </h3>
            <p className="text-secondary-600 mb-6">
              De installatie van kunstgras op het dak vereist gespecialiseerde
              kennis en ervaring. Ons proces omvat:
            </p>
            <ol className="space-y-4 text-secondary-700">
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  1
                </span>
                <p>
                  <strong>Evaluatie van de dakconstructie</strong> - analyse van
                  draagkracht, drainagesysteem en algemene staat van het dak
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  2
                </span>
                <p>
                  <strong>Voorbereiding van het oppervlak</strong> - reiniging,
                  egalisatie en bescherming van het dakoppervlak
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  3
                </span>
                <p>
                  <strong>Installatie van het drainagesysteem</strong> - zorgen
                  voor waterafvoer en bescherming tegen vocht
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  4
                </span>
                <p>
                  <strong>Montage van schokabsorberende onderlaag</strong> - voor
                  verhoogd comfort en duurzaamheid van de installatie
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  5
                </span>
                <p>
                  <strong>Leggen van kunstgras</strong> - nauwkeurige aanpassing
                  en bevestiging aan het oppervlak
                </p>
              </li>
              <li className="flex items-start">
                <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  6
                </span>
                <p>
                  <strong>Afwerking en borstelen</strong> - natuurlijke uitstraling
                  geven en eindcontrole
                </p>
              </li>
            </ol>
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
export default RooftopServicePage;