import React from 'react';

const Timeline = () => {
  const milestones = [
    {
      year: '2013',
      title: 'Mühendislik Çözümü',
      description: 'Entegreli Darbe Kapasitörü ve Lityum Pil Üretimi',
      icon: 'fa-lightbulb'
    },
    {
      year: '2014',
      title: 'Resmi Dağıtıcı',
      description: '50+ Firmanın Yetkili Satıcılığı',
      icon: 'fa-handshake'
    },
    {
      year: '2018',
      title: 'DC MOTOR',
      description: '+100M Euro DC Motor İthalat Anlaşması',
      icon: 'fa-industry'
    },
    {
      year: '2020',
      title: 'Lokomotif Kapısı',
      description: 'Millileştirme Projesi',
      icon: 'fa-train'
    },
    {
      year: '2021',
      title: 'Batarya Kutusu',
      description: 'Yerli Üretim',
      icon: 'fa-battery-full'
    }
  ];

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="container-custom">
        {/* Header - Kompakt */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-subtitle">MİLLİLEŞTİRME TARİHÇESİ</span>
          <h2 className="section-title">
            Endüstriyel Fikirler Gelişimi Kaçınılmaz Kılar
          </h2>
        </div>

        {/* Timeline - Horizontal Kompakt */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

          {/* Timeline Items - Yatay */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-effect p-5 rounded-xl hover:bg-neutral/30 transition-all duration-300 hover:scale-105 group text-center">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mx-auto mb-3 glow group-hover:rotate-12 transition-transform duration-300">
                    <i className={`fas ${milestone.icon} text-xl text-light`}></i>
                  </div>
                  
                  {/* Year */}
                  <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-bold text-light mb-1">{milestone.title}</h3>
                  
                  {/* Description */}
                  <p className="text-xs text-light-dim leading-tight">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA - Kompakt */}
        <div className="mt-12 text-center animate-on-scroll">
          <div className="inline-block glass-effect p-6 md:p-8 rounded-2xl max-w-2xl">
            <h3 className="text-xl font-bold mb-3 text-light">
              Millileştirme Yolculuğumuz Devam Ediyor
            </h3>
            <p className="text-light-muted mb-4 text-sm leading-relaxed">
              Savunma sanayii ve raylı sistemlerde Türkiye'nin dışa bağımlılığını azaltmak için 
              AR-GE ve üretim süreçlerine yatırım yapıyoruz.
            </p>
            <a href="#contact" className="btn-primary text-sm px-6 py-3">
              Bilgi Alın
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Background - Minimal */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Timeline;
