'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const { ref, isRevealed } = useReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [0, 1, 2];
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section 
      id="testimonials" 
      ref={ref}
      className="relative py-24 md:py-32 px-6 lg:px-8 bg-warm-black"
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-warm-text tracking-tight leading-tight mb-6 fade-up ${isRevealed ? 'revealed' : ''}`}
          >
            {t('title')}
          </h2>
          <p 
            className={`text-lg md:text-xl text-warm-secondary max-w-2xl mx-auto leading-relaxed fade-up ${isRevealed ? 'revealed' : ''}`}
            style={{ animationDelay: '100ms' }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className={`relative fade-up ${isRevealed ? 'revealed' : ''}`} style={{ animationDelay: '200ms' }}>
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-warm-card border border-warm-border p-10 md:p-12 rounded-lg">
                    {/* Quote */}
                    <p className="text-lg md:text-xl text-warm-text leading-relaxed mb-8">
                      &ldquo;{t(`items.${index}.quote`)}&rdquo;
                    </p>

                    {/* Author info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-warm-border">
                      {/* Avatar placeholder */}
                      <div className="w-12 h-12 rounded-full bg-warm-accent/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-warm-accent font-semibold text-sm">
                          {t(`items.${index}.author`).charAt(0)}
                        </span>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-warm-text">
                          {t(`items.${index}.author`)}
                        </p>
                        <p className="text-sm text-warm-muted">
                          {t(`items.${index}.role`)} • {t(`items.${index}.company`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-warm-border bg-warm-card hover:border-warm-accent/40 transition-all duration-200 flex items-center justify-center group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-warm-muted group-hover:text-warm-accent transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-8 bg-warm-accent' 
                      : 'w-2 bg-warm-border hover:bg-warm-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-warm-border bg-warm-card hover:border-warm-accent/40 transition-all duration-200 flex items-center justify-center group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-warm-muted group-hover:text-warm-accent transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
