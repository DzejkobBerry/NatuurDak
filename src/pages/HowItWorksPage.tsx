import React from 'react';
import CtaSection from '../components/CtaSection';
import { Link } from 'react-router-dom';
import { ClipboardIcon, RulerIcon, Shovel, ThumbsUpIcon, PhoneIcon, MailIcon } from 'lucide-react';
import { usePhoneModal } from '../contexts/PhoneModalContext';
const HowItWorksPage = () => {
  const { openPhoneModal } = usePhoneModal();
  const processSteps = [{
    number: 1,
    title: 'Gratis Consultatie en Evaluatie',
    description: 'Het proces begint met een gratis consultatie waarin we uw behoeften, voorkeuren en budget bespreken. We voeren een grondige evaluatie uit van het dak of andere ruimte, waarbij we de draagkracht, drainagesysteem, zonexpositie en andere belangrijke factoren analyseren.',
    icon: <ClipboardIcon size={40} className="text-primary-600" />,
    details: ['Analyse van klantbehoeften en verwachtingen', 'Technische evaluatie van de ruimte (draagkracht, drainage, expositie)', 'Bespreking van beschikbare kunstgrastypes', 'Voorlopige kostenraming en tijdschema']
  }, {
    number: 2,
    title: 'Gedetailleerd Ontwerp en Offerte',
    description: 'Op basis van de consultatie en metingen bereidt ons ontwerpteam een gedetailleerd ontwerp en nauwkeurige offerte voor. We presenteren verschillende opties voor kunstgras, onderlaagmaterialen en extra elementen om u te helpen de beste beslissing te nemen.',
    icon: <RulerIcon size={40} className="text-primary-600" />,
    details: ['Voorbereiding van gedetailleerd technisch ontwerp', 'Selectie van juiste materialen en accessoires', 'Nauwkeurige kostencalculatie met transparante verdeling', 'Vaststelling van werkschema']
  }, {
    number: 3,
    title: 'Professionele Installatie',
    description: 'Na goedkeuring van het ontwerp en de offerte gaat ons gespecialiseerde installatieteam aan de slag. Het installatieproces omvat voorbereiding van het oppervlak, montage van drainagesystemen, leggen van kunstgras en nauwkeurige afwerking, waarbij de hoogste kwaliteit van uitvoering wordt gegarandeerd.',
    icon: <Shovel size={40} className="text-primary-600" />,
    details: ['Voorbereiding van het oppervlak (reiniging, egalisatie)', 'Montage van drainagesystemen en onderlagen', 'Nauwkeurig leggen van kunstgras', 'Verbinden en bevestigen van materiaal', 'Afwerking van randen en details']
  }, {
    number: 4,
    title: 'Oplevering en Nazorg',
    description: 'Na voltooiing van de installatie voeren we een gedetailleerde inspectie uit met uw deelname om ervoor te zorgen dat alles aan uw verwachtingen voldoet. We verstrekken informatie over onderhoud en verzorging en bieden nazorg en garantie op onze diensten en materialen.',
    icon: <ThumbsUpIcon size={40} className="text-primary-600" />,
    details: ['Eindcontrole met deelname van de klant', 'Instructies voor onderhoud en verzorging', 'Overhandiging van garantiedocumenten', 'Verzekering van nazorg']
  }];
  const faqs = [{
    question: 'Hoe lang duurt het installatieproces van kunstgras op het dak?',
    answer: 'De installatietijd hangt af van de grootte en complexiteit van het project. Een typische installatie op een dak van 50-100 m² duurt 2 tot 4 dagen. Grotere of meer complexe projecten kunnen meer tijd vergen. Het exacte tijdschema wordt vastgesteld tijdens de ontwerpfase.'
  }, {
    question: 'Heeft kunstgras op het dak een speciaal drainagesysteem nodig?',
    answer: 'Ja, installatie van kunstgras op het dak vereist een geschikt drainagesysteem dat zorgt voor efficiënte waterafvoer en voorkomt dat water zich ophoopt. Ons team ontwerpt en installeert gespecialiseerde drainagesystemen aangepast aan de specificaties van het dak en lokale weersomstandigheden.'
  }, {
    question: 'Wat is het gewicht van kunstgras en kan mijn dak zo\'n belasting aan?',
    answer: 'Kunstgrassystemen voor daken zijn relatief licht en wegen meestal 15 tot 30 kg/m² (inclusief onderlaag en vulling). Tijdens de consultatie en technische evaluatie analyseren we de draagkracht van het dak om ervoor te zorgen dat het de geplande installatie veilig kan dragen.'
  }, {
    question: 'Hoe lang gaat kunstgras op het dak mee?',
    answer: 'Bij juiste installatie en minimaal onderhoud kan hoogwaardig kunstgras op het dak 10-15 jaar meegaan zonder kleur- en veerkrachtverlies. We bieden producten met fabrieksgarantie, die meestal 8-10 jaar bedraagt, afhankelijk van het gekozen grastype.'
  }, {
    question: 'Kan ik meubels en andere elementen op kunstgras op het dak plaatsen?',
    answer: 'Ja, kunstgras op het dak kan tuinmeubels, plantenbakken en andere decoratieve elementen dragen. Tijdens het ontwerp houden we rekening met geplande belastingen en versterken we indien nodig de onderlaag op plaatsen waar zwaardere elementen komen te staan.'
  }, {
    question: 'Hoe ziet het onderhoud van kunstgras op het dak eruit?',
    answer: 'Kunstgras op het dak vereist minimaal onderhoud. We raden aan om regelmatig bladeren en ander vuil te verwijderen met een bladblazer of hark met zachte tanden en periodiek te spoelen met water. Bij intensief gebruikte gebieden kan incidenteel borstelen nodig zijn om de vezels rechtop te houden.'
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Kunstgras installatieproces" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Hoe Wij Werken
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ons gestroomlijnde proces van consultatie tot installatie
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Process Overview */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Ons Proces
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                De Weg naar Uw Groene Ruimte
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Bij Natuur Dak hebben we een transparant, efficiënt proces
                gecreëerd dat een soepele overgang garandeert van de eerste
                consultatie tot de uiteindelijke installatie en tevredenheid
                met uw nieuwe groene ruimte.
              </p>
            </div>
            {/* Process Steps */}
            <div className="max-w-5xl mx-auto">
              {processSteps.map((step, index) => <div key={index} className="mb-16">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-100 rounded-full h-32 w-32 flex items-center justify-center relative">
                        <div className="absolute -top-2 -right-2 bg-primary-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                          {step.number}
                        </div>
                        <div>{step.icon}</div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-secondary-600 mb-6">
                        {step.description}
                      </p>
                      <div className="bg-secondary-50 p-6 rounded-lg">
                        <h4 className="font-bold text-secondary-800 mb-3">
                          Wat deze fase omvat:
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => <li key={i} className="flex items-start">
                              <span className="bg-primary-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                                {i + 1}
                              </span>
                              <p className="text-secondary-700">{detail}</p>
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          {/* FAQ Section */}
          <div className="mb-20 bg-secondary-50 py-16 px-6 rounded-xl">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Veelgestelde Vragen
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Antwoorden op de meest gestelde vragen over ons
                installatieproces van kunstgras op daken.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600">{faq.answer}</p>
                </div>)}
            </div>
          </div>
          {/* Get Started Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">
              Klaar om het Proces te Starten?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-secondary-600 mb-8">
              Neem vandaag nog contact met ons op om een gratis consultatie in
              te plannen en begin uw reis naar uw ideale groene ruimte op het
              dak.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center">
                <MailIcon className="mr-2 h-5 w-5" /> Plan Online Consultatie
              </Link>
              <button 
                onClick={openPhoneModal}
                className="px-8 py-4 bg-secondary-700 text-white font-medium rounded-md hover:bg-secondary-800 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center"
              >
                <PhoneIcon className="mr-2 h-5 w-5" /> Bel Nu
              </button>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default HowItWorksPage;