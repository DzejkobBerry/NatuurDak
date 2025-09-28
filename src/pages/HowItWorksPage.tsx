import React from 'react';
import CtaSection from '../components/CtaSection';
import { Link } from 'react-router-dom';
import { ClipboardIcon, RulerIcon, Shovel, ThumbsUpIcon, PhoneIcon, MailIcon } from 'lucide-react';
const HowItWorksPage = () => {
  const processSteps = [{
    number: 1,
    title: 'Darmowa Konsultacja i Ocena',
    description: 'Proces rozpoczyna się od bezpłatnej konsultacji, podczas której omawiamy Twoje potrzeby, preferencje i budżet. Przeprowadzamy dokładną ocenę dachu lub innej przestrzeni, analizując nośność, system drenażowy, ekspozycję na słońce i inne kluczowe czynniki.',
    icon: <ClipboardIcon size={40} className="text-primary-600" />,
    details: ['Analiza potrzeb i oczekiwań klienta', 'Ocena techniczna przestrzeni (nośność, drenaż, ekspozycja)', 'Omówienie dostępnych rodzajów trawy syntetycznej', 'Wstępne oszacowanie kosztów i harmonogramu']
  }, {
    number: 2,
    title: 'Szczegółowy Projekt i Wycena',
    description: 'Na podstawie konsultacji i pomiarów, nasz zespół projektowy przygotowuje szczegółowy projekt i dokładną wycenę. Prezentujemy różne opcje trawy syntetycznej, materiałów podkładowych i dodatkowych elementów, aby pomóc Ci podjąć najlepszą decyzję.',
    icon: <RulerIcon size={40} className="text-primary-600" />,
    details: ['Przygotowanie szczegółowego projektu technicznego', 'Dobór odpowiednich materiałów i akcesoriów', 'Dokładna kalkulacja kosztów z przejrzystym podziałem', 'Ustalenie harmonogramu prac']
  }, {
    number: 3,
    title: 'Profesjonalna Instalacja',
    description: 'Po zatwierdzeniu projektu i wyceny, nasz wyspecjalizowany zespół instalacyjny przystępuje do pracy. Proces instalacji obejmuje przygotowanie powierzchni, montaż systemów drenażowych, układanie trawy syntetycznej i precyzyjne wykończenie, zapewniając najwyższą jakość wykonania.',
    icon: <Shovel size={40} className="text-primary-600" />,
    details: ['Przygotowanie powierzchni (czyszczenie, wyrównanie)', 'Montaż systemów drenażowych i podkładów', 'Precyzyjne układanie trawy syntetycznej', 'Łączenie i mocowanie materiału', 'Wykończenie krawędzi i detali']
  }, {
    number: 4,
    title: 'Odbiór i Wsparcie Posprzedażowe',
    description: 'Po zakończeniu instalacji, przeprowadzamy szczegółową inspekcję z Twoim udziałem, aby upewnić się, że wszystko spełnia Twoje oczekiwania. Przekazujemy informacje dotyczące pielęgnacji i konserwacji oraz zapewniamy wsparcie posprzedażowe i gwarancję na nasze usługi i materiały.',
    icon: <ThumbsUpIcon size={40} className="text-primary-600" />,
    details: ['Końcowa inspekcja z udziałem klienta', 'Instrukcje dotyczące pielęgnacji i konserwacji', 'Przekazanie dokumentów gwarancyjnych', 'Zapewnienie wsparcia posprzedażowego']
  }];
  const faqs = [{
    question: 'Jak długo trwa proces instalacji trawy syntetycznej na dachu?',
    answer: 'Czas instalacji zależy od wielkości i złożoności projektu. Typowa instalacja na dachu o powierzchni 50-100 m² zajmuje od 2 do 4 dni. Większe lub bardziej skomplikowane projekty mogą wymagać więcej czasu. Dokładny harmonogram jest ustalany podczas etapu projektowania.'
  }, {
    question: 'Czy trawa syntetyczna na dachu wymaga specjalnego systemu drenażowego?',
    answer: 'Tak, instalacja trawy syntetycznej na dachu wymaga odpowiedniego systemu drenażowego, który zapewnia efektywne odprowadzanie wody i zapobiega jej gromadzeniu się. Nasz zespół projektuje i instaluje specjalistyczne systemy drenażowe dostosowane do specyfiki dachu i lokalnych warunków atmosferycznych.'
  }, {
    question: 'Jaka jest waga trawy syntetycznej i czy mój dach wytrzyma takie obciążenie?',
    answer: 'Systemy trawy syntetycznej dla dachów są relatywnie lekkie, zazwyczaj ważą od 15 do 30 kg/m² (włączając podkład i wypełnienie). Podczas konsultacji i oceny technicznej analizujemy nośność dachu, aby upewnić się, że może on bezpiecznie wytrzymać planowaną instalację.'
  }, {
    question: 'Jak długo wytrzyma trawa syntetyczna na dachu?',
    answer: 'Przy prawidłowej instalacji i minimalnej konserwacji, wysokiej jakości trawa syntetyczna na dachu może wytrzymać 10-15 lat bez utraty koloru i sprężystości. Oferujemy produkty z gwarancją producenta, która zazwyczaj wynosi 8-10 lat, w zależności od wybranego rodzaju trawy.'
  }, {
    question: 'Czy mogę zainstalować meble i inne elementy na trawie syntetycznej na dachu?',
    answer: 'Tak, trawa syntetyczna na dachu może wytrzymać meble ogrodowe, donice z roślinami i inne elementy aranżacyjne. Podczas projektowania uwzględniamy planowane obciążenia i w razie potrzeby wzmacniamy podkład w miejscach, gdzie będą stały cięższe elementy.'
  }, {
    question: 'Jak wygląda konserwacja trawy syntetycznej na dachu?',
    answer: 'Trawa syntetyczna na dachu wymaga minimalnej konserwacji. Zalecamy regularne usuwanie liści i innych zanieczyszczeń za pomocą dmuchawy lub grabi z miękkimi zębami oraz okresowe płukanie wodą. W przypadku intensywnie użytkowanych obszarów może być konieczne okazjonalne szczotkowanie, aby utrzymać włókna w pionie.'
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Proces instalacji trawy syntetycznej" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Jak Działamy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Nasz usprawniony proces od konsultacji do instalacji
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Process Overview */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Nasz Proces
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Droga do Twojej Zielonej Przestrzeni
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                W GreenTurf stworzyliśmy przejrzysty, efektywny proces, który
                zapewnia płynne przejście od początkowej konsultacji do finalnej
                instalacji i zadowolenia z Twojej nowej zielonej przestrzeni.
              </p>
            </div>
            {/* Process Steps */}
            <div className="max-w-5xl mx-auto">
              {processSteps.map((step, index) => <div key={index} className="mb-16">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-100 rounded-full h-32 w-32 flex items-center justify-center relative">
                        <div className="absolute -top-2 -right-2 bg-primary-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                          {step.number}
                        </div>
                        <div>{step.icon}</div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-secondary-600 mb-6">
                        {step.description}
                      </p>
                      <div className="bg-secondary-50 p-6 rounded-lg">
                        <h4 className="font-bold text-secondary-800 mb-3">
                          Co obejmuje ten etap:
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => <li key={i} className="flex items-start">
                              <span className="bg-primary-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                                {i + 1}
                              </span>
                              <p className="text-secondary-700">{detail}</p>
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          {/* FAQ Section */}
          <div className="mb-20 bg-secondary-50 py-16 px-6 rounded-xl">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Często Zadawane Pytania
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-secondary-600">
                Odpowiedzi na najczęściej zadawane pytania dotyczące naszego
                procesu instalacji trawy syntetycznej na dachach.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600">{faq.answer}</p>
                </div>)}
            </div>
          </div>
          {/* Get Started Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">
              Gotowy na Rozpoczęcie Procesu?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-secondary-600 mb-8">
              Skontaktuj się z nami już dziś, aby umówić się na bezpłatną
              konsultację i rozpocząć drogę do Twojej idealnej zielonej
              przestrzeni na dachu.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center">
                <MailIcon className="mr-2 h-5 w-5" /> Umów Konsultację Online
              </Link>
              <a href="tel:+11234567890" className="px-8 py-4 bg-secondary-700 text-white font-medium rounded-md hover:bg-secondary-800 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center">
                <PhoneIcon className="mr-2 h-5 w-5" /> Zadzwoń: +1 (123)
                456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default HowItWorksPage;