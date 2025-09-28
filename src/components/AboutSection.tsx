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
              <img src="https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Instalacja trawy syntetycznej na dachu" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm uppercase tracking-wider">
                Lat Doświadczenia
              </p>
            </div>
          </div>
          {/* Content */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
              O Nas
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Specjaliści w Trawie Syntetycznej na Dachach
            </h2>
            <p className="text-secondary-600 mb-6 text-lg">
              W GreenTurf specjalizujemy się w tworzeniu pięknych, ekologicznych
              i bezobsługowych zielonych przestrzeni na dachach przy użyciu
              najwyższej jakości trawy syntetycznej. Z ponad dekadą
              doświadczenia, przekształciliśmy niezliczone dachy w
              oszałamiające, funkcjonalne środowiska.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-secondary-700">
                  Trawa syntetyczna premium z 10-letnią gwarancją
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-secondary-700">
                  Specjalistyczne systemy drenażowe dla dachów
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-secondary-700">
                  Zespół ekspertów z wyspecjalizowanym przeszkoleniem w
                  instalacjach dachowych
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-secondary-700">
                  Rozwiązania odporne na warunki atmosferyczne i promieniowanie
                  UV
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 text-center">
                Poznaj Nas Lepiej
              </Link>
              <Link to="/contact" className="px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-all duration-300 text-center">
                Skontaktuj Się z Nami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;