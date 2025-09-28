import React, { useState } from 'react';
import CtaSection from '../components/CtaSection';
import { XIcon } from 'lucide-react';
const GalleryPage = () => {
  const categories = ['Wszystkie', 'Dachy Płaskie', 'Dachy Skośne', 'Tarasy', 'Ogrody Dachowe', 'Projekty Niestandardowe'];
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const projects = [{
    id: 1,
    title: 'Nowoczesny Taras Dachowy',
    category: 'Dachy Płaskie',
    location: 'Warszawa',
    image: 'https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Transformacja płaskiego dachu apartamentowca w zieloną przestrzeń wypoczynkową z trawą syntetyczną i elementami małej architektury.'
  }, {
    id: 2,
    title: 'Zielony Dach Skośny',
    category: 'Dachy Skośne',
    location: 'Kraków',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Innowacyjna instalacja trawy syntetycznej na skośnym dachu domu jednorodzinnego, z wykorzystaniem specjalnego systemu mocowań.'
  }, {
    id: 3,
    title: 'Taras z Widokiem',
    category: 'Tarasy',
    location: 'Gdańsk',
    image: 'https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Elegancki taras z trawą syntetyczną, zaprojektowany dla restauracji z widokiem na morze.'
  }, {
    id: 4,
    title: 'Kompleksowy Ogród Dachowy',
    category: 'Ogrody Dachowe',
    location: 'Wrocław',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Kompleksowy projekt ogrodu na dachu budynku biurowego, łączący trawę syntetyczną z elementami zieleni i strefami wypoczynkowymi.'
  }, {
    id: 5,
    title: 'Mini Boisko na Dachu',
    category: 'Projekty Niestandardowe',
    location: 'Poznań',
    image: 'https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Niestandardowy projekt mini boiska do piłki nożnej na dachu szkoły, z wykorzystaniem specjalistycznej trawy syntetycznej.'
  }, {
    id: 6,
    title: 'Zielony Taras Hotelowy',
    category: 'Tarasy',
    location: 'Zakopane',
    image: 'https://images.unsplash.com/photo-1582650401294-dd3878f57dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Elegancki taras hotelowy z trawą syntetyczną, zaprojektowany jako przestrzeń relaksacyjna dla gości.'
  }, {
    id: 7,
    title: 'Dach Apartamentowca',
    category: 'Dachy Płaskie',
    location: 'Łódź',
    image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Transformacja dachu apartamentowca w przestrzeń wspólną dla mieszkańców, z trawą syntetyczną i strefami wypoczynkowymi.'
  }, {
    id: 8,
    title: 'Prywatny Dach Skośny',
    category: 'Dachy Skośne',
    location: 'Szczecin',
    image: 'https://images.unsplash.com/photo-1596491123074-fd69f5daa929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Instalacja trawy syntetycznej na skośnym dachu domu jednorodzinnego, tworząca unikalną przestrzeń wypoczynkową.'
  }, {
    id: 9,
    title: 'Ogród na Dachu Biurowca',
    category: 'Ogrody Dachowe',
    location: 'Katowice',
    image: 'https://images.unsplash.com/photo-1582650401294-dd3878f57dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Kompleksowy projekt ogrodu na dachu biurowca, z trawą syntetyczną, strefami relaksu i elementami zieleni.'
  }];
  const filteredProjects = activeCategory === 'Wszystkie' ? projects : projects.filter(project => project.category === activeCategory);
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Galeria projektów GreenTurf" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Galeria Projektów
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Zobacz nasze portfolio zrealizowanych instalacji trawy syntetycznej
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex flex-wrap justify-center gap-3 min-w-max mx-auto">
              {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'}`}>
                  {category}
                </button>)}
            </div>
          </div>
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer" onClick={() => setSelectedImage(project.image)}>
                <div className="h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-secondary-900">
                      {project.title}
                    </h3>
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-secondary-500 text-sm mb-3">
                    {project.location}
                  </p>
                  <p className="text-secondary-600">{project.description}</p>
                </div>
              </div>)}
          </div>
          {/* Image Lightbox */}
          {selectedImage && <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
              <div className="relative max-w-5xl max-h-screen">
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg" onClick={e => {
              e.stopPropagation();
              setSelectedImage(null);
            }}>
                  <XIcon className="h-6 w-6 text-secondary-900" />
                </button>
                <img src={selectedImage} alt="Powiększony widok projektu" className="max-w-full max-h-[90vh] object-contain" />
              </div>
            </div>}
          {/* No Results Message */}
          {filteredProjects.length === 0 && <div className="text-center py-12">
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Brak projektów w tej kategorii
              </h3>
              <p className="text-secondary-600">
                Prosimy wybrać inną kategorię lub skontaktować się z nami, aby
                omówić możliwości realizacji podobnego projektu.
              </p>
            </div>}
          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Zainspirowany Naszymi Projektami?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś, aby omówić swój projekt i otrzymać
              bezpłatną wycenę.
            </p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
              Rozpocznij Swój Projekt
            </a>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default GalleryPage;