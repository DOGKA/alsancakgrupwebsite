import React from 'react';

const Footer = () => {
  const groupCompanies = [
    { name: 'Alsancak Güvenlik', url: 'https://www.alsancakguvenlik.com/' },
    { name: 'ASDTC Mühendislik', url: 'https://asdtc.co.uk/' },
    { name: 'Locomotive Door', url: 'https://locomotivedoor.com/' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark relative overflow-hidden">
      {/* Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src="/alsancaklogo.png" 
                alt="Alsancak Grup" 
                className="h-16 w-auto opacity-90"
              />
            </div>
            
            <p className="text-light-muted leading-relaxed mb-6">
              Savunma, Güvenlik, Mühendislik ve Danışmanlık alanlarında 18 yılı aşkın deneyimimiz ile hizmetinizdeyiz.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-light-muted text-sm">
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-accent mt-1"></i>
                <span>Turan Güneş Bulvarı Cezayir Cad. No. 6/7<br />Çankaya / Ankara / Türkiye</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-accent"></i>
                <span>+90 850 840 0108 / +90 312 441 21 17</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-accent"></i>
                <a href="mailto:info@alsancakgrup.com.tr" className="hover:text-accent transition-colors">
                  info@alsancakgrup.com.tr
                </a>
              </div>
            </div>
          </div>

          {/* Grup Şirketleri */}
          <div>
            <h4 className="text-lg font-bold text-light mb-6">Grup Şirketleri</h4>
            <ul className="space-y-3">
              {groupCompanies.map((company, index) => (
                <li key={index}>
                  <a 
                    href={company.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-light-muted hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <i className="fas fa-building text-xs"></i>
                    <span>{company.name}</span>
                    <i className="fas fa-external-link text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-light mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-light-muted hover:text-accent transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="text-light-muted hover:text-accent transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#blog" className="text-light-muted hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-light-muted hover:text-accent transition-colors">İletişim</a></li>
            </ul>

            {/* Social */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-light mb-3">Sosyal Medya</h5>
              <div className="flex gap-2">
                <a href="#" className="w-10 h-10 glass-effect hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-light/5">
                  <i className="fab fa-linkedin-in text-light"></i>
                </a>
                <a href="#" className="w-10 h-10 glass-effect hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-light/5">
                  <i className="fab fa-x-twitter text-light"></i>
                </a>
                <a href="#" className="w-10 h-10 glass-effect hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-light/5">
                  <i className="fab fa-youtube text-light"></i>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-light/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-light-dim">
              © {new Date().getFullYear()} <span className="text-light font-semibold">ALSANCAK GRUP</span>. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-light-muted">
              <a href="#" className="hover:text-accent transition-colors">Gizlilik</a>
              <a href="#" className="hover:text-accent transition-colors">KVKK</a>
              <a href="#" className="hover:text-accent transition-colors">Çevre Politikası</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center text-light shadow-xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 z-50 glow"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
