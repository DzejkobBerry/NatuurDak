import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PhoneModalContextType {
  isPhoneModalOpen: boolean;
  openPhoneModal: () => void;
  closePhoneModal: () => void;
}

const PhoneModalContext = createContext<PhoneModalContextType | undefined>(undefined);

export const usePhoneModal = () => {
  const context = useContext(PhoneModalContext);
  if (context === undefined) {
    throw new Error('usePhoneModal must be used within a PhoneModalProvider');
  }
  return context;
};

interface PhoneModalProviderProps {
  children: ReactNode;
}

export const PhoneModalProvider: React.FC<PhoneModalProviderProps> = ({ children }) => {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const openPhoneModal = () => setIsPhoneModalOpen(true);
  const closePhoneModal = () => setIsPhoneModalOpen(false);

  return (
    <PhoneModalContext.Provider value={{
      isPhoneModalOpen,
      openPhoneModal,
      closePhoneModal
    }}>
      {children}
    </PhoneModalContext.Provider>
  );
};