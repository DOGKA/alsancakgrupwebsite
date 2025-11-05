import React from 'react';
import ImageMockup from './ImageMockup';

const Team = () => {
  const teamMembers = [
    {
      name: 'Yönetim Kurulu Başkanı',
      role: 'Genel Müdür',
      expertise: 'Stratejik Yönetim',
      experience: '25+ yıl deneyim'
    },
    {
      name: 'Güvenlik Direktörü',
      role: 'Emekli Albay',
      expertise: 'Taktik ve Operasyon',
      experience: '30+ yıl TSK deneyimi'
    },
    {
      name: 'Mühendislik Direktörü',
      role: 'Makine Mühendisi',
      expertise: 'Raylı Sistemler',
      experience: '20+ yıl sektör deneyimi'
    },
    {
      name: 'AR-GE Müdürü',
      role: 'PhD Mühendis',
      expertise: 'İnovasyon ve Geliştirme',
      experience: '15+ yıl AR-GE'
    },
    {
      name: 'İnsan Kaynakları Müdürü',
      role: 'İK Uzmanı',
      expertise: 'Yetenek Yönetimi',
      experience: '12+ yıl deneyim'
    },
    {
      name: 'Operasyon Direktörü',
      role: 'Emekli Binbaşı',
      expertise: 'Lojistik ve Operasyon',
      experience: '22+ yıl deneyim'
    }
  ];

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">EKİBİMİZ</span>
          <h2 className="section-title mb-3">Deneyimli ve Uzman Kadromuz</h2>
          <p className="text-base text-white/70 max-w-3xl mx-auto">
            Türk Silahlı Kuvvetleri, Jandarma ve Emniyet teşkilatlarında görev yapmış profesyonellerden oluşan ekibimiz
          </p>
        </div>

        {/* Team Grid - Compact, no photos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-neutral/10 rounded-xl p-5 text-center group animate-on-scroll shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Member Info - Compact */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary group-hover:translate-y-[-1px] transition-transform">
                  {member.name}
                </h3>
                <div className="text-accent font-medium text-sm">{member.role}</div>
                <div className="text-neutral-dark text-sm">{member.expertise}</div>
                <div className="flex items-center justify-center gap-2 text-neutral text-xs">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {member.experience}
                </div>
              </div>

              {/* Social Links - Minimal */}
              <div className="mt-4 pt-4 border-t border-neutral/10 flex justify-center gap-2">
                {['in', 'M', '@'].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#team"
                    className="w-8 h-8 rounded-md border border-neutral/20 text-neutral-dark hover:border-accent hover:text-accent flex items-center justify-center text-[11px] transition-colors"
                    aria-label={`Sosyal link ${icon}`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info - Compact */}
        <div className="bg-white border border-neutral/10 p-6 md:p-8 rounded-2xl text-center animate-on-scroll shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-primary">Ekibimize Katılın</h3>
          <p className="text-neutral mb-4 max-w-2xl mx-auto">
            Savunma, güvenlik ve mühendislik alanlarında kariyer yapmak istiyorsanız, deneyimli ekibimize katılın.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-accent text-white hover:opacity-90 transition-opacity">
            Kariyer Fırsatları
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Team;

