import React, { useState } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
}
const testimonials: Testimonial[] = [{
  id: 1,
  name: 'Emma van der Berg',
  role: 'Appartement Eigenaar',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
  rating: 5,
  content: 'Ons sedumtak van NatuurDak heeft onze verwachtingen overtroffen! Het groene dak zorgt niet alleen voor betere isolatie, maar ook voor een prachtige uitstraling. De installatie verliep vlekkeloos en het onderhoud is minimaal.'
}, {
  id: 2,
  name: 'Pieter de Vries',
  role: 'Restaurant Eigenaar',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
  rating: 5,
  content: 'De groene gevel van ons restaurant is een echte blikvanger geworden! Klanten complimenteren ons constant over de natuurlijke uitstraling. NatuurDak heeft ons geholpen een unieke sfeer te creëren die perfect past bij onze filosofie.'
}, {
  id: 3,
  name: 'Sophie Janssen',
  role: 'Vastgoedbeheerder',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3',
  rating: 5,
  content: 'Het maatwerk project voor onze kantoorcomplex was uitstekend uitgevoerd. NatuurDak heeft een perfect dakframe systeem geïnstalleerd met droge weiden die prachtig gedijen. De bewoners zijn zeer tevreden met het resultaat.'
}, {
  id: 4,
  name: 'Lars Bakker',
  role: 'Landschapsarchitect',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
  rating: 5,
  content: 'Als professional in de sector kan ik NatuurDak van harte aanbevelen. Hun expertise in groene landbedekking en consultatie services is ongeëvenaard. Ze begrijpen de technische aspecten en leveren altijd duurzame oplossingen.'
}, {
  id: 5,
  name: 'Marloes Hendriks',
  role: 'Hotelmanager',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
  rating: 4,
  content: 'Het groene dak op ons hotel heeft niet alleen de energiekosten verlaagd, maar ook onze gasten verrast. De service en onderhoud van NatuurDak zorgt ervoor dat alles er het hele jaar door perfect uitziet.'
}];
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => <StarIcon key={index} className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill={index < rating ? 'currentColor' : 'none'} />);
  };
  return <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
            Klantbeoordelingen
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-secondary-600">
            U hoeft ons niet op ons woord te geloven. Hier is wat onze tevreden
            klanten zeggen over hun ervaringen met Natuur Dak.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Current Testimonial */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
            <div className="flex items-center mb-6">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="h-16 w-16 rounded-full object-cover mr-4" />
              <div>
                <h3 className="font-bold text-lg text-secondary-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-secondary-600">
                  {testimonials[currentIndex].role}
                </p>
                <div className="flex mt-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
            </div>
            <blockquote>
              <p className="text-lg text-secondary-700 italic">
                "{testimonials[currentIndex].content}"
              </p>
            </blockquote>
          </div>
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button onClick={prevTestimonial} className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-primary-50" aria-label="Previous testimonial">
              <ChevronLeftIcon className="h-6 w-6 text-primary-600" />
            </button>
            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary-600 w-6' : 'bg-gray-300'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
            </div>
            <button onClick={nextTestimonial} className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-primary-50" aria-label="Next testimonial">
              <ChevronRightIcon className="h-6 w-6 text-primary-600" />
            </button>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/reviews" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Lees Meer Beoordelingen
          </a>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;