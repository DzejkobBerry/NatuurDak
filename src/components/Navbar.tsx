import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, MenuIcon, XIcon, Mail, Phone } from 'lucide-react';
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
      name: 'Groene Daken',
      path: '/services/rooftop'
    }, {
      name: 'Groene Gevels',
        path: '/services/groene-gevels'
    }, {
      name: 'Groene Landbedekking',
      path: '/services/groene-landbedekking'
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
    name: 'Contact',
    path: '/contact'
  }];
  return <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <span className="text-white font-bold text-sm">🌱</span>
                </div>
                <span className="text-primary-600 font-display font-bold text-2xl tracking-tight group-hover:text-primary-700 transition-colors duration-300">
                  Natuur<span className="text-secondary-700">Dak</span>
                </span>
              </div>
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
            <div className={`text-center mb-1 transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'max-h-6 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="text-xs text-secondary-600 flex items-center justify-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Mail className="w-3 h-3" />
                  <span>Info@netherlandsnatuurdak.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-3 h-3" />
                  <span>+31 616 368 386</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/contact" className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200">
                Offerte Aanvragen
              </Link>
            </div>
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