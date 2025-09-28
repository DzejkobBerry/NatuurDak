import React, { useState } from 'react';
import CtaSection from '../components/CtaSection';
import { XIcon } from 'lucide-react';
const GalleryPage = () => {
  const categories = ['Alle', 'Platte Daken', 'Hellende Daken', 'Terrassen', 'Daktuinen', 'Maatwerk Projecten'];
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const projects = [{
    id: 1,
    title: 'Modern Dakterras',
    category: 'Platte Daken',
    location: 'Amsterdam',
    image: '/src/assets/images/team.jpg',
    description: 'Transformatie van een plat dak van een appartementencomplex in een groene recreatieruimte met kunstgras en elementen van kleine architectuur.'
  }, {
    id: 2,
    title: 'Groen Hellend Dak',
    category: 'Hellende Daken',
    location: 'Rotterdam',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Innovatieve installatie van kunstgras op een hellend dak van een eengezinswoning, met gebruik van een speciaal bevestigingssysteem.'
  }, {
    id: 3,
    title: 'Terras met Uitzicht',
    category: 'Terrassen',
    location: 'Den Haag',
    image: 'https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Elegant terras met kunstgras, ontworpen voor een restaurant met uitzicht op zee.'
  }, {
    id: 4,
    title: 'Uitgebreide Daktuin',
    category: 'Daktuinen',
    location: 'Utrecht',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Uitgebreid daktuinproject op een kantoorgebouw, dat kunstgras combineert met groenelementen en recreatiezones.'
  }, {
    id: 5,
    title: 'Mini Voetbalveld op Dak',
    category: 'Maatwerk Projecten',
    location: 'Eindhoven',
    image: 'https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Maatwerk project van een mini voetbalveld op het dak van een school, met gebruik van gespecialiseerd kunstgras.'
  }, {
    id: 6,
    title: 'Groen Hotel Terras',
    category: 'Terrassen',
    location: 'Maastricht',
    image: 'https://images.unsplash.com/photo-1582650401294-dd3878f57dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Elegant hotelterras met kunstgras, ontworpen als ontspanningsruimte voor gasten.'
  }, {
    id: 7,
    title: 'Dak Appartementencomplex',
    category: 'Platte Daken',
    location: 'Groningen',
    image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Transformatie van het dak van een appartementencomplex in een gemeenschappelijke ruimte voor bewoners, met kunstgras en recreatiezones.'
  }, {
    id: 8,
    title: 'Privé Hellend Dak',
    category: 'Hellende Daken',
    location: 'Tilburg',
    image: 'https://images.unsplash.com/photo-1596491123074-fd69f5daa929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Installatie van kunstgras op het hellende dak van een eengezinswoning, waardoor een unieke recreatieruimte ontstaat.'
  }, {
    id: 9,
    title: 'Tuin op Kantoorgebouw Dak',
    category: 'Daktuinen',
    location: 'Breda',
    image: 'https://images.unsplash.com/photo-1582650401294-dd3878f57dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Uitgebreid tuinproject op het dak van een kantoorgebouw, met kunstgras, ontspanningszones en groenelementen.'
  }];
  const filteredProjects = activeCategory === 'Alle' ? projects : projects.filter(project => project.category === activeCategory);
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="/src/assets/images/team.jpg" alt="Galerij projecten Natuur Dak" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Project Galerij
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Bekijk ons portfolio van gerealiseerde kunstgras installaties
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
                <img src={selectedImage} alt="Vergroot beeld van project" className="max-w-full max-h-[90vh] object-contain" />
              </div>
            </div>}
          {/* No Results Message */}
          {filteredProjects.length === 0 && <div className="text-center py-12">
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Geen projecten in deze categorie
              </h3>
              <p className="text-secondary-600">
                Kies een andere categorie of neem contact met ons op om de
                mogelijkheden voor een vergelijkbaar project te bespreken.
              </p>
            </div>}
          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Geïnspireerd door Onze Projecten?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Neem vandaag nog contact met ons op om uw project te bespreken en een
              gratis offerte te ontvangen.
            </p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg">
              Start Uw Project
            </a>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default GalleryPage;