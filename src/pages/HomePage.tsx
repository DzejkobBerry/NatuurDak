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
  return <div className="w-full">
      <HeroVideo />
      <AboutSection />
      <section className="py-20 bg-secondary-50">
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
              Lees meer over onze dakoplossingen{' '}
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