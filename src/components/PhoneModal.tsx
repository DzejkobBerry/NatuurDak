import React from 'react';
import { usePhoneModal } from '../contexts/PhoneModalContext';
import { PhoneIcon, CopyIcon, XIcon } from 'lucide-react';

const PhoneModal: React.FC = () => {
  const { isPhoneModalOpen, closePhoneModal } = usePhoneModal();
  const phoneNumber = '+31 616 368 386';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      alert('Telefoonnummer succesvol gekopieerd!');
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = phoneNumber;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        alert('Telefoonnummer succesvol gekopieerd!');
      } catch (fallbackErr) {
        alert('Kopiëren mislukt. Probeer het handmatig te kopiëren.');
      }
      document.body.removeChild(textArea);
    }
  };

  if (!isPhoneModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-slide-up relative">
        {/* Close button */}
        <button
          onClick={closePhoneModal}
          className="absolute top-4 right-4 p-2 text-secondary-400 hover:text-secondary-600 hover:bg-secondary-100 rounded-full transition-all duration-200"
        >
          <XIcon className="h-5 w-5" />
        </button>

        {/* Header with icon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <PhoneIcon className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-2xl font-display font-bold text-secondary-900 mb-2">
            Bel Ons Direct
          </h2>
          <p className="text-secondary-600">
            Kopieer ons telefoonnummer en bel ons voor een gratis consultatie
          </p>
        </div>

        {/* Phone number display */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 mb-6 border border-primary-200">
          <div className="text-center">
            <p className="text-sm text-primary-700 font-medium mb-1">Telefoonnummer</p>
            <p className="text-2xl font-mono font-bold text-primary-800 tracking-wider">
              {phoneNumber}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={copyToClipboard}
            className="flex-1 flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <CopyIcon className="h-4 w-4 mr-2" />
            Kopieer Nummer
          </button>
          <button
            onClick={closePhoneModal}
            className="px-6 py-3 bg-secondary-100 text-secondary-700 font-medium rounded-xl hover:bg-secondary-200 transition-all duration-300"
          >
            Sluiten
          </button>
        </div>

        {/* Additional info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-secondary-500">
            Bereikbaar ma-vr 07:00-16:00 | za 10:00-16:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;