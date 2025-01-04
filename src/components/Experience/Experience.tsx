import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import TimelineItem from './TimelineItem';
import { experienceData } from '../../data/experience';

const Experience = () => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === 'pt' ? 'Minha Experiência' : 'My Experience'}
        </h2>
        <div className="max-w-3xl mx-auto">
          {experienceData.map((item) => (
            <TimelineItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;