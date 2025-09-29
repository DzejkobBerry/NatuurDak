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
          Lees meer <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>;
};
const ServicesSection = () => {
  const services = [{
    title: 'Kunstgras op Platte Daken',
    description: 'Transformeer uw platte dak in een groene oase met onze gespecialiseerde kunstgras installaties, ideaal voor stedelijke ruimtes.',
    image: '/src/assets/images/services/Kunstgras-op-Platte-Daken.png',
    link: '/services/rooftop'
  }, {
    title: 'Systemen voor Hellende Daken',
    description: 'Gespecialiseerde oplossingen voor hellende daken, die zorgen voor veilige en duurzame kunstgras installatie met het juiste bevestigingssysteem.',
    image: '/src/assets/images/services/Systemen_voor_Hellende_Daken.png',
    link: '/services/rooftop'
  }, {
    title: 'Maatwerk Projecten',
    description: 'Van dakterrassen tot daktuinen, wij ontwerpen op maat gemaakte kunstgras oplossingen aangepast aan uw unieke behoeften.',
    image: '/src/assets/images/services/Maatwerk-Projecten.png',
    link: '/services/custom'
  }];
  return <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
            Onze Diensten
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
            Gespecialiseerde Dakoplossingen
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-secondary-600">
            Wij bieden een uitgebreid scala aan kunstgras installatiediensten voor
            daken, aangepast aan uw specifieke behoeften en ruimtelijke vereisten.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} image={service.image} link={service.link} />)}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Bekijk Alle Diensten
          </Link>
        </div>
      </div>
    </section>;
};
export default ServicesSection;