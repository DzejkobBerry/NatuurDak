import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  link
}) => {
  return <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-900 mb-3">{title}</h3>
        <p className="text-secondary-600 mb-4">{description}</p>
        <Link to={link} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
          Dowiedz się więcej <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>;
};
const ServicesSection = () => {
  const services = [{
    title: 'Trawa Syntetyczna na Dachach Płaskich',
    description: 'Przekształć swój płaski dach w zieloną oazę z naszymi specjalistycznymi instalacjami trawy syntetycznej, idealnymi dla przestrzeni miejskich.',
    image: 'https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/services/rooftop'
  }, {
    title: 'Systemy na Dachy Skośne',
    description: 'Specjalistyczne rozwiązania dla dachów skośnych, zapewniające bezpieczną i trwałą instalację trawy syntetycznej z odpowiednim systemem mocowań.',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/services/rooftop'
  }, {
    title: 'Projekty Niestandardowe',
    description: 'Od tarasów dachowych po ogrody na dachach, projektujemy niestandardowe rozwiązania z trawy syntetycznej dostosowane do Twoich unikalnych potrzeb.',
    image: 'https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/services/custom'
  }];
  return <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
            Nasze Usługi
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
            Specjalistyczne Rozwiązania dla Dachów
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-secondary-600">
            Oferujemy kompleksową gamę usług instalacji trawy syntetycznej na
            dachach, dostosowanych do Twoich konkretnych potrzeb i wymagań
            przestrzennych.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} image={service.image} link={service.link} />)}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Zobacz Wszystkie Usługi
          </Link>
        </div>
      </div>
    </section>;
};
export default ServicesSection;