import React from 'react';
import { ClipboardIcon, RulerIcon, Shovel, ThumbsUpIcon } from 'lucide-react';
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}
const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon
}) => {
  return <div className="relative">
      {/* Connecting line for all but the last item */}
      <div className="hidden md:block absolute top-16 left-16 bottom-0 border-l-2 border-dashed border-primary-200 -z-10"></div>
      <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
        <div className="flex-shrink-0 bg-primary-100 rounded-full h-32 w-32 flex items-center justify-center relative">
          <div className="absolute -top-2 -right-2 bg-primary-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
            {number}
          </div>
          <div className="text-primary-600">{icon}</div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl font-bold text-secondary-900 mb-2">{title}</h3>
          <p className="text-secondary-600">{description}</p>
        </div>
      </div>
    </div>;
};
const ProcessSection = () => {
  const steps = [{
    number: 1,
    title: 'Konsultacja i Ocena Dachu',
    description: 'Zaczynamy od dokładnej konsultacji, aby zrozumieć Twoje potrzeby, ocenić konstrukcję dachu, nośność, system drenażowy i omówić najlepsze opcje trawy syntetycznej dla Twojego projektu.',
    icon: <ClipboardIcon size={40} />
  }, {
    number: 2,
    title: 'Projekt i Wycena',
    description: 'Nasz zespół tworzy niestandardowy projekt dla Twojego dachu, uwzględniający specyfikę konstrukcji, oraz przedstawia szczegółową wycenę z przejrzystymi cenami i oczekiwaniami dotyczącymi harmonogramu.',
    icon: <RulerIcon size={40} />
  }, {
    number: 3,
    title: 'Specjalistyczna Instalacja',
    description: 'Nasz zespół ekspertów przygotowuje powierzchnię dachu, instaluje odpowiednie systemy drenażowe i mocowania, a następnie precyzyjnie układa trawę syntetyczną, zapewniając najwyższą jakość wykonania.',
    icon: <Shovel size={40} />
  }, {
    number: 4,
    title: 'Końcowa Inspekcja i Gwarancja',
    description: 'Po dokładnej końcowej inspekcji, możesz cieszyć się swoją nową, bezobsługową, piękną zieloną przestrzenią na dachu przez wiele lat, z pełnym wsparciem naszej gwarancji.',
    icon: <ThumbsUpIcon size={40} />
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
            Nasz Proces
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
            Jak Działamy
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-secondary-600">
            Nasz usprawniony proces instalacji zapewnia płynne doświadczenie od
            początkowej konsultacji do końcowego zadowolenia z Twojej nowej
            zielonej przestrzeni na dachu.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => <ProcessStep key={index} number={step.number} title={step.title} description={step.description} icon={step.icon} />)}
        </div>
        <div className="text-center mt-8">
          <a href="/how-it-works" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Dowiedz Się Więcej o Naszym Procesie
          </a>
        </div>
      </div>
    </section>;
};
export default ProcessSection;