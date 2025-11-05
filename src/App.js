import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Divider from './components/Divider';
import Services from './components/Services';
import About from './components/About';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Team from './components/Team';
import HR from './components/HR';
import Features from './components/Features';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BodyLines from './components/BodyLines';

function App() {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <BodyLines />
      <Header />
      <main>
        {/* Hero Section - Video Slider */}
        <Hero />
        
        {/* Divider with Scrolling Text */}
        <Divider 
          withText={true} 
          text="Alsancak Grup - Savunma, Güvenlik ve Mühendislik Çözümleri" 
        />
        
        {/* Services Section */}
        <Services />
        
        {/* About + Video Combined */}
        <About />
        
        {/* Timeline Section */}
        <Timeline />
        
        {/* Certifications Section - 24 Real Certificates */}
        <Certifications />
        
        {/* Divider with Text */}
        <Divider 
          withText={true} 
          text="250+ Müşteri - 40+ Çözüm Ortağı - 24 Uluslararası Sertifika" 
        />
        
        {/* Features Section */}
        <Features />
        
        {/* Partners Section - Real Clients & Partners */}
        <Partners />
        
        {/* Divider */}
        <Divider />
        
        {/* Team Section */}
        <Team />
        
        {/* HR Section */}
        <HR />
        
        {/* Blog Section */}
        <Blog />
        
        {/* Divider with Text (Light theme only for this section) */}
        <Divider 
          withText={true} 
          text="Bizimle İletişime Geçin" 
          bgClass="bg-white"
          textClass="text-neutral/35"
        />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

