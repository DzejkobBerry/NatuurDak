import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PhoneModal from './PhoneModal';
import { PhoneModalProvider, usePhoneModal } from '../contexts/PhoneModalContext';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContent: React.FC<LayoutProps> = ({ children }) => {
  const { isPhoneModalOpen, closePhoneModal } = usePhoneModal();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <PhoneModal isOpen={isPhoneModalOpen} onClose={closePhoneModal} />
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