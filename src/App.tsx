import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import RooftopServicePage from './pages/services/RooftopServicePage';
import GroundServicePage from './pages/services/GroundServicePage';
import CustomServicePage from './pages/services/CustomServicePage';
import GroeneGevelsServicePage from './pages/services/GroeneGevelsServicePage';
import GroeneLandbedekkingServicePage from './pages/services/GroeneLandbedekkingServicePage';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
export function App() {
  return <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/rooftop" element={<RooftopServicePage />} />
          <Route path="/services/ground" element={<GroundServicePage />} />
          <Route path="/services/custom" element={<CustomServicePage />} />
          <Route path="/services/groene-gevels" element={<GroeneGevelsServicePage />} />
          <Route path="/services/groene-landbedekking" element={<GroeneLandbedekkingServicePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>;
}