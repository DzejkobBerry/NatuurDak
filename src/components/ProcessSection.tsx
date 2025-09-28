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
    title: 'Consultatie en Dakevaluatie',
    description: 'We beginnen met een grondige consultatie om uw behoeften te begrijpen, de dakconstructie, draagkracht, drainagesysteem te evalueren en de beste kunstgras opties voor uw project te bespreken.',
    icon: <ClipboardIcon size={40} />
  }, {
    number: 2,
    title: 'Ontwerp en Offerte',
    description: 'Ons team creëert een op maat gemaakt ontwerp voor uw dak, rekening houdend met de constructiespecificaties, en presenteert een gedetailleerde offerte met transparante prijzen en tijdlijnverwachtingen.',
    icon: <RulerIcon size={40} />
  }, {
    number: 3,
    title: 'Gespecialiseerde Installatie',
    description: 'Ons expertteam bereidt het dakoppervlak voor, installeert de juiste drainagesystemen en bevestigingen, en legt vervolgens het kunstgras met precisie aan, waarbij de hoogste kwaliteit wordt gegarandeerd.',
    icon: <Shovel size={40} />
  }, {
    number: 4,
    title: 'Eindcontrole en Garantie',
    description: 'Na een grondige eindcontrole kunt u jarenlang genieten van uw nieuwe, onderhoudsvrije, prachtige groene ruimte op het dak, met volledige ondersteuning van onze garantie.',
    icon: <ThumbsUpIcon size={40} />
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
            Ons Proces
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
            Hoe Wij Werken
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-secondary-600">
            Ons gestroomlijnde installatieproces zorgt voor een soepele ervaring van
            de eerste consultatie tot uw volledige tevredenheid met uw nieuwe
            groene ruimte op het dak.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => <ProcessStep key={index} number={step.number} title={step.title} description={step.description} icon={step.icon} />)}
        </div>
        <div className="text-center mt-8">
          <a href="/how-it-works" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Lees Meer Over Ons Proces
          </a>
        </div>
      </div>
    </section>;
};
export default ProcessSection;