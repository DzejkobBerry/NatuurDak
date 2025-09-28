import React from 'react';
import CtaSection from '../../components/CtaSection';
import { CheckCircleIcon } from 'lucide-react';
const GroundServicePage = () => {
  const benefits = ['Eliminacja potrzeby koszenia, podlewania i nawożenia', 'Idealne rozwiązanie dla miejsc zacienionych, gdzie naturalna trawa nie rośnie dobrze', 'Bezpieczna i miękka powierzchnia dla dzieci i zwierząt domowych', 'Brak problemów z błotem, kałużami i nierównościami terenu', 'Odporność na intensywne użytkowanie i trudne warunki atmosferyczne', 'Możliwość korzystania z trawnika przez cały rok, niezależnie od pogody', 'Przyjazna dla alergików - brak pyłków i alergenów', 'Oszczędność wody i eliminacja potrzeby stosowania pestycydów'];
  const applications = [{
    title: 'Ogrody Przydomowe',
    description: 'Zamień swój ogród w idealny, zawsze zielony trawnik, który wygląda świeżo przez cały rok bez wysiłku związanego z pielęgnacją.',
    image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    title: 'Place Zabaw',
    description: 'Bezpieczna i miękka powierzchnia dla placów zabaw, zapewniająca amortyzację upadków i eliminująca problem z błotem i kałużami.',
    image: 'https://images.unsplash.com/photo-1596491123074-fd69f5daa929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    title: 'Strefy Rekreacyjne',
    description: 'Idealne rozwiązanie dla stref rekreacyjnych, tarasów, patio i innych przestrzeni, gdzie chcesz cieszyć się zielenią bez konieczności pielęgnacji.',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Trawa syntetyczna na ziemi" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Trawa Syntetyczna dla Przestrzeni Przyziemnych
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Idealne, bezobsługowe trawniki dla każdej przestrzeni przyziemnej
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Dlaczego Warto Wybrać Trawę Syntetyczną?
            </h2>
            <p className="text-lg text-secondary-600 mb-10 max-w-4xl mx-auto text-center">
              Trawa syntetyczna to nowoczesne, praktyczne i estetyczne
              rozwiązanie dla osób ceniących piękno naturalnego trawnika bez
              konieczności jego regularnej pielęgnacji. Nasze wysokiej jakości
              produkty oferują wiele korzyści w porównaniu do tradycyjnych
              trawników.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start bg-secondary-50 p-4 rounded-lg">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-secondary-700">{benefit}</p>
                </div>)}
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
              Popularne Zastosowania
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {applications.map((app, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {app.title}
                    </h3>
                    <p className="text-secondary-600">{app.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">
                  Nasz Proces Instalacji
                </h2>
                <p className="text-lg text-secondary-600 mb-6">
                  Nasza instalacja trawy syntetycznej dla przestrzeni
                  przyziemnych obejmuje kilka kluczowych etapów, zapewniających
                  trwały i estetyczny efekt:
                </p>
                <ol className="space-y-4 text-secondary-700">
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <p>
                      <strong>Przygotowanie terenu</strong> - usunięcie starej
                      trawy, wyrównanie powierzchni i zapewnienie odpowiedniego
                      drenażu
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <p>
                      <strong>Instalacja warstwy bazowej</strong> - układanie
                      geowłókniny i warstwy kruszywa dla zapewnienia stabilności
                      i drenażu
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <p>
                      <strong>Układanie trawy</strong> - precyzyjne rozkładanie,
                      przycinanie i łączenie materiału
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      4
                    </span>
                    <p>
                      <strong>Mocowanie i wykończenie</strong> - zabezpieczenie
                      krawędzi i mocowanie do podłoża
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      5
                    </span>
                    <p>
                      <strong>Zasypywanie piaskiem kwarcowym</strong> - dla
                      stabilizacji i naturalnego wyglądu
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      6
                    </span>
                    <p>
                      <strong>Szczotkowanie i końcowa inspekcja</strong> -
                      nadanie naturalnemu wyglądowi i sprawdzenie jakości
                    </p>
                  </li>
                </ol>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Proces instalacji trawy syntetycznej" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Pielęgnacja i Konserwacja
            </h3>
            <p className="text-secondary-600 mb-6">
              Choć trawa syntetyczna jest praktycznie bezobsługowa, kilka
              prostych czynności pomoże utrzymać jej piękny wygląd przez lata:
            </p>
            <ul className="space-y-3 text-secondary-700">
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p>
                  Regularne usuwanie liści i innych zanieczyszczeń za pomocą
                  grabi z miękkimi zębami lub dmuchawy
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p>
                  Okresowe płukanie wodą dla usunięcia kurzu i drobnych
                  zabrudzeń
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p>
                  Szczotkowanie trawy przeciwnie do kierunku ułożenia włókien w
                  przypadku miejsc o intensywnym ruchu
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <p>Usuwanie plam przy użyciu łagodnych detergentów i wody</p>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg">
              Umów Bezpłatną Konsultację
            </a>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default GroundServicePage;