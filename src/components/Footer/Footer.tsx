import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SocialLinks from '../Contact/SocialLinks';

const Footer = () => {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Bruno Francio</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'pt' 
                ? 'Desenvolvedor Full Stack' 
                : 'Full Stack Developer'}
            </p>
          </div>
          <SocialLinks />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {year} {language === 'pt' ? 'Todos os direitos reservados' : 'All rights reserved'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;