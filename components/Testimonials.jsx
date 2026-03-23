'use client';

import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '@/data/testimonials';

function StarRating({ rating, className = '' }) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-gold fill-gold"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const goTo = useCallback((index) => {
    setActiveIndex((index + total) % total);
  }, [total]);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goNext, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, goNext]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-navy scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Residents Say
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Real reviews from our Elevate @ South Mountain community
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards */}
          <div className="relative min-h-[340px] md:min-h-[300px]">
            {testimonials.map((review, index) => (
              <div
                key={review.id}
                className={`absolute inset-x-0 top-0 transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <div className="max-w-3xl mx-auto">
                  <div className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-10 hover:border-gold/30 transition-colors">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gold/30 flex items-center justify-center flex-shrink-0 text-gold font-heading font-bold text-lg">
                        {review.initial}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-heading font-semibold text-white">
                            {review.name}
                          </h3>
                          {review.isLocalGuide && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold/20 text-gold text-xs font-medium">
                              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                              Local Guide
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <StarRating rating={review.rating} />
                          <span className="text-white/50 text-sm">{review.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-white/90 leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>

                    {/* Google attribution */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="text-white/50 text-sm">Google Review</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={goPrev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold/30 text-white hover:text-gold flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy ${
                    index === activeIndex
                      ? 'bg-gold w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold/30 text-white hover:text-gold flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress */}
          <p className="text-center text-white/50 text-sm mt-4">
            {activeIndex + 1} of {total}
          </p>
        </div>
      </div>
    </section>
  );
}
