import React from 'react';
import HeroVideo from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ShieldCheckIcon, LeafIcon, DropletIcon } from 'lucide-react';
const HomePage = () => {
  const features = [{
    icon: <ShieldCheckIcon className="h-10 w-10 text-primary-600" />,
    title: 'Duurzaamheid en Veiligheid',
    description: 'Onze kunstgras systemen voor daken zijn ontworpen met het oog op duurzaamheid, weerbestendigheid en veilige montage.'
  }, {
    icon: <LeafIcon className="h-10 w-10 text-primary-600" />,
    title: 'Ecologische Oplossingen',
    description: 'Wij bieden milieuvriendelijke materialen die helpen bij thermische isolatie van het gebouw en vermindering van het stedelijke hitte-eilandeffect.'
  }, {
    icon: <DropletIcon className="h-10 w-10 text-primary-600" />,
    title: 'Geavanceerde Drainage',
    description: 'Gespecialiseerde drainagesystemen zorgen voor juiste waterafvoer en beschermen de dakconstructie tegen vocht en schade.'
  }];

  // SEO: Structured data for homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Natuur Dak B.V. - Experts in Dakgras & Groene Daken Nederland",
    "description": "Specialist in dakgras, groene daken en kunstgras installaties. Professionele dakbegroening voor platte en hellende daken in heel Nederland.",
    "url": "https://natuurdak.nl/",
    "mainEntity": {
      "@type": "Organization",
      "name": "Natuur Dak B.V.",
      "url": "https://natuurdak.nl",
      "description": "Specialist in dakgras, groene daken en kunstgras installaties in Nederland"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://natuurdak.nl/"
        }
      ]
    }
  };

  return <div className="w-full">
      {/* SEO: Meta tags and structured data */}
      <SEO 
        title="Natuur Dak B.V. - Experts in Dakgras & Groene Daken Nederland"
        description="Specialist in dakgras, groene daken en kunstgras installaties. Professionele dakbegroening voor platte en hellende daken in heel Nederland. Gratis offerte!"
        keywords="dakgras, groene daken, kunstgras, dakbegroening, sedumdak, extensief groen dak, Nederland, duurzaam bouwen, platte daken, hellende daken"
        canonicalUrl="https://natuurdak.nl/"
        structuredData={structuredData}
      />
      
      {/* SEO: Semantic HTML5 sections */}
      <section aria-label="Hero sectie">
        <HeroVideo />
      </section>
      
      <section aria-label="Over ons sectie">
        <AboutSection />
      </section>
      
      {/* SEO: Features section with proper heading hierarchy */}
      <section className="py-20 bg-secondary-50" aria-label="Waarom kiezen voor Natuur Dak">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
              Waarom Wij
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Specialisten in Dakgras
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-secondary-600">
              Onze oplossingen zijn speciaal ontworpen met het oog op de unieke
              uitdagingen van dakinstallaties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <article key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 mb-4">{feature.description}</p>
              </article>)}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/services/rooftop" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              title="Meer informatie over dakgras oplossingen"
            >
              Lees meer over onze dakoplossingen{' '}
              <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      
      <section aria-label="Onze diensten">
        <ServicesSection />
      </section>
      
      <section aria-label="Ons werkproces">
        <ProcessSection />
      </section>
      
      <section aria-label="Klantbeoordelingen">
        <TestimonialsSection />
      </section>
      
      <section aria-label="Call to action">
        <CtaSection />
      </section>
    </div>;
};
export default HomePage;