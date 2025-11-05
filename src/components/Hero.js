import React, { useEffect, useState, useRef } from 'react';
import heroVideo from '../alsancakgrup(1).mp4';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const slides = [
    {
      type: 'video',
      company: 'ALSANCAK GRUP',
      tagline: '18 Yıldır Güvenin Adresi',
      title: 'Savunma, Güvenlik ve Mühendislik Çözümleri',
      description: 'Türkiye ve dünyada 250+ müşteri, 30+ ülkede operasyonel deneyim',
      videoSrc: heroVideo,
      features: ['TSK Tecrübeli Kadro', '24 ISO Sertifikası', '3 Grup Şirketi']
    },
    {
      type: 'image',
      company: 'ALSANCAK GÜVENLİK',
      tagline: 'Uluslararası Operasyonlar',
      title: 'Sınır Ötesi Güvenlik: Özel Koruma Geleceği',
      description: 'NATO, UNICEF, USAID için güvenlik hizmetleri. Afganistan, Irak, Libya, Somali\'de başarılı operasyonlar',
      imageSrc: '/images/alsancakslider-görsel.webp',
      features: ['30+ Ülke', '7 Zorlu Bölge', '11 ISO Sertifikası']
    },
    {
      type: 'video',
      company: 'ASDTC MÜHENDİSLİK',
      tagline: 'Endüstriyel Fikirlerin Gerçekleşme Merkezi',
      title: 'Raylı Sistemlerde Mükemmellik',
      description: 'EN 15085-2 CL1 sertifikalı üretim. 200+ ürün çeşidi, 40+ çözüm ortağı ile güç birliği',
      videoSrc: '/videos/asdtc-video-slider.mp4',
      features: ['EN 15085-2 CL1', '13 ISO Sertifikası', '200+ Ürün']
    },
    {
      type: 'video',
      company: 'LOCOMOTIVE DOOR',
      tagline: 'Millileştirme Projesi',
      title: '%100 Yerli Lokomotif Kapısı Üretimi',
      description: 'E5000 Elektrikli Lokomotifler. Avrupa\'da geçerli kullanım ve satış lisansları',
      videoSrc: '/videos/locomotivedoorvideo.mp4',
      features: ['%100 Yerli', 'EN 45545', 'Avrupa Lisanslı']
    }
  ];

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  useEffect(() => {
    if (slides[currentSlide].type === 'video' && videoRef.current && !isVideoPlaying) {
      setTimeout(() => videoRef.current.play(), 500);
    }

    const slideInterval = setInterval(() => {
      if (slides[currentSlide].type === 'video' && isVideoPlaying) return;
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(slideInterval);
  }, [currentSlide, isVideoPlaying, slides]);

  const nextSlide = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
    }
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
    }
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-light via-white to-neutral-light">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(139, 37, 37, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-custom relative z-10 w-full py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left - Content (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <div className="mb-4">
              <img 
                src="/alsancaklogo.png" 
                alt="Alsancak Grup" 
                className="h-16 md:h-20 w-auto opacity-95"
              />
            </div>

            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent text-sm font-bold tracking-wider">{currentSlideData.company}</span>
            </div>

            {/* Tagline */}
            <p className="text-neutral text-sm uppercase tracking-widest">{currentSlideData.tagline}</p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              {currentSlideData.title}
            </h1>

            {/* Description */}
            <p className="text-neutral text-lg leading-relaxed">
              {currentSlideData.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {currentSlideData.features.map((feature, idx) => (
                <div key={idx} className="bg-white px-4 py-2 rounded-lg border border-neutral/20 shadow-sm">
                  <span className="text-neutral-dark text-xs font-semibold">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <a href="#services" className="btn-primary px-6 py-3">
                Keşfet
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a href="#contact" className="px-6 py-3 bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-full transition-all duration-300 hover:scale-105 font-semibold shadow-md">
                İletişim
                <i className="fas fa-phone ml-2"></i>
              </a>
            </div>
          </div>

          {/* Right - Media (7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Video or Image */}
              {currentSlideData.type === 'video' ? (
                <>
                  <video
                    key={currentSlide}
                    ref={videoRef}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    muted
                    playsInline
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  >
                    <source src={currentSlideData.videoSrc} type="video/mp4" />
                  </video>
                  
                  {/* Play/Pause Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={toggleVideo}
                      className={`w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center glow hover:scale-110 transition-all duration-300 shadow-2xl ${
                        isVideoPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                      }`}
                    >
                      <i className={`fas ${isVideoPlaying ? 'fa-pause' : 'fa-play'} text-light text-2xl ${!isVideoPlaying && 'ml-1'}`}></i>
                    </button>
                  </div>
                </>
              ) : (
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                  <img 
                    src={currentSlideData.imageSrc}
                    alt={currentSlideData.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                </div>
              )}
            </div>

            {/* Slider Controls - Under Image */}
            <div className="flex items-center justify-between mt-6 px-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-neutral/20 shadow-md"
              >
                <i className="fas fa-chevron-left text-primary hover:text-white"></i>
              </button>
              
              {/* Indicators */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                        setIsVideoPlaying(false);
                      }
                      setCurrentSlide(index);
                    }}
                    className={`transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-12 h-1.5 bg-gradient-to-r from-accent to-accent-light rounded-full shadow-lg'
                        : 'w-8 h-1.5 bg-neutral/20 hover:bg-neutral/40 rounded-full'
                    }`}
                  ></button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-neutral/20 shadow-md"
              >
                <i className="fas fa-chevron-right text-primary hover:text-white"></i>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Particles - Subtle */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/3 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
