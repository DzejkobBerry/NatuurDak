import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}
const slides: Slide[] = [{
  id: 1,
  image: 'https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  title: 'Eksperci w Trawie na Dachach',
  subtitle: 'Specjalistyczne rozwiązania z trawy syntetycznej dla przestrzeni dachowych',
  ctaText: 'Poznaj Nasze Rozwiązania',
  ctaLink: '/services/rooftop'
}, {
  id: 2,
  image: 'https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  title: 'Zamień Swój Dach w Zieloną Oazę',
  subtitle: 'Trwała, bezobsługowa trawa syntetyczna dla każdego dachu',
  ctaText: 'Sprawdź Możliwości',
  ctaLink: '/services/rooftop'
}, {
  id: 3,
  image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  title: 'Innowacyjne Rozwiązania Dachowe',
  subtitle: 'Dostosowane instalacje trawy syntetycznej dla wyjątkowych projektów dachowych',
  ctaText: 'Zobacz Realizacje',
  ctaLink: '/gallery'
}];
const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);
  return <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => <div key={slide.id} className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
          {/* Content */}
          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 transition-all duration-700 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {slide.title}
              </h1>
              <p className={`text-lg md:text-xl text-white mb-8 transition-all duration-700 delay-100 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {slide.subtitle}
              </p>
              <Link to={slide.ctaLink} className={`inline-block px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-700 delay-200 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>)}
      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all duration-200" aria-label="Previous slide">
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all duration-200" aria-label="Next slide">
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => <button key={index} onClick={() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 500);
      }} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
    </div>;
};
export default HeroSlider;