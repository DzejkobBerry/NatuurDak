import React from 'react';
import CtaSection from '../components/CtaSection';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ShieldIcon, LeafIcon, SunIcon, DropletIcon } from 'lucide-react';
const ServicesPage = () => {
  const mainServices = [{
    title: 'Groene Daken',
    description: 'Wij specialiseren ons in het transformeren van daken in groene, functionele ruimtes met behulp van duurzame groene dakoplossingen, juiste isolatie en drainagesystemen.',
    image: '/images/team.jpg',
    link: '/services/rooftop'
  }, {
    title: 'Groene Gevels',
    description: 'Onze innovatieve oplossingen maken groene gevelinstallatie mogelijk, met behulp van speciale bevestigingssystemen en plantenselectie voor optimale groei.',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/services/groene-gevels'
  }, {
    title: 'Groene Landbedekking',
    description: 'Naast onze specialisatie in dakinstallaties bieden wij ook groene landbedekkingsoplossingen voor tuinen, parken en andere openbare ruimtes.',
    image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    link: '/services/groene-landbedekking'
  }];
  const additionalServices = [{
    icon: <ShieldIcon className="h-12 w-12 text-primary-600" />,
    title: 'Consultaties en Evaluatie',
    description: 'Professionele dakevaluatie voor kunstgrasinstallatie mogelijkheden, rekening houdend met draagkracht, drainage en andere belangrijke factoren.'
  }, {
    icon: <LeafIcon className="h-12 w-12 text-primary-600" />,
    title: 'Ruimte Ontwerp',
    description: 'Uitgebreid ontwerp van dakruimtes, inclusief groene elementen, meubilair en andere decoratieve elementen.'
  }, {
    icon: <SunIcon className="h-12 w-12 text-primary-600" />,
    title: 'Service en Onderhoud',
    description: 'Regelmatige inspecties en onderhoud van geïnstalleerd kunstgras, waardoor langdurige esthetiek en functionaliteit wordt gegarandeerd.'
  }, {
    icon: <DropletIcon className="h-12 w-12 text-primary-600" />,
    title: 'Irrigatiesystemen',
    description: 'Installatie van optionele irrigatiesystemen voor potplanten en groene elementen die het kunstgras aanvullen.'
  }];
  return <div className="w-full">
      {/* SEO Component for Services Page */}
      <SEO 
        title="Onze Diensten - Natuur Dak B.V. | Dakgras & Groene Daken Services"
        description="Ontdek onze complete dienstverlening: groene daken, groene gevels, landbedekking, consultatie en onderhoud. Professionele kunstgras installaties in heel Nederland."
        keywords="dakgras diensten, groene daken service, groene gevels, landbedekking, dak consultatie, kunstgras onderhoud, Nederland"
        canonicalUrl="https://natuurdak.nl/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Natuur Dak Diensten",
          "description": "Complete dienstverlening voor groene daken, gevels en landbedekking",
          "url": "https://natuurdak.nl/services",
          "provider": {
            "@type": "Organization",
            "name": "Natuur Dak B.V.",
            "url": "https://natuurdak.nl"
          },
          "serviceType": ["Groene Daken", "Groene Gevels", "Groene Landbedekking", "Consultatie", "Onderhoud"],
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://natuurdak.nl/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Diensten",
                "item": "https://natuurdak.nl/services"
              }
            ]
          }
        }}
      />
      
      {/* Hero Section */}
      <header className="relative bg-primary-600 py-32" aria-label="Diensten Hero">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/images/team.jpg" 
            alt="Natuur Dak diensten - groene daken en kunstgras installaties" 
            className="w-full h-full object-cover"
            width="1200"
            height="800"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Onze Diensten
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ontdek onze premium kunstgrasinstallatie diensten voor daken en meer
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Services Section */}
          <section className="mb-20" aria-label="Hoofddiensten">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Hoofddiensten
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Gespecialiseerde Kunstgras Oplossingen
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Wij bieden uitgebreide kunstgrasinstallatie diensten, met speciale focus op gespecialiseerde oplossingen voor dakruimtes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainServices.map((service, index) => <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`${service.title} - Natuur Dak dienstverlening`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width="600"
                      height="400"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {service.description}
                    </p>
                    <Link 
                      to={service.link} 
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                      title={`Meer informatie over ${service.title}`}
                    >
                      Lees meer{' '}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </article>)}
            </div>
          </section>
          {/* Additional Services Section */}
          <section className="mb-20 bg-secondary-50 py-16 px-6 rounded-xl" aria-label="Aanvullende Diensten">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Aanvullende Diensten
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Uitgebreide Ondersteuning
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Naast onze hoofdinstallatie diensten bieden wij een reeks aanvullende diensten die uitgebreide service en ondersteuning garanderen in elke fase van het project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => <article key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600">{service.description}</p>
                </article>)}
            </div>
          </section>
          {/* Why Choose Us Section */}
          <section className="mb-16" aria-label="Waarom Natuur Dak">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Waarom Wij
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Wat Onze Diensten Onderscheidt
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Onze specialisatie in dakinstallaties, ervaring en toewijding aan kwaliteit maken ons tot marktleider in de branche.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    Gespecialiseerde Kennis
                  </h3>
                  <p className="text-secondary-600">
                    Ons team heeft unieke ervaring en kennis in kunstgrasinstallaties op daken, waardoor we zelfs de meest veeleisende projecten kunnen realiseren met de hoogste precisie en veiligheid.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    Premium Materialen
                  </h3>
                  <p className="text-secondary-600">
                    Wij gebruiken uitsluitend kunstgras en installatiematerialen van de hoogste kwaliteit, die bestand zijn tegen weersomstandigheden, UV-straling en intensief gebruik, waardoor duurzaamheid en esthetiek voor jaren gegarandeerd zijn.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    Uitgebreide Service
                  </h3>
                  <p className="text-secondary-600">
                    Van de eerste consultatie, via ontwerp en installatie, tot naverkoop service - wij bieden uitgebreide ondersteuning in elke fase van de realisatie, waarbij we aandacht besteden aan de kleinste details en volledige klanttevredenheid.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Natuur Dak kwaliteit dienstverlening - groene daken expertise" 
                    className="w-full h-auto object-cover"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="text-center" aria-label="Call to Action">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Klaar voor Transformatie?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Neem vandaag nog contact met ons op om uw project te bespreken en een gratis offerte te ontvangen.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
              title="Contact opnemen voor gratis offerte"
            >
              Ontvang Gratis Offerte
            </Link>
          </section>
        </div>
      </main>
      <CtaSection />
    </div>;
};
export default ServicesPage;