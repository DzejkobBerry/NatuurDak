import React, { useState } from 'react';
import CtaSection from '../components/CtaSection';
import { StarIcon, ThumbsUpIcon, CheckCircleIcon } from 'lucide-react';
const ReviewsPage = () => {
  const categories = ['Wszystkie', 'Dachy Płaskie', 'Dachy Skośne', 'Tarasy', 'Ogrody Dachowe', 'Projekty Niestandardowe'];
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const reviews = [{
    id: 1,
    name: 'Anna Kowalska',
    role: 'Właścicielka Apartamentu',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Dachy Płaskie',
    date: '12.06.2023',
    title: 'Rewelacyjna transformacja mojego dachu!',
    content: 'Przekształciliśmy nasz dach w niesamowity ogród z trawą syntetyczną GreenTurf. Instalacja była bezbłędna, a dwa lata później nadal wygląda jak nowa pomimo ciągłego użytkowania i ekspozycji na warunki atmosferyczne. Zespół był profesjonalny, punktualny i bardzo pomocny podczas całego procesu. Szczególnie doceniam ich uwagę na szczegóły i gotowość do odpowiedzi na wszystkie moje pytania. Polecam GreenTurf każdemu, kto chce przekształcić swój dach w piękną, zieloną przestrzeń!'
  }, {
    id: 2,
    name: 'Michał Nowak',
    role: 'Właściciel Restauracji',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Tarasy',
    date: '03.08.2023',
    title: 'Doskonała inwestycja dla naszej restauracji',
    content: 'Strefa wypoczynkowa na dachu naszej restauracji wygląda niesamowicie dzięki instalacji trawy syntetycznej. Nasi klienci uwielbiają atmosferę, a utrzymanie jest znacznie łatwiejsze niż w przypadku prawdziwej trawy w tak uczęszczanym miejscu. Zespół GreenTurf zrozumiał nasze potrzeby dotyczące intensywnego użytkowania przestrzeni i zaproponował idealne rozwiązanie. Instalacja została przeprowadzona szybko i sprawnie, minimalizując zakłócenia w działalności restauracji. Zdecydowanie polecam ich usługi każdemu przedsiębiorcy szukającemu sposobu na uatrakcyjnienie swojej przestrzeni.'
  }, {
    id: 3,
    name: 'Ewa Wiśniewska',
    role: 'Zarządca Nieruchomości',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3',
    rating: 4,
    category: 'Dachy Płaskie',
    date: '22.05.2023',
    title: 'Świetne rozwiązanie dla naszego kompleksu apartamentów',
    content: 'Zainstalowaliśmy trawę syntetyczną na dachu naszego kompleksu apartamentów i mieszkańcy absolutnie ją kochają. Zespół GreenTurf był profesjonalny, wydajny i dostarczył dokładnie to, co obiecał. Jedyny powód, dla którego nie daję pełnych 5 gwiazdek, to niewielkie opóźnienie w harmonogramie, choć było to częściowo spowodowane warunkami pogodowymi. Poza tym, jakość instalacji jest doskonała, a przestrzeń stała się ulubionym miejscem spotkań mieszkańców. Doceniam również szczegółowe instrukcje dotyczące konserwacji, które otrzymaliśmy po zakończeniu prac.'
  }, {
    id: 4,
    name: 'Jan Kowalczyk',
    role: 'Architekt Krajobrazu',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Ogrody Dachowe',
    date: '10.07.2023',
    title: 'Najwyższa jakość i profesjonalizm',
    content: 'Jako architekt krajobrazu, współpracowałem z wieloma firmami zajmującymi się trawą syntetyczną, ale GreenTurf wyróżnia się jakością produktów i dbałością o szczegóły, zwłaszcza w instalacjach dachowych. Polecam ich wszystkim moim klientom szukającym rozwiązań bezobsługowych. Ich wiedza techniczna dotycząca drenażu i konstrukcji dachowych jest imponująca, co jest kluczowe dla długotrwałego sukcesu takich instalacji. Współpraca z nimi przy kilku projektach zawsze była płynna i profesjonalna. Doceniam również ich innowacyjne podejście do niestandardowych wyzwań projektowych.'
  }, {
    id: 5,
    name: 'Katarzyna Lewandowska',
    role: 'Właścicielka Domu',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=761&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Dachy Skośne',
    date: '05.09.2023',
    title: 'Innowacyjne rozwiązanie dla naszego skośnego dachu',
    content: 'Byliśmy sceptyczni co do możliwości instalacji trawy syntetycznej na naszym skośnym dachu, ale GreenTurf udowodnił, że to możliwe! Ich specjalistyczny system mocowań działa perfekcyjnie, a efekt wizualny przekroczył nasze oczekiwania. Teraz mamy unikalne miejsce wypoczynkowe z pięknym widokiem. Proces od konsultacji do instalacji był bardzo profesjonalny. Szczególnie doceniam cierpliwość zespołu w wyjaśnianiu technicznych aspektów instalacji i odpowiadaniu na nasze liczne pytania. Zdecydowanie polecam GreenTurf każdemu, kto szuka innowacyjnych rozwiązań dla nietypowych przestrzeni.'
  }, {
    id: 6,
    name: 'Piotr Zieliński',
    role: 'Dyrektor Hotelu',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3',
    rating: 4,
    category: 'Tarasy',
    date: '18.07.2023',
    title: 'Doskonałe rozwiązanie dla naszego tarasu hotelowego',
    content: 'Zdecydowaliśmy się na instalację trawy syntetycznej na tarasie naszego hotelu i jesteśmy bardzo zadowoleni z rezultatów. Goście uwielbiają nową przestrzeń, a my doceniamy łatwość utrzymania. Zespół GreenTurf był profesjonalny i elastyczny, dostosowując się do naszego napiętego harmonogramu. Jedynym drobnym minusem było lekkie przekroczenie budżetu, ale biorąc pod uwagę jakość wykonania i materiałów, uważamy to za dobrą inwestycję. Szczególnie doceniamy trwałość trawy, która doskonale znosi intensywne użytkowanie przez naszych gości.'
  }, {
    id: 7,
    name: 'Magdalena Dąbrowska',
    role: 'Właścicielka Apartamentu',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Projekty Niestandardowe',
    date: '30.06.2023',
    title: 'Kreatywne rozwiązanie dla mojego nietypowego dachu',
    content: 'Mój dach ma nietypowy kształt i układ, co stanowiło wyzwanie dla wielu firm. GreenTurf nie tylko podjął się tego wyzwania, ale stworzył absolutnie spektakularną przestrzeń, która wykorzystuje każdy centymetr dostępnego miejsca. Ich kreatywne podejście i techniczne know-how są naprawdę imponujące. Proces projektowania był bardzo interaktywny, czułam się zaangażowana na każdym etapie. Instalacja przebiegła sprawnie, a końcowy efekt przekroczył moje oczekiwania. Z przyjemnością pokazuję mój nowy dach znajomym i rodzinie, którzy są pod wrażeniem transformacji.'
  }, {
    id: 8,
    name: 'Tomasz Adamski',
    role: 'Właściciel Firmy',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Dachy Płaskie',
    date: '15.08.2023',
    title: 'Profesjonalna realizacja dla naszego biurowca',
    content: 'Zdecydowaliśmy się na instalację trawy syntetycznej na dachu naszego biurowca, aby stworzyć przestrzeń relaksacyjną dla pracowników. GreenTurf wykonał fantastyczną pracę, od projektu po realizację. Ich zespół był niezwykle profesjonalny, dotrzymał wszystkich terminów i budżetu. Jakość użytych materiałów jest doskonała, a system drenażowy działa perfekcyjnie nawet podczas intensywnych opadów deszczu. Nasi pracownicy uwielbiają nową przestrzeń, co pozytywnie wpłynęło na atmosferę w firmie i produktywność. Zdecydowanie polecam GreenTurf dla projektów komercyjnych.'
  }];
  const filteredReviews = activeCategory === 'Wszystkie' ? reviews : reviews.filter(review => review.category === activeCategory);
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => <StarIcon key={index} className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill={index < rating ? 'currentColor' : 'none'} />);
  };
  const stats = [{
    label: 'Zadowolonych Klientów',
    value: '500+',
    icon: <ThumbsUpIcon className="h-8 w-8 text-primary-600" />
  }, {
    label: 'Ukończonych Projektów',
    value: '650+',
    icon: <CheckCircleIcon className="h-8 w-8 text-primary-600" />
  }, {
    label: 'Średnia Ocena',
    value: '4.9/5',
    icon: <StarIcon className="h-8 w-8 text-yellow-400" fill="currentColor" />
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Opinie klientów GreenTurf" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Opinie Naszych Klientów
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Zobacz, co mówią o nas zadowoleni klienci
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <p className="text-4xl font-bold text-secondary-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-secondary-600">{stat.label}</p>
                </div>)}
            </div>
          </div>
          {/* Category Filters */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex flex-wrap justify-center gap-3 min-w-max mx-auto">
              {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'}`}>
                  {category}
                </button>)}
            </div>
          </div>
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredReviews.map(review => <div key={review.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={review.image} alt={review.name} className="h-16 w-16 rounded-full object-cover mr-4" />
                    <div>
                      <h3 className="font-bold text-lg text-secondary-900">
                        {review.name}
                      </h3>
                      <p className="text-secondary-600 text-sm">
                        {review.role}
                      </p>
                      <div className="flex mt-1">
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
              </div>)}
          </div>
          {/* No Reviews Message */}
          {filteredReviews.length === 0 && <div className="text-center py-12">
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Brak opinii w tej kategorii
              </h3>
              <p className="text-secondary-600">
                Prosimy wybrać inną kategorię lub wrócić później, gdy dodamy
                więcej opinii.
              </p>
            </div>}
          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Dołącz do Grona Zadowolonych Klientów
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś, aby omówić swój projekt i dołączyć
              do setek zadowolonych klientów GreenTurf.
            </p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
              Rozpocznij Swoją Transformację
            </a>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default ReviewsPage;