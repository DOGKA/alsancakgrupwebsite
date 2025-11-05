import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!resp.ok) throw new Error('Send failed');
      alert('Mesajınız gönderildi. En kısa sürede dönüş yapacağız.');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } catch (err) {
      alert('Gönderim başarısız. Lütfen daha sonra tekrar deneyin.');
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Konum',
      content: 'Turan Güneş Bulvarı Cezayir Cad. No. 6/7 Çankaya / Ankara / Türkiye'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Çağrı Merkezi',
      content: '+90 850 840 0108 / +90 312 441 21 17'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'info@alsancakgrup.com.tr'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook-f', url: '#' },
    { name: 'Twitter', icon: 'x-twitter', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin-in', url: '#' },
    { name: 'YouTube', icon: 'youtube', url: '#' }
  ];

  return (
    <section id="contact" className="section-padding bg-neutral-light relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-subtitle">İLETİŞİM</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Size yardım etmeye ve sorularınızı yanıtlamaya her zaman hazırız
          </h2>
          <p className="text-lg text-neutral max-w-3xl mx-auto">
            İletişimde Kalın
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 animate-on-scroll">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-neutral/10 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-primary">{info.title}</h3>
                    <p className="text-neutral-dark">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-white p-6 rounded-xl border border-neutral/10 shadow-md">
              <h3 className="font-bold text-lg mb-4 text-primary">Social Network</h3>
              <div className="flex gap-3">
                {['linkedin-in', 'x-twitter', 'youtube'].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-neutral-light hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-neutral/20"
                    aria-label={icon}
                  >
                    <i className={`fab fa-${icon} text-neutral hover:text-white transition-colors`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl space-y-6 border border-neutral/10 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-dark mb-2 text-sm font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral/20 rounded-lg focus:outline-none focus:border-accent text-primary placeholder-neutral transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-neutral-dark mb-2 text-sm font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-light border border-neutral/20 rounded-lg focus:outline-none focus:border-accent text-primary placeholder-neutral transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-dark mb-2 text-sm font-semibold">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-light border border-neutral/20 rounded-lg focus:outline-none focus:border-accent text-primary placeholder-neutral transition-colors"
                  placeholder="Konu"
                />
              </div>

              <div>
                <label className="block text-neutral-dark mb-2 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-neutral-light border border-neutral/20 rounded-lg focus:outline-none focus:border-accent text-primary placeholder-neutral transition-colors resize-none"
                  placeholder="Mesajınız..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full md:w-auto">
                Send a Message
                <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Minimal */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Contact;

