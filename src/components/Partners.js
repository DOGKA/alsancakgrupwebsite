import React from 'react';

const Partners = () => {
  // Alsancak Güvenlik Müşterileri
  const securityClients = [
    { name: 'USAID', logo: '/images/alsancakguvenlik-customer/original_refusaid.webp' },
    { name: 'World Central Kitchen', logo: '/images/alsancakguvenlik-customer/original_wckref.webp' },
    { name: 'İçtaş İnşaat', logo: '/images/alsancakguvenlik-customer/original_ictasref.webp' },
    { name: 'Transatlantic Petroleum', logo: '/images/alsancakguvenlik-customer/original_transref.webp' },
    { name: 'Production Solution', logo: '/images/alsancakguvenlik-customer/original_prodref.webp' },
    { name: 'Perenco', logo: '/images/alsancakguvenlik-customer/original_perref.webp' },
    { name: 'Anagold Madencilik', logo: '/images/alsancakguvenlik-customer/original_refrefmaden.webp' },
    { name: 'Singapur Büyükelçiliği', logo: '/images/alsancakguvenlik-customer/original_singaref.webp' },
    { name: 'Petkim', logo: '/images/alsancakguvenlik-customer/original_petref.webp' },
    { name: 'TMO', logo: '/images/alsancakguvenlik-customer/original_tmoref.webp' },
    { name: 'Tiway Oil', logo: '/images/alsancakguvenlik-customer/original_tiwayred.webp' },
    { name: 'NATO', logo: '/images/alsancakguvenlik-customer/original_natoref.webp' },
    { name: 'UNICEF', logo: '/images/alsancakguvenlik-customer/original_unicefref.webp' },
    { name: 'Maritaş', logo: '/images/alsancakguvenlik-customer/original_maritasref.webp' },
    { name: 'Savronik', logo: '/images/alsancakguvenlik-customer/original_savref.webp' },
    { name: 'Kolin', logo: '/images/alsancakguvenlik-customer/original_kolinref.webp' },
    { name: 'Yapı Merkezi', logo: '/images/alsancakguvenlik-customer/original_refyapi.webp' },
    { name: 'Statkraft', logo: '/images/alsancakguvenlik-customer/original_statref.webp' },
    { name: 'TurkStream', logo: '/images/alsancakguvenlik-customer/original_turkref.webp' }
  ];

  // Alsancak Savunma
  const defensePartners = [
    { name: 'ASELSAN', logo: '/images/alsancaksavunma-main-partners/aselsan-270.png' },
    { name: 'Roketsan', logo: '/images/alsancaksavunma-main-partners/roketsan-805.png' },
    { name: 'MKE', logo: '/images/alsancaksavunma-main-partners/mke-774.png' },
    { name: 'Aspilsan', logo: '/images/alsancaksavunma-main-partners/aspilsan-18.png' },
    { name: 'Savunma Sanayi Başkanlığı', logo: '/images/alsancaksavunma-main-partners/savunma-sanayii-baskanligi-571.png' },
    { name: 'TSK Güçlendirme Vakfı', logo: '/images/alsancaksavunma-main-partners/turk-silahli-kuvvetlerini-guclendirme-vakfi-590.png' }
  ];

  // ASDTC Çözüm Ortakları
  const solutionPartners = [
    { name: 'Fastline PCB', logo: '/images/companylogos/fastlinepcb.webp' },
    { name: 'Lixpen', logo: '/images/companylogos/lixpen.jpg' },
    { name: 'Sharebot', logo: '/images/companylogos/sharebots.jpg' },
    { name: 'Cleeve Technology', logo: '/images/companylogos/cleevetech.png' },
    { name: 'Ftech GNSS', logo: '/images/companylogos/ftech.png' },
    { name: 'Mantis Vision', logo: '/images/companylogos/mantisvision.jpg' },
    { name: 'Xsis Electronics', logo: '/images/companylogos/xsis.png' },
    { name: 'Farnell', logo: '/images/companylogos/farnell.png' },
    { name: 'SIT Integration', logo: '/images/companylogos/sitintegration.jpg' },
    { name: 'Pars Komponenty', logo: '/images/companylogos/partscomp.png' },
    { name: 'Loctite', logo: '/images/companylogos/loctite.jpg' },
    { name: 'Epsilor Industries', logo: '/images/companylogos/epsilo.jpg' },
    { name: 'YIC', logo: '/images/companylogos/YIC.png' },
    { name: 'Scarabee', logo: '/images/companylogos/scrarabee.png' },
    { name: 'Glosec', logo: '/images/companylogos/glosec.jpg' },
    { name: 'RS Components', logo: '/images/companylogos/rscompatentn.jpg' },
    { name: 'Tersus GNSS', logo: '/images/companylogos/tersusgnss.jpg' },
    { name: 'Laipac Technology', logo: '/images/companylogos/laipac.jpg' },
    { name: 'Switchcraft Conxall', logo: '/images/companylogos/switchcraft.png' },
    { name: 'Fastact', logo: '/images/companylogos/fastac.png' },
    { name: 'Amptec Research', logo: '/images/companylogos/amptecresearch.png' },
    { name: 'IPS International', logo: '/images/companylogos/ips.jpg' },
    { name: 'Dakota Air Parts', logo: '/images/companylogos/dakotaair.png' },
    { name: 'Molykote', logo: '/images/companylogos/molykote.png' },
    { name: '3M Company', logo: '/images/companylogos/3mcompany.png' },
    { name: 'Honeywell', logo: '/images/companylogos/honeywell.png' },
    { name: 'Henkel AG', logo: '/images/companylogos/henkell.png' },
    { name: 'Tesa Tape', logo: '/images/companylogos/tesa.png' },
    { name: 'HTC Parking', logo: '/images/companylogos/htcparking.png' },
    { name: 'CUAV', logo: '/images/companylogos/cuav-logo.png' },
    { name: 'iniVation', logo: '/images/companylogos/inivation.jpg' },
    { name: 'Traffi Gloves', logo: '/images/companylogos/traffigloves.jpg' }
  ];

  const LogoCard = ({ logo, name }) => (
    <div 
      className="flex-shrink-0 w-44 h-28 bg-white rounded-lg flex items-center justify-center p-4 border border-accent/30 hover:border-accent transition-all duration-300" 
      style={{ 
        boxShadow: '0 2px 8px rgba(139, 37, 37, 0.12), 0 1px 3px rgba(139, 37, 37, 0.08)',
        marginTop: '4px',
        marginBottom: '4px'
      }}
    >
      <img 
        src={logo}
        alt={name}
        className="max-h-16 max-w-full w-auto object-contain hover:scale-105 transition-transform"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </div>
  );

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">İŞ ORTAKLARIMIZ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary">
            Güçlü İş Ortaklıkları
          </h2>
          
          {/* Stats - Büyük ve Etkileyici */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl hover:scale-105 transition-transform duration-300 border border-neutral/10 shadow-lg">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">250+</div>
                <div className="text-primary text-base font-semibold">Müşteri</div>
              </div>
              <div className="bg-white p-8 rounded-2xl hover:scale-105 transition-transform duration-300 border border-neutral/10 shadow-lg">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">30+</div>
                <div className="text-primary text-base font-semibold">Ülke</div>
              </div>
              <div className="bg-white p-8 rounded-2xl hover:scale-105 transition-transform duration-300 border border-neutral/10 shadow-lg">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">18+</div>
                <div className="text-primary text-base font-semibold">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Alsancak Güvenlik - Infinite Slider */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-primary mb-8 text-center">
            Alsancak Güvenlik - Müşterilerimiz
          </h3>
          <div className="overflow-hidden py-2">
            <div className="scroll-text flex items-center gap-6">
              {[...securityClients, ...securityClients, ...securityClients].map((client, index) => (
                <LogoCard key={index} logo={client.logo} name={client.name} />
              ))}
            </div>
          </div>
        </div>

        {/* 2. Alsancak Savunma - Infinite Slider */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-primary mb-8 text-center">
            Alsancak Savunma - Stratejik Partnerler
          </h3>
          <div className="overflow-hidden py-2">
            <div className="scroll-text-reverse flex items-center gap-6">
              {[...defensePartners, ...defensePartners, ...defensePartners, ...defensePartners].map((partner, index) => (
                <LogoCard key={index} logo={partner.logo} name={partner.name} />
              ))}
            </div>
          </div>
        </div>

        {/* 3. ASDTC - Infinite Slider */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-primary mb-8 text-center">
            ASDTC - Çözüm Ortaklarımız
          </h3>
          <div className="overflow-hidden py-2">
            <div className="scroll-text flex items-center gap-6">
              {[...solutionPartners, ...solutionPartners].map((partner, index) => (
                <LogoCard key={index} logo={partner.logo} name={partner.name} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <p className="text-neutral mb-4">
            250+ kuruluşla güçlü iş birlikleri
          </p>
          <a href="#contact" className="btn-primary">
            İş Ortağımız Olun
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>

      {/* Background - Minimal */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Partners;
