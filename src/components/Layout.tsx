import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PhoneModal from './PhoneModal';
import ScrollToTopButton from './ScrollToTopButton';
import { PhoneModalProvider, usePhoneModal } from '../contexts/PhoneModalContext';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContent: React.FC<LayoutProps> = ({ children }) => {
  const { isPhoneModalOpen, closePhoneModal } = usePhoneModal();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SEO: Semantic HTML5 header element */}
      <header role="banner">
        <Navbar />
      </header>
      
      {/* SEO: Semantic HTML5 main content area */}
      <main className="flex-grow" role="main" id="main-content">
        {children}
      </main>
      
      {/* SEO: Semantic HTML5 footer element */}
      <footer role="contentinfo">
        <Footer />
      </footer>
      
      {/* SEO: Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
        title="Spring naar hoofdinhoud"
      >
        Spring naar hoofdinhoud
      </a>
      
      <PhoneModal isOpen={isPhoneModalOpen} onClose={closePhoneModal} />
      <ScrollToTopButton />
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PhoneModalProvider>
      <LayoutContent>{children}</LayoutContent>
    </PhoneModalProvider>
  );
};

export default Layout;