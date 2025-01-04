import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import Section from '../common/Section';
import ContactInfo from './ContactInfo';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <Section
      id="contact"
      title={language === 'pt' ? 'Entre em Contato' : 'Contact Me'}
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <ContactInfo />
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;