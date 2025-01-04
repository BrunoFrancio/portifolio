import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from '../../data/testimonials';

const Testimonials = () => {
  const { language } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === 'pt' ? 'Depoimentos' : 'Testimonials'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;