import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Deneyimli Ekip',
      description: 'Türk Silahlı Kuvvetleri, Jandarma ve Emniyet teşkilatlarında görev yapmış, savunma ve güvenlik alanında derin bilgi birikimine sahip profesyonel kadro.',
      icon: 'fa-users-gear',
      stat: null
    },
    {
      title: 'İhtiyaca Özel Çözümler',
      description: 'Her müşterinin güvenlik ve savunma ihtiyaçlarına özel çözümler. Operasyonel gereksinimlere uygun stratejilerle maksimum koruma ve verimlilik.',
      icon: 'fa-wrench',
      stat: null
    },
    {
      title: 'Millileştirme Projeleri',
      description: 'Lokomotif kapıları, batarya kutuları ve HVAC sistemlerinde yerli üretim. Dışa bağımlılığı azaltan AR-GE ve üretim süreçleri.',
      icon: 'fa-flag',
      stat: { number: '100%', label: 'Yerli Üretim' }
    },
    {
      title: 'Zamanında Teslimat',
      description: 'Titizlikle planlanan projeler ve etkin süreç yönetimi. Üretim ve lojistikte yüksek verimlilik ile güvenilir teslimat garantisi.',
      icon: 'fa-clock',
      stat: null
    }
  ];

  return (
    <section id="features" className="section-padding bg-primary relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">ÖZELLİKLERİMİZ</span>
          <h2 className="section-title mb-4">
            Neden Alsancak Grup?
          </h2>
          <p className="text-lg text-light max-w-3xl mx-auto leading-relaxed">
            Hizmetlerimizin öne çıkan özellikleri ve rekabet avantajlarımız
          </p>
        </div>

        {/* Features Grid - Eşit Boyutlar */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative glass-effect p-8 rounded-2xl hover:bg-neutral/30 transition-all duration-300 h-full flex flex-col">
                {/* Icon & Stat */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <i className={`fas ${feature.icon} text-2xl text-light`}></i>
                  </div>
                  {feature.stat && (
                    <div className="text-right">
                      <div className="text-3xl font-bold gradient-text">{feature.stat.number}</div>
                      <div className="text-light-muted text-xs font-semibold">{feature.stat.label}</div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-light mb-4 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-light-muted leading-relaxed text-base flex-1">
                  {feature.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 pt-6 border-t border-light/10">
                  <div className="w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Background Decoration - Minimal */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Features;
