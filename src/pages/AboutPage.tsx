import React from 'react';
import CtaSection from '../components/CtaSection';
import SEO from '../components/SEO';
import { CheckCircleIcon, UserIcon, TrophyIcon, HeartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const AboutPage = () => {
  const teamMembers = [{
    name: 'Jan Kowalski',
    position: 'Oprichter en Directeur',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Met meer dan 15 jaar ervaring in de branche richtte Jan Natuur Dak op uit passie voor het transformeren van onbenutte dakruimtes in groene oases.'
  }, {
    name: 'Anna Nowak',
    position: 'Hoofdontwerper',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    bio: 'Anna combineert kennis van landschapsarchitectuur met gespecialiseerde ervaring in dakprojecten, waarbij ze innovatieve en functionele ruimtes creëert.'
  }, {
    name: 'Tomasz Wiśniewski',
    position: 'Technisch Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    bio: 'Tomasz specialiseert zich in de technische aspecten van dakinstallaties en zorgt ervoor dat elk project wordt uitgevoerd met de hoogste precisie en veiligheid.'
  }, {
    name: 'Marta Kowalczyk',
    position: 'Klantenservice Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    bio: 'Marta zorgt ervoor dat elke klant uitzonderlijke service ontvangt van de eerste consultatie tot de definitieve installatie en daarna.'
  }];
  const values = [{
    icon: <UserIcon className="h-10 w-10 text-primary-600" />,
    title: 'Klantgericht',
    description: 'Wij luisteren naar uw behoeften en passen onze oplossingen aan uw specifieke vereisten aan.'
  }, {
    icon: <TrophyIcon className="h-10 w-10 text-primary-600" />,
    title: 'Excellentie',
    description: 'Wij streven naar de hoogste kwaliteitsnormen in elk aspect van ons werk.'
  }, {
    icon: <HeartIcon className="h-10 w-10 text-primary-600" />,
    title: 'Passie',
    description: 'Onze passie voor groene ruimtes drijft ons om innovatieve en duurzame oplossingen te creëren.'
  }];
  return <div className="w-full">
      {/* SEO Component for About Page */}
      <SEO 
        title="Over Natuur Dak B.V. - Experts in Dakgras en Groene Daken"
        description="Leer meer over Natuur Dak B.V., marktleider in dakgras installaties sinds 2013. Ontmoet ons team van experts en ontdek onze missie voor groene dakoplossingen."
        keywords="over natuur dak, dakgras experts, groene daken specialist, team, geschiedenis, missie"
        canonicalUrl="https://natuurdak.nl/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Over Natuur Dak B.V.",
          "description": "Informatie over Natuur Dak B.V., specialist in dakgras en groene dakoplossingen",
          "url": "https://natuurdak.nl/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "Natuur Dak B.V.",
            "foundingDate": "2013",
            "numberOfEmployees": "25",
            "description": "Specialist in dakgras installaties en groene dakoplossingen"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://natuurdak.nl"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Over Ons",
                "item": "https://natuurdak.nl/about"
              }
            ]
          }
        }}
      />
      
      {/* Hero Section */}
      <header className="relative bg-primary-600 py-32" aria-label="Over Natuur Dak Hero">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Groene dakinstallatie met kunstgras - Natuur Dak expertise" 
            className="w-full h-full object-cover"
            width="2070"
            height="1380"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Over Natuur Dak
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Leer meer over ons bedrijf, missie en toewijding aan kwaliteit
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story Section */}
          <section className="mb-20" aria-label="Onze Geschiedenis">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Onze Geschiedenis
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Van Visie tot Werkelijkheid
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/images/team.jpg" 
                    alt="Natuur Dak team aan het werk - geschiedenis van het bedrijf sinds 2013" 
                    className="w-full h-auto object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-3xl font-bold">2013</p>
                  <p className="text-sm uppercase tracking-wider">
                    Oprichtingsjaar
                  </p>
                </div>
              </div>
              <div>
                <p className="text-lg text-secondary-600 mb-6">
                  Natuur Dak begon in 2013 als een bedrijf gespecialiseerd in
                  kunstgrasinstallaties voor verschillende toepassingen. In de
                  loop der jaren merkten we een groeiende vraag naar
                  gespecialiseerde oplossingen voor dakruimtes, vooral in
                  stedelijke gebieden waar groen van onschatbare waarde is.
                </p>
                <p className="text-lg text-secondary-600 mb-6">
                  Ons team van experts heeft gespecialiseerde kennis opgebouwd
                  in dakinstallaties, waarbij we unieke uitdagingen oplossen
                  gerelateerd aan gewicht, drainage en blootstelling aan
                  weersomstandigheden. Vandaag zijn we er trots op dat we
                  marktleider zijn, gespecialiseerd in het transformeren van
                  onbenutte dakruimtes in prachtige, functionele en
                  milieuvriendelijke groene oases.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700">
                      Meer dan 500 voltooide dakprojecten
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700">
                      Team van 25 gespecialiseerde experts
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700">
                      Service voor projecten in heel Nederland en België
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Our Mission Section */}
          <section className="mb-20 bg-secondary-50 py-16 px-6 rounded-xl" aria-label="Onze Missie">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Onze Missie
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Transformatie van Dakruimtes
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Onze missie is eenvoudig maar ambitieus: onbenutte dakruimtes transformeren in groene, functionele en esthetische omgevingen die de waarde van onroerend goed verhogen en de levenskwaliteit in steden verbeteren.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => <article key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600">{value.description}</p>
                </article>)}
            </div>
          </section>
          
          {/* Our Team Section */}
          <section className="mb-16" aria-label="Ons Team">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Ons Team
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Ontmoet de Experts
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Achter elk succesvol project staat een team van toegewijde professionals. Ontmoet de belangrijkste leden van ons team die Natuur Dak tot een marktleider in de branche maken.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.position} bij Natuur Dak B.V.`} 
                      className="w-full h-full object-cover"
                      width="300"
                      height="256"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-secondary-600">{member.bio}</p>
                  </div>
                </article>)}
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="text-center" aria-label="Contact Call to Action">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Klaar voor Samenwerking?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Ons team van experts staat klaar om u te helpen bij het transformeren van uw dakruimte in een groene oase.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
              title="Neem contact op met Natuur Dak voor een gratis offerte"
            >
              Neem Contact Met Ons Op
            </Link>
          </section>
        </div>
      </main>
      <CtaSection />
    </div>;
};
export default AboutPage;