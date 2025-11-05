import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Alsancak Grup\'un güvenlik hizmetleri neden öne çıkıyor?',
      answer: 'Entegre güvenlik mimarisi (insanlı + fiziksel güvenlik + CCTV/Alarm + olay yönetimi), TSK/Jandarma/Emniyet kökenli sahaya özel eğitimli ekipler, gerçek zamanlı raporlama (risk skorları, MTTR, devriye uygunluk) ve enerji, baraj, köprü, yol inşaatı, fabrika/kampüs gibi yüksek riskli sahalarda kanıtlanmış tecrübe nedeniyle öne çıkıyoruz.'
    },
    {
      question: 'Alsancak Grup mühendislik ve savunma sanayinde hangi projeleri yürütüyor?',
      answer: 'Raylı sistemlerde EN 15085-2 CL1 standartlarında lokomotif/metro kapıları; tasarım, kaynak, yüzey işlemleri, test ve sertifikasyon. Ayrıca elektronik komponent, kablo, kimyasal ve soğuk zincir tedariki ile proje bazlı sistem entegrasyonu; prototipleme, kalifikasyon, seri üretime hazırlık ve izlenebilirlik yönetimi.'
    },
    {
      question: 'Uluslararası projelerde hangi bölgelerde hizmet veriyorsunuz?',
      answer: 'Afganistan, Irak, Libya, Uganda, Somali, Etiyopya ve Aden Körfezi ülkelerinde saha deneyimimiz bulunuyor. Amerika, İsrail, Hindistan ve İtalya\'da ofislerimiz mevcut; Avrupa ve MENA\'da proje bazlı çözüm ortaklıklarıyla çalışıyoruz.'
    },
    {
      question: 'Alsancak Grup\'un kalite ve güvenlik standartları nelerdir?',
      answer: 'Kalite/üretim: EN 15085-2 CL1, CE/IEC uygunluk, tedarikçi yeterlilik denetimleri. Yönetim sistemleri: ISO 9001, ISO 27001, ISO 45001. Veri koruma: KVKK/GDPR uyumu, erişim yetkilendirme ve loglama. Operasyon güvenliği: risk temelli İSG planları, tatbikatlar, acil durum prosedürleri ve izlenebilir olay kayıtları.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-primary relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">SSS</span>
          <h2 className="section-title mb-6">Hakkımızda Bilmeniz Gerekenler</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">Sıkça sorulan sorular ve cevapları</p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-white/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <p className="text-white/80 mb-6 text-lg">
            Daha fazla bilgi almak ister misiniz?
          </p>
          <a href="#contact" className="btn-primary">
            Daha Fazlasını Keşfet
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FAQ;

