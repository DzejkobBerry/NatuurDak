import React from 'react';
import CtaSection from '../components/CtaSection';
import { CheckCircleIcon, UserIcon, TrophyIcon, HeartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const AboutPage = () => {
  const teamMembers = [{
    name: 'Jan Kowalski',
    position: 'Założyciel i Dyrektor',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Z ponad 15-letnim doświadczeniem w branży, Jan założył GreenTurf z pasją do przekształcania niewykorzystanych przestrzeni dachowych w zielone oazy.'
  }, {
    name: 'Anna Nowak',
    position: 'Główny Projektant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    bio: 'Anna łączy wiedzę z zakresu architektury krajobrazu i specjalistyczne doświadczenie w projektach dachowych, tworząc innowacyjne i funkcjonalne przestrzenie.'
  }, {
    name: 'Tomasz Wiśniewski',
    position: 'Kierownik Techniczny',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    bio: 'Tomasz specjalizuje się w technicznych aspektach instalacji dachowych, zapewniając, że każdy projekt jest realizowany z najwyższą precyzją i bezpieczeństwem.'
  }, {
    name: 'Marta Kowalczyk',
    position: 'Specjalista ds. Obsługi Klienta',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    bio: 'Marta dba o to, aby każdy klient otrzymał wyjątkową obsługę od pierwszej konsultacji do końcowej instalacji i dalej.'
  }];
  const values = [{
    icon: <UserIcon className="h-10 w-10 text-primary-600" />,
    title: 'Zorientowanie na Klienta',
    description: 'Stawiamy potrzeby i wizje naszych klientów na pierwszym miejscu, zapewniając spersonalizowane rozwiązania i wyjątkową obsługę.'
  }, {
    icon: <TrophyIcon className="h-10 w-10 text-primary-600" />,
    title: 'Doskonałość',
    description: 'Dążymy do najwyższej jakości w każdym aspekcie naszej pracy, od pierwszej konsultacji po końcową instalację i obsługę posprzedażową.'
  }, {
    icon: <HeartIcon className="h-10 w-10 text-primary-600" />,
    title: 'Pasja',
    description: 'Nasza pasja do przekształcania przestrzeni dachowych w zielone oazy napędza naszą innowacyjność i zaangażowanie w każdy projekt.'
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="O firmie GreenTurf" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            O Firmie GreenTurf
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Poznaj naszą firmę, misję i zaangażowanie w jakość
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Nasza Historia
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Od Wizji do Rzeczywistości
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Historia GreenTurf" className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-3xl font-bold">2013</p>
                  <p className="text-sm uppercase tracking-wider">
                    Rok Założenia
                  </p>
                </div>
              </div>
              <div>
                <p className="text-lg text-secondary-600 mb-6">
                  GreenTurf rozpoczęło działalność w 2013 roku jako firma
                  specjalizująca się w instalacji trawy syntetycznej dla różnych
                  zastosowań. Z biegiem lat, zauważyliśmy rosnące
                  zapotrzebowanie na specjalistyczne rozwiązania dla przestrzeni
                  dachowych, szczególnie w obszarach miejskich, gdzie zieleń
                  jest na wagę złota.
                </p>
                <p className="text-lg text-secondary-600 mb-6">
                  Nasz zespół ekspertów zdobył specjalistyczną wiedzę w zakresie
                  instalacji na dachach, rozwiązując unikalne wyzwania związane
                  z wagą, drenażem i ekspozycją na warunki atmosferyczne. Dziś
                  jesteśmy dumni, że jesteśmy liderem w branży, specjalizującym
                  się w przekształcaniu niewykorzystanych przestrzeni dachowych
                  w piękne, funkcjonalne i ekologiczne zielone oazy.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700">
                      Ponad 500 ukończonych projektów dachowych
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700">
                      Zespół 25 wyspecjalizowanych ekspertów
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-secondary-700">
                      Obsługa projektów w całej Polsce i Europie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Our Mission Section */}
          <div className="mb-20 bg-secondary-50 py-16 px-6 rounded-xl">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Nasza Misja
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Transformacja Przestrzeni Dachowych
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Nasza misja jest prosta, ale ambitna: przekształcać
                niewykorzystane przestrzenie dachowe w zielone, funkcjonalne i
                estetyczne środowiska, które zwiększają wartość nieruchomości i
                poprawiają jakość życia w miastach.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600">{value.description}</p>
                </div>)}
            </div>
          </div>
          {/* Our Team Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Nasz Zespół
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Poznaj Ekspertów
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Za każdym udanym projektem stoi zespół oddanych
                profesjonalistów. Poznaj kluczowych członków naszego zespołu,
                którzy sprawiają, że GreenTurf jest liderem w branży.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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
                </div>)}
            </div>
          </div>
          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Gotowy do Współpracy?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Nasz zespół ekspertów jest gotowy pomóc Ci w transformacji Twojej
              przestrzeni dachowej w zieloną oazę.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
              Skontaktuj Się z Nami
            </Link>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default AboutPage;