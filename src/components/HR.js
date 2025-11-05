import React from 'react';

const HR = () => {
  const benefits = [
    {
      icon: 'fa-rocket',
      title: 'Profesyonel Gelişim Atağı',
      description: 'Çalışanların imkân ve kabiliyetlerini geliştirilmesini sağlayan yenilikçilik anlayışı',
      gradient: 'from-accent to-blue-500'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Özel Eğitim Fırsatları',
      description: 'Mesleki ve kişisel gelişim alanında, çalışanlara ilerlemek istedikleri alanda özel eğitim fırsatları sunar',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: 'fa-globe',
      title: 'Geniş Kariyer İmkanları',
      description: '200\'den fazla firmanın temsilciliği ile Kariyer gelişiminde çok farklı alanlarda iş bulma imkânı sağlanır',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'fa-chart-line',
      title: 'Kariyer Gelişimi',
      description: 'Bütün çalışanların şirket bünyesindeki açık pozisyonlara ulaşabilmesine imkân tanınır',
      gradient: 'from-pink-500 to-accent'
    }
  ];

  return (
    <section id="hr" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">İNSAN KAYNAKLARI</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Yolculuğa Hazır mısın?
          </h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Profesyonel Gelişim Atağı
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center group border border-neutral/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <i className={`fas ${benefit.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary group-hover:text-accent transition-colors">{benefit.title}</h3>
              <p className="text-neutral-dark text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Internship Section */}
        <div className="bg-neutral-light/50 p-8 md:p-10 rounded-2xl border border-neutral/10 animate-on-scroll">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Staj ve Öğrenci İmkanları
              </h3>
              <p className="text-neutral-dark text-base mb-6 leading-relaxed">
                Farklı meslek alanlarında mükemmelliği yakalamayı hedefleyen ASDTC Mühendislik, 
                çalışanlarının iş becerilerini, farkındalıklarını, niteliklerini ve mesleki bilgilerini 
                geliştirmek amacıyla sürekli eğitim yatırımları gerçekleştirir.
              </p>
              <a href="#contact" className="btn-primary">
                Keşfet
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="space-y-4">
              {[
                'İş becerilerini geliştirme programları',
                'Mesleki farkındalık eğitimleri',
                'Nitelik geliştirme atölyeleri',
                'Sürekli eğitim yatırımları',
                'Mentörlük programları',
                'Staj ve kariyer fırsatları'
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-lg border border-neutral/10 hover:border-accent/30 transition-all duration-300 hover:translate-x-1 shadow-sm"
                >
                  <i className="fas fa-check-circle text-accent mr-3 text-lg"></i>
                  <span className="text-neutral-dark text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center animate-on-scroll">
          <div className="inline-block bg-white p-8 md:p-10 rounded-2xl border border-neutral/10 shadow-lg max-w-2xl">
            <h3 className="text-2xl font-bold mb-3 text-primary">
              Kariyer Fırsatları İçin Başvurun
            </h3>
            <p className="text-neutral mb-6">
              200'den fazla firmanın temsilciliği ile farklı alanlarda kariyer fırsatları sizleri bekliyor
            </p>
            <a href="#contact" className="btn-primary">
              Başvuru Yap
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HR;

