import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftMenuItems = [
    { name: 'Kurumsal', href: '#about' },
    { name: 'Grup Şirketleri', href: '#services' }
  ];

  const rightMenuItems = [
    { name: 'İK Yaklaşımı', href: '#hr' },
    { name: 'BLOG', href: '#blog' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Neuros Style Header - Logo in Center */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary backdrop-blur-xl shadow-2xl py-3 border-b border-accent/30' : 'bg-primary-dark/95 backdrop-blur-lg py-5'
        }`}
      >
        <div className="container-custom">
          <div className="grid grid-cols-3 items-center gap-4">
            {/* Left Menu - Desktop */}
            <nav className="hidden lg:flex items-center justify-start gap-6">
              {leftMenuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="relative text-light hover:text-accent transition-colors group py-2"
                >
                  <span className="relative z-10 font-medium text-sm">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Logo - Center (Sadece Beyaz Kartal) */}
            <a 
              href="#home" 
              className="flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
            >
              <img 
                src="/alsancaklogo.png" 
                alt="Alsancak Grup" 
                className="h-12 lg:h-14 w-auto filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
            </a>

            {/* Right Menu - Desktop */}
            <div className="hidden lg:flex items-center justify-end gap-6">
              {rightMenuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="relative text-light hover:text-accent transition-colors group py-2"
                >
                  <span className="relative z-10 font-medium text-sm">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Contact Button */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn-primary text-sm px-6 py-3"
              >
                İletişime Geç
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-light p-2 hover:bg-accent/20 rounded-lg transition-colors ml-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-light transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-light transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-light transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-primary/95 backdrop-blur-xl"></div>
        
        {/* Menu Content */}
        <nav className="relative h-full flex flex-col items-center justify-center space-y-6 pt-20">
          {[...leftMenuItems, ...rightMenuItems].map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-2xl font-bold text-light hover:text-accent transition-all duration-300 relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="btn-primary mt-6"
          >
            İletişime Geç
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
