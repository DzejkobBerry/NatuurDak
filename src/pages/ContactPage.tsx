import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
const ContactPage = () => {
  return <div className="w-full">
      <div className="bg-primary-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch for a consultation or quote
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Send Us a Message
              </h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-1">
                      First Name
                    </label>
                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-1">
                      Last Name
                    </label>
                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-1">
                    Service Interested In
                  </label>
                  <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select a service</option>
                    <option value="rooftop">Rooftop Artificial Grass</option>
                    <option value="ground">Ground Artificial Grass</option>
                    <option value="custom">Custom Project</option>
                    <option value="other">Other/Not Sure</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                    Your Message
                  </label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Contact Information
              </h2>
              <div className="bg-secondary-50 rounded-lg p-8 mb-8">
                <div className="flex items-start mb-6">
                  <MapPinIcon className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">
                      Our Address
                    </h3>
                    <p className="text-secondary-600">
                      123 Green Street, Eco City, EC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <PhoneIcon className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-secondary-600">+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <MailIcon className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">
                      Email
                    </h3>
                    <p className="text-secondary-600">info@greenturf.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="h-6 w-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">
                      Hours
                    </h3>
                    <p className="text-secondary-600">
                      Monday - Friday: 9am - 5pm
                    </p>
                    <p className="text-secondary-600">Saturday: 10am - 2pm</p>
                    <p className="text-secondary-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="bg-secondary-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-secondary-600">Map will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ContactPage;