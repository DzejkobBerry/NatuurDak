import React, { useState } from 'react';
import CtaSection from '../components/CtaSection';
import SEO from '../components/SEO';
import { StarIcon, ThumbsUpIcon, CheckCircleIcon } from 'lucide-react';
const ReviewsPage = () => {
  const categories = ['Alle', 'Platte Daken', 'Hellende Daken', 'Terrassen', 'Daktuinen', 'Maatwerk Projecten'];
  const [activeCategory, setActiveCategory] = useState('Alle');
  const reviews = [{
    id: 1,
    name: 'Emma van der Berg',
    role: 'Appartement Eigenaar',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Platte Daken',
    date: '12.06.2023',
    title: 'Prachtig Sedumtak voor ons appartement',
    content: 'We hebben gekozen voor een Sedumtak van NatuurDak en zijn er ontzettend blij mee! Het ziet er niet alleen prachtig uit, maar helpt ook bij de isolatie van ons appartement. Het team was zeer professioneel en legde alles duidelijk uit over het onderhoud. Na een jaar ziet het dak er nog steeds fantastisch uit en de vetplanten bloeien prachtig. Ik kan NatuurDak van harte aanbevelen voor iedereen die een duurzame en mooie dakoplossing zoekt.'
  }, {
    id: 2,
    name: 'Pieter de Vries',
    role: 'Restaurant Eigenaar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Terrassen',
    date: '03.08.2023',
    title: 'Groene Gevel transformeerde ons restaurant',
    content: 'De Groene Gevel die NatuurDak voor ons restaurant heeft geïnstalleerd is werkelijk spectaculair. Onze gasten zijn er dol op en het creëert een unieke, natuurlijke sfeer. Het systeem werkt perfect en het onderhoud is minimaal. De installatie werd vakkundig uitgevoerd zonder verstoring van onze dagelijkse activiteiten. Het heeft onze buitenruimte getransformeerd tot een groene oase in de stad. Absoluut een aanrader voor horecaondernemers!'
  }, {
    id: 3,
    name: 'Sophie Janssen',
    role: 'Vastgoed Beheerder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3',
    rating: 4,
    category: 'Platte Daken',
    date: '22.05.2023',
    title: 'Uitstekende Groene Landbedekking',
    content: 'Voor ons appartementencomplex hebben we gekozen voor Groene Landbedekking van NatuurDak. Het resultaat is prachtig en de bewoners zijn er zeer tevreden over. Het team was professioneel en hield zich aan alle afspraken. De enige reden dat ik geen 5 sterren geef is een kleine vertraging door het weer, maar dat was buiten hun controle. De kwaliteit van het werk en de materialen is uitstekend. Het heeft de waarde van ons complex zeker verhoogd.'
  }, {
    id: 4,
    name: 'Lars Bakker',
    role: 'Landschapsarchitect',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Daktuinen',
    date: '10.07.2023',
    title: 'Professionele Dakframe Systemen',
    content: 'Als landschapsarchitect werk ik regelmatig samen met NatuurDak voor hun Dakframe Systemen. Hun technische kennis en kwaliteit van materialen is ongeëvenaard. Ze begrijpen perfect hoe belangrijk een goede drainage en structuur is voor langdurig succes. Hun systemen zijn innovatief en duurzaam. Ik beveel ze aan al mijn klanten die op zoek zijn naar betrouwbare dakoplossingen. De samenwerking is altijd professioneel en resultaatgericht.'
  }, {
    id: 5,
    name: 'Marloes Hendriks',
    role: 'Huiseigenaar',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=761&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Hellende Daken',
    date: '05.09.2023',
    title: 'Droge Weiden op ons hellende dak',
    content: 'We waren aanvankelijk sceptisch over Droge Weiden op ons hellende dak, maar NatuurDak heeft ons volledig overtuigd! Het systeem is perfect aangepast aan de helling en ziet er het hele jaar door prachtig uit. De installatie was complex maar werd vakkundig uitgevoerd. Nu hebben we een unieke, onderhoudsarme tuin op ons dak die veel complimenten krijgt. Het team nam alle tijd om ons alles uit te leggen en was zeer geduldig met onze vragen.'
  }, {
    id: 6,
    name: 'Daan Vermeulen',
    role: 'Hotel Directeur',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3',
    rating: 4,
    category: 'Terrassen',
    date: '18.07.2023',
    title: 'Service & Onderhoud van topkwaliteit',
    content: 'NatuurDak verzorgt de Service & Onderhoud van onze groene daken en gevels. Hun service is uitstekend en ze zijn altijd bereikbaar voor vragen. Het onderhoudsteam is kundig en werkt efficiënt. Ze houden onze groene installaties in perfecte staat, wat belangrijk is voor de uitstraling van ons hotel. Het enige minpuntje is dat de planning soms wat strak is, maar de kwaliteit van het werk compenseert dit ruimschoots. Een betrouwbare partner voor de lange termijn.'
  }, {
    id: 7,
    name: 'Anouk Visser',
    role: 'Appartement Eigenaar',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Maatwerk Projecten',
    date: '30.06.2023',
    title: 'Uniek Maatwerk Project voor ons dak',
    content: 'Ons dak had een zeer ongewone vorm en veel bedrijven zagen er geen mogelijkheden in. NatuurDak daarentegen zag het als een uitdaging en creëerde een op maat gemaakt ontwerp dat perfect bij onze wensen paste. Hun creativiteit en technische expertise zijn indrukwekkend. Het hele proces was transparant en we werden bij elke stap betrokken. Het eindresultaat overtrof onze verwachtingen en we krijgen veel bewonderende blikken van buren en voorbijgangers.'
  }, {
    id: 8,
    name: 'Thijs Koster',
    role: 'Bedrijfseigenaar',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Platte Daken',
    date: '15.08.2023',
    title: 'Consultatie & Evaluatie van hoge kwaliteit',
    content: 'Voor ons kantoorgebouw hebben we gebruik gemaakt van de Consultatie & Evaluatie service van NatuurDak. Hun expertise heeft ons geholpen de beste keuze te maken voor onze groene dakoplossing. Ze namen alle tijd om onze situatie te analyseren en kwamen met een perfect passend advies. De implementatie verliep vlekkeloos en binnen budget. Onze werknemers genieten nu van een prachtige groene omgeving die bijdraagt aan hun welzijn en productiviteit.'
  }];
  const filteredReviews = activeCategory === 'Alle' ? reviews : reviews.filter(review => review.category === activeCategory);
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => <StarIcon key={index} className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill={index < rating ? 'currentColor' : 'none'} />);
  };
  const stats = [{
    label: 'Tevreden Klanten',
    value: '500+',
    icon: <ThumbsUpIcon className="h-8 w-8 text-primary-600" />
  }, {
    label: 'Voltooide Projecten',
    value: '650+',
    icon: <CheckCircleIcon className="h-8 w-8 text-primary-600" />
  }, {
    label: 'Gemiddelde Beoordeling',
    value: '4.9/5',
    icon: <StarIcon className="h-8 w-8 text-yellow-400" fill="currentColor" />
  }];
  return <div className="w-full">
      {/* SEO Component for Reviews Page */}
      <SEO 
        title="Klantbeoordelingen - Natuur Dak B.V. | Reviews & Testimonials"
        description="Lees wat onze tevreden klanten zeggen over onze dakgras en groene daken installaties. 500+ tevreden klanten, 4.9/5 sterren gemiddelde beoordeling."
        keywords="klantbeoordelingen, reviews, testimonials, dakgras ervaringen, groene daken reviews, klanttevredenheid"
        canonicalUrl="https://natuurdak.nl/reviews"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Klantbeoordelingen Natuur Dak",
          "description": "Beoordelingen en testimonials van tevreden klanten",
          "url": "https://natuurdak.nl/reviews",
          "mainEntity": {
            "@type": "Organization",
            "name": "Natuur Dak B.V.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            }
          },
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
                "name": "Beoordelingen",
                "item": "https://natuurdak.nl/reviews"
              }
            ]
          }
        }}
      />
      
      {/* Hero Section */}
      <header className="relative bg-primary-600 py-32" aria-label="Beoordelingen Hero">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Klantbeoordelingen Natuur Dak - tevreden klanten groene daken" 
            className="w-full h-full object-cover"
            width="1200"
            height="800"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Beoordelingen van Onze Klanten
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Zie wat tevreden klanten over ons zeggen
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Section */}
          <section className="mb-16" aria-label="Statistieken">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => <article key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <p className="text-4xl font-bold text-secondary-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-secondary-600">{stat.label}</p>
                </article>)}
            </div>
          </section>
          
          {/* Category Filters */}
          <section className="mb-12 overflow-x-auto" aria-label="Beoordeling Categorieën">
            <div className="flex flex-wrap justify-center gap-3 min-w-max mx-auto">
              {categories.map(category => <button 
                key={category} 
                onClick={() => setActiveCategory(category)} 
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'}`}
                aria-pressed={activeCategory === category}
                title={`Filter beoordelingen voor ${category}`}
              >
                  {category}
                </button>)}
            </div>
          </section>
          {/* Reviews Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8" aria-label="Klantbeoordelingen">
            {filteredReviews.map(review => <article key={review.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.image} 
                      alt={`Profielfoto van ${review.name}, ${review.role}`} 
                      className="h-16 w-16 rounded-full object-cover mr-4"
                      width="64"
                      height="64"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-secondary-900">
                        {review.name}
                      </h3>
                      <p className="text-secondary-600 text-sm">
                        {review.role}
                      </p>
                      <div className="flex mt-1" aria-label={`Beoordeling: ${review.rating} van 5 sterren`}>
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-lg text-secondary-900">
                        {review.title}
                      </h4>
                      <div className="flex items-center">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                          {review.category}
                        </span>
                        <span className="text-secondary-500 text-sm">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-secondary-700">{review.content}</p>
                  </div>
                </div>
              </article>)}
          </section>
          
          {/* No Reviews Message */}
          {filteredReviews.length === 0 && <section className="text-center py-12" aria-label="Geen Resultaten">
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Geen beoordelingen in deze categorie
              </h3>
              <p className="text-secondary-600">
                Selecteer een andere categorie of kom later terug wanneer we
                meer beoordelingen hebben toegevoegd.
              </p>
            </section>}
            
          {/* CTA */}
          <section className="text-center mt-16" aria-label="Call to Action">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Word Onderdeel van Onze Tevreden Klanten
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Neem vandaag nog contact met ons op om uw project te bespreken en
              word onderdeel van honderden tevreden Natuur Dak klanten.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
              title="Neem contact op voor een gratis offerte"
            >
              Begin Uw Transformatie
            </a>
          </section>
        </div>
      </main>
      <CtaSection />
    </div>;
};
export default ReviewsPage;