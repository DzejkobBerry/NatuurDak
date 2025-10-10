import React, { useState } from 'react';
import CtaSection from '../components/CtaSection';
import SEO from '../components/SEO';
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
    image: '/images/gallery/Modern-Dakterras.png',
    description: 'Transformatie van een plat dak van een appartementencomplex in een groene recreatieruimte met kunstgras en elementen van kleine architectuur.'
  }, {
    id: 2,
    title: 'Groen Hellend Dak',
    category: 'Hellende Daken',
    location: 'Rotterdam',
    image: '/images/gallery/Groen-Hellend-Dak.png',
    description: 'Innovatieve installatie van kunstgras op een hellend dak van een eengezinswoning, met gebruik van een speciaal bevestigingssysteem.'
  }, {
    id: 3,
    title: 'Terras met Uitzicht',
    category: 'Terrassen',
    location: 'Den Haag',
    image: '/images/gallery/Terras-met-Uitzicht.png',
    description: 'Elegant terras met kunstgras, ontworpen voor een restaurant met uitzicht op zee.'
  }, {
    id: 4,
    title: 'Uitgebreide Daktuin',
    category: 'Daktuinen',
    location: 'Utrecht',
    image: '/images/gallery/Uitgebreide-Daktuin.png',
    description: 'Uitgebreid daktuinproject op een kantoorgebouw, dat kunstgras combineert met groenelementen en recreatiezones.'
  }, {
    id: 5,
    title: 'Kunstgras Fietsenstalling Overkapping',
    category: 'Maatwerk Projecten',
    location: 'Eindhoven',
    image: '/images/gallery/Kunstgras-Fietsenstalling-Overkapping.png',
    description: 'Kunstgras installatie op fietsenstalling overkapping voor een groene en onderhoudsvriendelijke oplossing.'
  }, {
    id: 6,
    title: 'Groen Hotel Terras',
    category: 'Terrassen',
    location: 'Maastricht',
    image: '/images/gallery/Groen-Hotel-Terras.png',
    description: 'Elegant hotelterras met kunstgras, ontworpen als ontspanningsruimte voor gasten.'
  }, {
    id: 7,
    title: 'Bedrijfsdak met Zonnepanelen',
    category: 'Platte Daken',
    location: 'Groningen',
    image: '/images/gallery/Bedrijfsdak-met-Zonnepanelen.png',
    description: 'Innovatieve combinatie van kunstgras en zonnepanelen op een bedrijfsdak, waardoor duurzame energie wordt opgewekt in een groene omgeving.'
  }, {
    id: 8,
    title: 'Privé Hellend Dak',
    category: 'Hellende Daken',
    location: 'Tilburg',
    image: '/images/gallery/Prive-Hellend-Dak.png',
    description: 'Installatie van kunstgras op het hellende dak van een eengezinswoning, waardoor een unieke recreatieruimte ontstaat.'
  }, {
    id: 9,
    title: 'Boerderij Hellende Daken',
    category: 'Hellende Daken',
    location: 'Breda',
    image: '/images/gallery/Boerderij-Hellende-Daken.png',
    description: 'Professionele kunstgras installatie op hellende daken van een boerderij, voor een esthetische uitstraling en functionaliteit.'
  }];
  const filteredProjects = activeCategory === 'Alle' ? projects : projects.filter(project => project.category === activeCategory);
  return <div className="w-full">
      {/* SEO Component for Gallery Page */}
      <SEO 
        title="Project Galerij - Natuur Dak B.V. | Dakgras Installaties Portfolio"
        description="Bekijk ons portfolio van gerealiseerde dakgras installaties. Van platte daken tot hellende daken, terrassen en daktuinen - ontdek onze expertise in groene dakoplossingen."
        keywords="dakgras galerij, groene daken portfolio, kunstgras installaties, dakterras projecten, hellende daken, daktuinen"
        canonicalUrl="https://natuurdak.nl/gallery"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Natuur Dak Project Galerij",
          "description": "Portfolio van gerealiseerde dakgras en groene dak installaties",
          "url": "https://natuurdak.nl/gallery",
          "image": projects.map(project => ({
            "@type": "ImageObject",
            "name": project.title,
            "description": project.description,
            "url": `https://natuurdak.nl${project.image}`,
            "contentLocation": project.location
          })),
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://natuurdak.nl"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Galerij",
                "item": "https://natuurdak.nl/gallery"
              }
            ]
          }
        }}
      />
      
      {/* Hero Section */}
      <header className="relative bg-primary-600 py-32" aria-label="Project Galerij Hero">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="/images/team.jpg" 
            alt="Natuur Dak team projecten galerij - dakgras installaties portfolio" 
            className="w-full h-full object-cover"
            width="1200"
            height="800"
            loading="eager"
          />
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
      </header>
      
      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <section className="mb-12 overflow-x-auto" aria-label="Project Categorieën">
            <div className="flex flex-wrap justify-center gap-3 min-w-max mx-auto">
              {categories.map(category => <button 
                key={category} 
                onClick={() => setActiveCategory(category)} 
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'}`}
                aria-pressed={activeCategory === category}
                title={`Filter projecten op categorie: ${category}`}
              >
                  {category}
                </button>)}
            </div>
          </section>
          
          {/* Gallery Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Project Galerij">
            {filteredProjects.map(project => <article 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer" 
              onClick={() => setSelectedImage(project.image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(project.image);
                }
              }}
              aria-label={`Bekijk ${project.title} project in ${project.location}`}
            >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.description} in ${project.location}`} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    width="400"
                    height="256"
                    loading="lazy"
                  />
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
              </article>)}
          </section>
          
          {/* Image Lightbox */}
          {selectedImage && <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" 
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Project afbeelding vergroot weergeven"
          >
              <div className="relative max-w-5xl max-h-screen">
                <button 
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg" 
                  onClick={e => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  aria-label="Sluit vergroot beeld"
                  title="Sluit vergroot beeld"
                >
                  <XIcon className="h-6 w-6 text-secondary-900" />
                </button>
                <img 
                  src={selectedImage} 
                  alt="Vergroot beeld van dakgras project - Natuur Dak installatie" 
                  className="max-w-full max-h-[90vh] object-contain"
                  loading="lazy"
                />
              </div>
            </div>}
            
          {/* No Results Message */}
          {filteredProjects.length === 0 && <section className="text-center py-12" aria-label="Geen resultaten">
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Geen projecten in deze categorie
              </h3>
              <p className="text-secondary-600">
                Kies een andere categorie of neem contact met ons op om de
                mogelijkheden voor een vergelijkbaar project te bespreken.
              </p>
            </section>}
            
          {/* CTA Section */}
          <section className="text-center mt-16" aria-label="Contact Call to Action">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Geïnspireerd door Onze Projecten?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Neem vandaag nog contact met ons op om uw project te bespreken en een
              gratis offerte te ontvangen.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
              title="Start uw dakgras project - neem contact op voor gratis offerte"
            >
              Start Uw Project
            </a>
          </section>
        </div>
      </main>
      <CtaSection />
    </div>;
};
export default GalleryPage;