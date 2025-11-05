import React, { useEffect } from 'react';
import ImageMockup from './ImageMockup';

const Services = () => {
  const mainServices = [
    {
      company: 'Alsancak Güvenlik',
      tagline: '2007\'den beri güvenlik ve koruma hizmetleri',
      description: 'Türkiye ve dünyada enerji sektöründe güvenlik ve danışmanlık hizmetleri sunuyoruz. Türk Silahlı Kuvvetleri, Jandarma ve Emniyet\'te görev yapmış uzman kadrolarımızla uluslararası standartlarda hizmet.',
      services: [
        { name: 'İnsanlı Güvenlik', desc: 'Yakın Koruma ve Seyahat Yönetimi', icon: 'fa-user-shield' },
        { name: 'Fiziksel Güvenlik', desc: 'Büyükelçilik, Şirket Merkezi, Fabrika', icon: 'fa-building-shield' },
        { name: 'Kritik Altyapı Güvenliği', desc: 'Baraj, Köprü, Karayolu İnşaatları', icon: 'fa-hard-hat' },
        { name: 'Enerji Tesisi Güvenliği', desc: 'Petrol/Gaz Hattı, Hidroelektrik', icon: 'fa-oil-well' },
        { name: 'Uzaktan İzleme', desc: 'CCTV, Alarm Merkezi', icon: 'fa-video' }
      ],
      stats: { number: '30+', label: 'Ülke', detail: '7 zorlu bölgede operasyon' },
      icon: 'fa-shield-halved',
      link: 'https://www.alsancakguvenlik.com/',
      imageNote: 'Görsel: 600px x 400px - Güvenlik operasyonu görseli'
    },
    {
      company: 'ASDTC Mühendislik',
      tagline: 'Endüstriyel Fikirlerin Gerçekleşme Merkezi',
      description: 'Savunma sanayi ve ulaşım teknolojisinde kritik malzeme tedariki. Elektronik komponent, tüketim elektroniği, kablo, soğuk zincir ve kimyasal ürünlerde 40+ global çözüm ortağı ile hizmet.',
      services: [
        { name: 'Elektronik Komponent', desc: 'Tüketim elektroniği ve bileşenler', icon: 'fa-microchip' },
        { name: 'Kablo Çözümleri', desc: 'Nitelikli kablolar ve bağlantı elemanları', icon: 'fa-plug' },
        { name: 'Soğuk Zincir', desc: 'Ürün teslimi ve lojistik', icon: 'fa-truck-fast' },
        { name: 'Kimyasal Malzemeler', desc: 'Endüstriyel kimyasal tedarik', icon: 'fa-flask' },
        { name: 'Raylı Sistem Üretimi', desc: 'EN 15085-2 CL1 sertifikalı imalat', icon: 'fa-train' }
      ],
      stats: { number: '40+', label: 'Çözüm Ortağı', detail: '200+ ürün çeşidi' },
      icon: 'fa-gears',
      link: 'https://asdtc.co.uk/',
      imageNote: 'ASDTC üretim videosu'
    },
    {
      company: 'Locomotive Door',
      tagline: 'Raylı Sistem Kapı Çözümleri',
      description: '%100 yerli sermaye ile E5000 Elektrikli Lokomotifler için iç ve dış kapıların seri üretimi. Avrupa ülkelerinde geçerli kullanım ve satış lisanslarına sahip.',
      services: [
        { name: 'Lokomotif Kapıları', desc: 'Sürücü iç ve dış kapılar', icon: 'fa-door-open' },
        { name: 'Metro Kapıları', desc: 'Hafif raylı sistemler için', icon: 'fa-train-subway' },
        { name: 'Bakım Hizmetleri', desc: 'Periyodik bakım ve onarım', icon: 'fa-screwdriver-wrench' },
        { name: 'Yedek Parça', desc: 'Orijinal ve uyumlu parçalar', icon: 'fa-box-open' }
      ],
      stats: { number: '100%', label: 'Yerli', detail: 'Millileştirme projesi' },
      icon: 'fa-door-closed',
      link: 'https://locomotivedoor.com/',
      imageNote: 'Görsel: 600px x 400px - Lokomotif kapısı görseli'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Autoplay videos only when visible to avoid power saver interruptions */}
        {(() => {
          // inline effect runner without changing tree structure
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useEffect(() => {
            const videos = Array.from(document.querySelectorAll('video.autoplay-video'));
            if (videos.length === 0) return;
            const io = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  const v = entry.target;
                  if (!(v instanceof HTMLVideoElement)) return;
                  if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    v.play().catch(() => {});
                  } else {
                    v.pause();
                  }
                });
              },
              { threshold: [0, 0.5, 1] }
            );
            videos.forEach((v) => io.observe(v));
            return () => io.disconnect();
          }, []);
          return null;
        })()}
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="section-subtitle">GRUP ŞİRKETLERİ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Özel Stratejik Güvenlik ve Mühendislik Çözümleri
          </h2>
          <p className="text-lg text-neutral max-w-4xl mx-auto leading-relaxed">
            Alsancak Grup bünyesinde 3 şirket ile savunma, güvenlik ve mühendislik sektörlerinde hizmet veriyoruz
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-12 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="relative group animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative bg-neutral-light/50 p-8 md:p-10 rounded-2xl ring-1 ring-neutral/10 shadow-md">
                {/* Top Row: Content | Media */}
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left - Company Info */}
                  <div className="lg:col-span-7">
                    {/* Company Header */}
                    <div className="flex items-start gap-3 mb-6">
                      <div className="flex-1">
                        <a 
                          href={service.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 group/link"
                        >
                          <h3 className="text-2xl md:text-3xl font-bold text-primary group-hover/link:text-accent transition-colors">
                            {service.company}
                          </h3>
                          <i className="fas fa-external-link-alt text-accent text-sm opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                        </a>
                        <p className="text-neutral text-sm mt-1">{service.tagline}</p>
                      </div>
                    </div>

                    <p className="text-neutral-dark leading-relaxed mb-6 text-base">
                      {service.description}
                    </p>

                    {/* Services Grid */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.services.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-white/[0.02] hover:bg-white/[0.06] rounded-lg transition-colors duration-200"
                        >
                          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i className={`fas ${item.icon} text-accent text-sm`}></i>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-bold text-primary text-sm mb-0.5">{item.name}</h5>
                            <p className="text-neutral text-xs">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right - Media */}
                  <div className="lg:col-span-5">
                    {/* Company Media - Görsel veya Video: Kart yüksekliğini doldurur */}
                    {service.company === 'Alsancak Güvenlik' ? (
                      <div className="glass-effect rounded-xl overflow-hidden bg-neutral/20 h-full min-h-[220px]">
                        <img 
                          src="/images/alsancakguvenlikslider2.webp"
                          alt="Alsancak Güvenlik Operations"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : service.company === 'Locomotive Door' ? (
                      <div className="glass-effect rounded-xl overflow-hidden bg-neutral/20 h-full min-h-[220px]">
                        <video
                          muted
                          playsInline
                          preload="metadata"
                          className="autoplay-video w-full h-full object-cover block"
                        >
                          <source src="/videos/locomotivedoorvideo.mp4" type="video/mp4" />
                          Tarayıcınız video etiketini desteklemiyor.
                        </video>
                      </div>
                    ) : service.company === 'ASDTC Mühendislik' ? (
                      <div className="glass-effect rounded-xl overflow-hidden bg-neutral/20 h-full min-h-[220px]">
                        <video
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="autoplay-video w-full h-full object-cover block"
                        >
                          <source src="/videos/asdtc-video2.mp4" type="video/mp4" />
                          Tarayıcınız video etiketini desteklemiyor.
                        </video>
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Bottom Bar removed per request: no stats or CTAs; clean horizontal layout */}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Background Decoration - Minimal */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Services;
