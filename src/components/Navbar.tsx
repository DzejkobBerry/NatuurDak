import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Over Ons',
    path: '/about'
  }, {
    name: 'Diensten',
    path: '/services',
    subLinks: [{
      name: 'Dakgras',
      path: '/services/rooftop'
    }, {
      name: 'Grondgras',
      path: '/services/ground'
    }, {
      name: 'Maatwerk Projecten',
      path: '/services/custom'
    }]
  }, {
    name: 'Hoe Het Werkt',
    path: '/how-it-works'
  }, {
    name: 'Galerij',
    path: '/gallery'
  }, {
    name: 'Beoordelingen',
    path: '/reviews'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-primary-600 font-display font-bold text-xl">
                Natuur Dak B.V.
              </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map(link => !link.subLinks ? <Link key={link.name} to={link.path} className={`font-medium transition-colors duration-200 hover:text-primary-600 ${location.pathname === link.path ? 'text-primary-600' : 'text-secondary-700'}`}>
                    {link.name}
                  </Link> : <div key={link.name} className="relative">
                    <button className={`font-medium flex items-center transition-colors duration-200 hover:text-primary-600 ${location.pathname.includes(link.path) ? 'text-primary-600' : 'text-secondary-700'}`} onClick={() => setServicesOpen(!servicesOpen)}>
                      {link.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    {servicesOpen && <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                        {link.subLinks.map(subLink => <Link key={subLink.name} to={subLink.path} className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600">
                            {subLink.name}
                          </Link>)}
                      </div>}
                  </div>)}
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="/contact" className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200">
              Offerte Aanvragen
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-secondary-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Hoofdmenu openen</span>
              {isOpen ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => !link.subLinks ? <Link key={link.name} to={link.path} className={`block px-3 py-2 rounded-md font-medium ${location.pathname === link.path ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600 hover:bg-gray-50'}`}>
                  {link.name}
                </Link> : <div key={link.name}>
                  <button className={`flex items-center justify-between w-full px-3 py-2 rounded-md font-medium ${location.pathname.includes(link.path) ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600 hover:bg-gray-50'}`} onClick={() => setServicesOpen(!servicesOpen)}>
                    {link.name}
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </button>
                  {servicesOpen && <div className="pl-4 space-y-1">
                      {link.subLinks.map(subLink => <Link key={subLink.name} to={subLink.path} className="block px-3 py-2 rounded-md text-sm font-medium text-secondary-600 hover:text-primary-600 hover:bg-gray-50">
                          {subLink.name}
                        </Link>)}
                    </div>}
                </div>)}
            <Link to="/contact" className="block w-full text-center mt-3 px-4 py-2 rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 font-medium">
              Offerte Aanvragen
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;