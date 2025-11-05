import React from 'react';

const Certifications = () => {
  // ASDTC Mühendislik Sertifikaları
  const engineeringCerts = [
    'EN 15085-2 CL1 - Kaynaklı İmalat',
    'ISO 3834:2005 - Kaynak Üretim Kalite',
    'ISO 9001:2015 - Kalite Yönetim',
    'ISO 10002:2018 - Müşteri Memnuniyeti',
    'ISO 14001:2015 - Çevre Yönetim',
    'ISO 22301:2012 - İş Devamlılığı',
    'ISO 27001:2013 - Bilgi Güvenliği',
    'ISO 31000:2018 - Risk Yönetim',
    'ISO 37001:2016 - Rüşvetle Mücadele',
    'ISO 45001:2018 - İş Sağlığı Güvenliği',
    'ISO 50001:2018 - Enerji Yönetim',
    'ISO 28000:2022 - Güvenlik Esneklik',
    'TS EN ISO 15085-2 - Raylı Araç Kaynak'
  ];

  // Alsancak Güvenlik Sertifikaları
  const securityCerts = [
    'ISO 18788 - Özel Güvenlik Operasyonları',
    'ISO 45001 - Endüstriyel Güvenlik',
    'ISO 27001 - Bilgi Güvenliği',
    'ISO 31000 - Risk Yönetim',
    'ISO 41001 - Tesis Yönetim',
    'ISO 37001 - Yolsuzlukla Mücadele',
    'ISO 44001 - İşbirliği Yönetim',
    'ISO 9001 - Kalite Yönetim',
    'ISO 10002 - Müşteri Memnuniyeti',
    'ISO 22301 - İş Sürekliliği',
    'ISO 14001 - Çevre Yönetim'
  ];

  const CertCard = ({ text }) => (
    <div 
      className="flex-shrink-0 bg-white px-8 py-4 rounded-lg border border-accent/25 hover:border-accent hover:shadow-md transition-all duration-300"
      style={{ 
        boxShadow: '0 2px 6px rgba(139, 37, 37, 0.08)',
        marginTop: '4px',
        marginBottom: '4px'
      }}
    >
      <span className="text-primary text-sm font-semibold whitespace-nowrap">{text}</span>
    </div>
  );

  return (
    <section className="section-padding bg-neutral-light relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-subtitle">SERTİFİKALARIMIZ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Uluslararası Standartlar
          </h2>
          <p className="text-neutral max-w-2xl mx-auto">
            24 ISO sertifikası ile kalite güvencesi
          </p>
        </div>

        {/* ASDTC Sertifikaları - Slider 1 (Sağa) */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-primary mb-6 text-center">
            ASDTC Mühendislik
          </h3>
          <div className="overflow-hidden py-2">
            <div className="scroll-text flex items-center gap-4">
              {[...engineeringCerts, ...engineeringCerts, ...engineeringCerts].map((cert, index) => (
                <CertCard key={index} text={cert} />
              ))}
            </div>
          </div>
        </div>

        {/* Alsancak Güvenlik Sertifikaları - Slider 2 (Sola) */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-primary mb-6 text-center">
            Alsancak Güvenlik
          </h3>
          <div className="overflow-hidden py-2">
            <div className="scroll-text-reverse flex items-center gap-4">
              {[...securityCerts, ...securityCerts, ...securityCerts].map((cert, index) => (
                <CertCard key={index} text={cert} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-on-scroll">
          <div className="inline-block bg-white p-8 rounded-2xl max-w-2xl border border-neutral/10 shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-primary">
              Kalite Güvencemiz
            </h3>
            <p className="text-neutral mb-6 leading-relaxed">
              Tüm sertifikalarımız uluslararası akredite kuruluşlar tarafından denetlenmektedir
            </p>
            <a href="#contact" className="btn-primary">
              Sertifikalarımız Hakkında Bilgi
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Background - Minimal */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Certifications;
