'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Mock API - simulate network delay
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-navy scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-white/80 mb-8">
              Stop by our leasing office or reach out—we&apos;d love to show you around.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Office Hours</p>
                  <p className="text-white/80">Mon–Fri 8:30am – 5:30pm</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a
                    href="tel:6029328456"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    (602) 932-8456
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Website</p>
                  <a
                    href="https://elevateatsmountain.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    elevateatsmountain.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-white/80">8818 S Central Ave, Phoenix, AZ 85042</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="font-heading text-xl font-semibold text-white mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-navy border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-navy border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-navy border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="(602) 555-1234"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-navy border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 rounded-lg bg-gold text-navy font-semibold hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
