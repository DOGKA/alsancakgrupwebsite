import React from 'react';
import ImageMockup from './ImageMockup';

const Blog = () => {
  const blogPosts = [
    {
      category: 'İş Ortaklığı',
      title: 'IEETek Artık Türkiye\'de - Enerji Depolamada Yenilik',
      excerpt: 'ASDTC, IEETEK\'in Türkiye\'deki tek yetkili distribütörü oldu. Güneş enerjisi depolama, taşınabilir güç istasyonları ve hibrit sistemlerde dünya standartlarında çözümler sunacağız.',
      date: '2024',
      readTime: '6 dk',
      icon: 'fa-bolt',
      image: '/images/ieetekoffice.png'
    },
    {
      category: 'Fuar',
      title: 'Rail Systems Congress and Exhibition in Eskişehir \'23',
      excerpt: 'Eskişehir\'de 2-4 Kasım 2023 tarihlerinde gerçekleştirilen Raylı Sistemler Kongresi ve Sergisi\'nde destekleyici kuruluşlardan biri olarak yer aldık. ASDTC Mühendislik olarak sektörün geleceğini şekillendiren bu etkinlikte bulunduk.',
      date: 'Kasım 2023',
      readTime: '8 dk',
      icon: 'fa-train',
      image: '/images/locomotivesnews1.webp'
    },
    {
      category: 'Güvenlik',
      title: 'Türk Özel Güvenlikçiler Sıcak Bölgelerde',
      excerpt: 'Afganistan\'da Kabil-Kandahar arasındaki yolun güvenliğini Alsancak Güvenlik sağladı. Zorlu coğrafi ve güvenlik koşullarında başarılı operasyonlarımız.',
      date: '2024',
      readTime: '6 dk',
      icon: 'fa-shield-halved'
    },
    {
      category: 'Operasyon',
      title: 'Korsanlara Karşı Emekli SAT Komandoları',
      excerpt: 'NATO, BM ve AB\'nin Somalili korsanlara karşı mücadelede yetersiz kalması üzerine, Türk ticaret gemilerini Aden Körfezi\'ndeki korsanlardan korumak için özel operasyonlarımız.',
      date: '2024',
      readTime: '8 dk',
      icon: 'fa-ship'
    },
    {
      category: 'Sosyal Sorumluluk',
      title: 'Alsancak Güvenlik WCK ile birlikte Deprem Bölgelerinde',
      excerpt: 'World Central Kitchen ile birlikte afet bölgelerindeki insanlara yardım eli uzattık. Haiti depremi sonrası başlayan işbirliğimiz devam ediyor.',
      date: '2024',
      readTime: '5 dk',
      icon: 'fa-heart'
    }
  ];

  return (
    <section id="blog" className="section-padding bg-primary relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">BLOG</span>
          <h2 className="section-title mb-6">
            Haberler ve Güncellemeler
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Sektördeki gelişmeler, projelerimiz ve uzman görüşleri
          </p>
        </div>

        {/* Blog Grid - Neuros Style */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer animate-on-scroll border border-neutral/10"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Featured Image */}
              <div className="overflow-hidden">
                {post.image ? (
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-[220px] bg-neutral-light flex items-center justify-center">
                    <span className="text-neutral text-sm">BLOG IMAGE {index + 1}</span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Post Meta */}
                <div className="flex items-center gap-3 mb-4 text-xs flex-wrap">
                  <span className="px-3 py-1.5 bg-accent/10 text-accent rounded-full font-bold flex items-center gap-2 border border-accent/20">
                    {post.category}
                  </span>
                  <span className="text-neutral flex items-center gap-1">
                    <i className="far fa-calendar text-accent"></i>
                    {post.date}
                  </span>
                  <span className="text-neutral flex items-center gap-1">
                    <i className="far fa-clock text-accent"></i>
                    {post.readTime}
                  </span>
                </div>

              {/* Post Content */}
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-neutral mb-6 line-clamp-3 leading-relaxed text-sm">
                {post.excerpt}
              </p>

                {/* Read More Link */}
                <a 
                  href="#blog" 
                  className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all duration-300 font-semibold text-sm"
                >
                  <span>Devamını Oku</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <a href="#blog" className="btn-outline">
            Tüm Blog Yazılarını Görüntüle
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
    </section>
  );
};

export default Blog;

