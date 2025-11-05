import React from 'react';

const About = () => {
  const values = [
    { icon: 'fa-star', label: 'Kalite', color: 'from-accent to-accent-light' },
    { icon: 'fa-shield', label: 'Güvenlik', color: 'from-accent to-accent-light' },
    { icon: 'fa-users', label: 'Müşteri Odaklı', color: 'from-accent to-accent-light' }
  ];

  return (
    <section id="about" className="section-padding bg-primary relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-subtitle">KURUMSAL</span>
          <h2 className="section-title">
            Hakkımızda Bilmeniz Gerekenler
          </h2>
        </div>

        {/* Main Content - 2 Column */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left - Text (5 columns) */}
          <div className="lg:col-span-5 animate-on-scroll space-y-6">
            <div className="space-y-4 text-white text-base leading-relaxed">
              <p>
                Alsancak Grup; güvenlik, savunma ve mühendislik alanlarında uçtan uca çözümler sunan, 
                operasyonel mükemmellik ve bilgi güvenliğini merkezine alan bir teknoloji ve hizmet organizasyonudur.
              </p>
              <p>
                Enerji, raylı sistemler, kritik altyapılar ve endüstriyel üretim sektörlerinde; risk analizi, saha operasyonu, 
                sistem entegrasyonu, üretim ve bakım hizmetlerini tek çatı altında yönetiriz.
              </p>
              <p>
                Tüm süreçlerimiz ölçülebilir KPI’lar, denetim döngüleri ve sürekli iyileştirme prensipleriyle yürütülür.
              </p>
            </div>

            {/* Values - Horizontal */}
            <div className="flex gap-3 pt-4">
              {values.map((value, idx) => (
                <div key={idx} className="flex-1 glass-effect p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                  <i className={`fas ${value.icon} text-accent text-xl mb-2 block`}></i>
                  <span className="text-light-muted text-xs font-semibold">{value.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center - LOGO (3 columns) */}
          <div className="lg:col-span-3 animate-on-scroll flex justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Animated Ring */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-64 h-64 border border-accent/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
              </div>
              
              {/* KARTAL LOGO - Orta */}
              <img 
                src="/alsancaklogo.png" 
                alt="Alsancak Grup" 
                className="relative z-10 w-56 h-auto opacity-95 hover:opacity-100 hover:scale-110 transition-all duration-700"
                style={{
                  filter: 'drop-shadow(0 15px 35px rgba(139, 37, 37, 0.4))'
                }}
              />
            </div>
          </div>

          {/* Right - Values replaced (no duplicate global KPIs) */}
          <div className="lg:col-span-4 animate-on-scroll space-y-4" style={{ animationDelay: '0.4s' }}>
            <div className="glass-effect p-6 rounded-xl hover:bg-neutral/30 transition-all duration-300">
              <div className="text-white text-sm leading-relaxed">
                Operasyonel mükemmellik, bilgi güvenliği ve müşteri odaklı süreç yönetimiyle uçtan uca hizmet sunuyoruz.
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl hover:bg-neutral/30 transition-all duration-300">
              <div className="text-white text-sm leading-relaxed">
                Enerji, raylı sistemler ve kritik altyapılarda tecrübeye dayalı risk yönetimi ve saha operasyonları yürütüyoruz.
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl hover:bg-neutral/30 transition-all duration-300">
              <div className="text-white text-sm leading-relaxed">
                Tedarik zinciri ve üretim süreçlerinde izlenebilirlik, denetim döngüleri ve sürekli iyileştirme uygularız.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Background - Minimal */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;
