import React from 'react';
import HeroVideo from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ShieldCheckIcon, LeafIcon, DropletIcon } from 'lucide-react';
const HomePage = () => {
  const features = [{
    icon: <ShieldCheckIcon className="h-10 w-10 text-primary-600" />,
    title: 'Trwałość i Bezpieczeństwo',
    description: 'Nasze systemy trawy syntetycznej dla dachów są projektowane z myślą o wytrzymałości, odporności na warunki atmosferyczne i bezpiecznym montażu.'
  }, {
    icon: <LeafIcon className="h-10 w-10 text-primary-600" />,
    title: 'Ekologiczne Rozwiązania',
    description: 'Oferujemy ekologiczne materiały, które pomagają w izolacji termicznej budynku i redukcji efektu miejskiej wyspy ciepła.'
  }, {
    icon: <DropletIcon className="h-10 w-10 text-primary-600" />,
    title: 'Zaawansowany Drenaż',
    description: 'Specjalistyczne systemy drenażowe zapewniają prawidłowy odpływ wody, chroniąc konstrukcję dachu przed wilgocią i uszkodzeniami.'
  }];
  return <div className="w-full">
      <HeroVideo />
      <AboutSection />
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
              Dlaczego My
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Specjaliści w Trawie na Dachach
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-secondary-600">
              Nasze rozwiązania są projektowane specjalnie z myślą o wyjątkowych
              wyzwaniach, jakie stawiają instalacje na dachach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 mb-4">{feature.description}</p>
              </div>)}
          </div>
          <div className="text-center mt-12">
            <Link to="/services/rooftop" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
              Dowiedz się więcej o naszych rozwiązaniach dachowych{' '}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </div>;
};
export default HomePage;