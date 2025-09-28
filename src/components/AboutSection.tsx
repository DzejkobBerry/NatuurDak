import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from 'lucide-react';
const AboutSection = () => {
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img src="/src/assets/images/team.jpg" alt="Kunstgras installatie op dak" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm uppercase tracking-wider">
                Jaar Ervaring
              </p>
            </div>
          </div>
          {/* Content */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
              Over Ons
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Specialisten in Kunstgras op Daken
            </h2>
            <p className="text-secondary-600 mb-6 text-lg">
              Bij Natuur Dak B.V. specialiseren wij ons in het creëren van mooie, ecologische
              en onderhoudsvrije groene ruimtes op daken met behulp van
              kunstgras van de hoogste kwaliteit. Met meer dan een decennium
              ervaring hebben wij talloze daken getransformeerd tot
              verbluffende, functionele omgevingen.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-secondary-700">
                  Premium kunstgras met 10 jaar garantie
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-secondary-700">
                  Gespecialiseerde drainagesystemen voor daken
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-secondary-700">
                  Team van experts met gespecialiseerde training in
                  dakinstallaties
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-secondary-700">
                  Weerbestendige en UV-resistente oplossingen
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 text-center">
                Leer Ons Beter Kennen
              </Link>
              <Link to="/contact" className="px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-all duration-300 text-center">
                Neem Contact Op
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;