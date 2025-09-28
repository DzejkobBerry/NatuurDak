import React, { useState } from 'react';
import CtaSection from '../components/CtaSection';
import { StarIcon, ThumbsUpIcon, CheckCircleIcon } from 'lucide-react';
const ReviewsPage = () => {
  const categories = ['Alle', 'Platte Daken', 'Hellende Daken', 'Terrassen', 'Daktuinen', 'Maatwerk Projecten'];
  const [activeCategory, setActiveCategory] = useState('Alle');
  const reviews = [{
    id: 1,
    name: 'Anna Kowalska',
    role: 'Appartement Eigenaar',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Platte Daken',
    date: '12.06.2023',
    title: 'Geweldige transformatie van mijn dak!',
    content: 'We hebben ons dak getransformeerd in een prachtige tuin met Natuur Dak kunstgras. De installatie was vlekkeloos en twee jaar later ziet het er nog steeds uit als nieuw ondanks constant gebruik en blootstelling aan weersomstandigheden. Het team was professioneel, punctueel en zeer behulpzaam tijdens het hele proces. Ik waardeer vooral hun aandacht voor detail en bereidheid om al mijn vragen te beantwoorden. Ik beveel Natuur Dak aan iedereen die zijn dak wil transformeren in een prachtige, groene ruimte!'
  }, {
    id: 2,
    name: 'Michiel Nowak',
    role: 'Restaurant Eigenaar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Terrassen',
    date: '03.08.2023',
    title: 'Uitstekende investering voor ons restaurant',
    content: 'Het ontspanningsgebied op het dak van ons restaurant ziet er fantastisch uit dankzij de kunstgras installatie. Onze klanten houden van de sfeer en het onderhoud is veel gemakkelijker dan echt gras in zo\'n drukke ruimte. Het Natuur Dak team begreep onze behoeften voor intensief gebruik van de ruimte en stelde de perfecte oplossing voor. De installatie werd snel en efficiënt uitgevoerd, waardoor de verstoring van de restaurantactiviteiten tot een minimum werd beperkt. Ik beveel hun diensten zeker aan elke ondernemer die zijn ruimte aantrekkelijker wil maken.'
  }, {
    id: 3,
    name: 'Eva Wiśniewska',
    role: 'Vastgoed Beheerder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3',
    rating: 4,
    category: 'Platte Daken',
    date: '22.05.2023',
    title: 'Geweldige oplossing voor ons appartementencomplex',
    content: 'We hebben kunstgras geïnstalleerd op het dak van ons appartementencomplex en bewoners zijn er dol op. Het Natuur Dak team was professioneel, efficiënt en leverde precies wat ze beloofden. De enige reden waarom ik geen volle 5 sterren geef is een kleine vertraging in het schema, hoewel dit gedeeltelijk te wijten was aan weersomstandigheden. Verder is de kwaliteit van de installatie uitstekend en is de ruimte een favoriete ontmoetingsplaats voor bewoners geworden. Ik waardeer ook de gedetailleerde onderhoudsinstructies die we na voltooiing van het werk ontvingen.'
  }, {
    id: 4,
    name: 'Jan Kowalczyk',
    role: 'Landschapsarchitect',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Daktuinen',
    date: '10.07.2023',
    title: 'Hoogste kwaliteit en professionaliteit',
    content: 'Als landschapsarchitect heb ik met veel kunstgrasbedrijven gewerkt, maar Natuur Dak onderscheidt zich door productkwaliteit en aandacht voor detail, vooral bij dakinstallaties. Ik beveel ze aan al mijn klanten die onderhoudsvrije oplossingen zoeken. Hun technische kennis van drainage en dakconstructies is indrukwekkend, wat cruciaal is voor het langdurige succes van dergelijke installaties. Samenwerking met hen bij verschillende projecten was altijd soepel en professioneel. Ik waardeer ook hun innovatieve benadering van aangepaste ontwerpuitdagingen.'
  }, {
    id: 5,
    name: 'Katarzyna Lewandowska',
    role: 'Huiseigenaar',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=761&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Hellende Daken',
    date: '05.09.2023',
    title: 'Innovatieve oplossing voor ons hellende dak',
    content: 'We waren sceptisch over de mogelijkheid om kunstgras op ons hellende dak te installeren, maar Natuur Dak bewees dat het mogelijk is! Hun gespecialiseerde bevestigingssysteem werkt perfect en het visuele effect overtrof onze verwachtingen. Nu hebben we een unieke ontspanningsruimte met prachtig uitzicht. Het proces van consultatie tot installatie was zeer professioneel. Ik waardeer vooral het geduld van het team bij het uitleggen van technische aspecten van de installatie en het beantwoorden van onze vele vragen. Ik beveel Natuur Dak zeker aan iedereen die innovatieve oplossingen zoekt voor ongewone ruimtes.'
  }, {
    id: 6,
    name: 'Piotr Zieliński',
    role: 'Hotel Directeur',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3',
    rating: 4,
    category: 'Terrassen',
    date: '18.07.2023',
    title: 'Uitstekende oplossing voor ons hotel terras',
    content: 'We besloten kunstgras te installeren op het terras van ons hotel en zijn zeer tevreden met de resultaten. Gasten houden van de nieuwe ruimte en wij waarderen het gemakkelijke onderhoud. Het Natuur Dak team was professioneel en flexibel, aangepast aan ons strakke schema. Het enige kleine minpunt was een lichte budgetoverschrijding, maar gezien de kwaliteit van uitvoering en materialen beschouwen we dit als een goede investering. We waarderen vooral de duurzaamheid van het gras, dat intensief gebruik door onze gasten uitstekend doorstaat.'
  }, {
    id: 7,
    name: 'Magdalena Dąbrowska',
    role: 'Appartement Eigenaar',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Maatwerk Projecten',
    date: '30.06.2023',
    title: 'Creatieve oplossing voor mijn ongewone dak',
    content: 'Mijn dak heeft een ongewone vorm en indeling, wat een uitdaging was voor veel bedrijven. Natuur Dak nam niet alleen deze uitdaging aan, maar creëerde een absoluut spectaculaire ruimte die elke centimeter beschikbare ruimte benut. Hun creatieve benadering en technische know-how zijn echt indrukwekkend. Het ontwerpproces was zeer interactief, ik voelde me betrokken bij elke stap. De installatie verliep soepel en het eindresultaat overtrof mijn verwachtingen. Ik laat met plezier mijn nieuwe dak zien aan vrienden en familie, die onder de indruk zijn van de transformatie.'
  }, {
    id: 8,
    name: 'Tomasz Adamski',
    role: 'Bedrijfseigenaar',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    rating: 5,
    category: 'Platte Daken',
    date: '15.08.2023',
    title: 'Professionele realisatie voor ons kantoorgebouw',
    content: 'We besloten kunstgras te installeren op het dak van ons kantoorgebouw om een ontspanningsruimte voor werknemers te creëren. Natuur Dak deed fantastisch werk, van ontwerp tot realisatie. Hun team was uiterst professioneel, hield zich aan alle deadlines en budget. De kwaliteit van gebruikte materialen is uitstekend en het drainagesysteem werkt perfect zelfs tijdens intense regenval. Onze werknemers houden van de nieuwe ruimte, wat een positieve invloed heeft gehad op de bedrijfssfeer en productiviteit. Ik beveel Natuur Dak zeker aan voor commerciële projecten.'
  }];
  const filteredReviews = activeCategory === 'Alle' ? reviews : reviews.filter(review => review.category === activeCategory);
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => <StarIcon key={index} className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill={index < rating ? 'currentColor' : 'none'} />);
  };
  const stats = [{
    label: 'Tevreden Klanten',
    value: '500+',
    icon: <ThumbsUpIcon className="h-8 w-8 text-primary-600" />
  }, {
    label: 'Voltooide Projecten',
    value: '650+',
    icon: <CheckCircleIcon className="h-8 w-8 text-primary-600" />
  }, {
    label: 'Gemiddelde Beoordeling',
    value: '4.9/5',
    icon: <StarIcon className="h-8 w-8 text-yellow-400" fill="currentColor" />
  }];
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Klantbeoordelingen Natuur Dak" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Beoordelingen van Onze Klanten
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Zie wat tevreden klanten over ons zeggen
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
                Geen beoordelingen in deze categorie
              </h3>
              <p className="text-secondary-600">
                Selecteer een andere categorie of kom later terug wanneer we
                meer beoordelingen hebben toegevoegd.
              </p>
            </div>}
          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Word Onderdeel van Onze Tevreden Klanten
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Neem vandaag nog contact met ons op om uw project te bespreken en
              word onderdeel van honderden tevreden Natuur Dak klanten.
            </p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
              Begin Uw Transformatie
            </a>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default ReviewsPage;