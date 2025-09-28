import React, { useState } from 'react';
import CtaSection from '../components/CtaSection';
import { Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, ClockIcon, ArrowRightIcon, SearchIcon } from 'lucide-react';
const BlogPage = () => {
  const categories = ['Wszystkie', 'Dachy', 'Instalacja', 'Pielęgnacja', 'Inspiracje', 'Porady'];
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');
  const blogPosts = [{
    id: 1,
    title: '5 Korzyści z Instalacji Trawy Syntetycznej na Dachu',
    excerpt: 'Odkryj, dlaczego trawa syntetyczna to idealne rozwiązanie dla Twojego dachu i jakie korzyści przynosi jej instalacja.',
    image: 'https://images.unsplash.com/photo-1623227473930-40a5c5d7b2d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Dachy',
    author: 'Jan Kowalski',
    date: '15.09.2023',
    readTime: '5 min'
  }, {
    id: 2,
    title: 'Jak Dbać o Trawę Syntetyczną w Warunkach Dachowych',
    excerpt: 'Praktyczne wskazówki dotyczące konserwacji i pielęgnacji trawy syntetycznej zainstalowanej na dachach.',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Pielęgnacja',
    author: 'Anna Nowak',
    date: '02.09.2023',
    readTime: '7 min'
  }, {
    id: 3,
    title: 'Proces Instalacji Trawy Syntetycznej na Dachu Krok po Kroku',
    excerpt: 'Szczegółowy przewodnik po procesie instalacji trawy syntetycznej na dachu, od przygotowania powierzchni po końcowe wykończenie.',
    image: 'https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Instalacja',
    author: 'Tomasz Wiśniewski',
    date: '20.08.2023',
    readTime: '10 min'
  }, {
    id: 4,
    title: 'Inspirujące Projekty Ogrodów Dachowych z Trawą Syntetyczną',
    excerpt: 'Galeria inspirujących projektów ogrodów na dachach, wykorzystujących trawę syntetyczną jako bazę dla różnorodnych aranżacji.',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Inspiracje',
    author: 'Marta Kowalczyk',
    date: '05.08.2023',
    readTime: '8 min'
  }, {
    id: 5,
    title: 'Jaką Trawę Syntetyczną Wybrać na Dach? Poradnik Zakupowy',
    excerpt: 'Kompleksowy przewodnik po różnych rodzajach trawy syntetycznej, pomagający wybrać najlepsze rozwiązanie dla Twojego dachu.',
    image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Porady',
    author: 'Piotr Zieliński',
    date: '22.07.2023',
    readTime: '6 min'
  }, {
    id: 6,
    title: 'Systemy Drenażowe dla Trawy Syntetycznej na Dachach',
    excerpt: 'Wszystko, co powinieneś wiedzieć o systemach drenażowych dla instalacji trawy syntetycznej na dachach.',
    image: 'https://images.unsplash.com/photo-1582650401294-dd3878f57dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Dachy',
    author: 'Magdalena Dąbrowska',
    date: '10.07.2023',
    readTime: '9 min'
  }];
  const filteredPosts = blogPosts.filter(post => activeCategory === 'Wszystkie' || post.category === activeCategory).filter(post => searchQuery === '' || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || post.category.toLowerCase().includes(searchQuery.toLowerCase()));
  const featuredPost = blogPosts[0]; // Using the first post as featured
  return <div className="w-full">
      <div className="relative bg-primary-600 py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1627434620903-936deb7d9957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Blog GreenTurf" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary-600 opacity-70 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Blog & Aktualności
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Najnowsze artykuły, porady i aktualizacje
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-secondary-50 rounded-xl overflow-hidden shadow-lg">
              <div className="h-full">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-secondary-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-secondary-500 text-sm mb-6">
                  <div className="flex items-center mr-4">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.id}`} className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300">
                  Czytaj Więcej <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <input type="text" placeholder="Szukaj artykułów..." className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
                {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-1 rounded-full text-sm transition-colors duration-300 ${activeCategory === category ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'}`}>
                    {category}
                  </button>)}
              </div>
            </div>
          </div>
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-secondary-500 text-xs mb-4">
                    <div className="flex items-center mr-3">
                      <UserIcon className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center mr-3">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    Czytaj Więcej <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>)}
          </div>
          {/* No Results Message */}
          {filteredPosts.length === 0 && <div className="text-center py-12">
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Brak artykułów spełniających kryteria
              </h3>
              <p className="text-secondary-600">
                Spróbuj zmienić kryteria wyszukiwania lub kategorię.
              </p>
            </div>}
          {/* Newsletter Signup */}
          <div className="mt-20 bg-primary-50 p-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Zapisz się do Newslettera
              </h3>
              <p className="text-secondary-600 mb-6">
                Otrzymuj najnowsze artykuły, porady i aktualizacje dotyczące
                trawy syntetycznej na dachu prosto na swoją skrzynkę mailową.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input type="email" placeholder="Twój adres email" className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" />
                <button className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300 whitespace-nowrap">
                  Zapisz się
                </button>
              </div>
              <p className="text-xs text-secondary-500 mt-4">
                Szanujemy Twoją prywatność. W każdej chwili możesz zrezygnować z
                subskrypcji.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </div>;
};
export default BlogPage;