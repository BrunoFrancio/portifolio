import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'pt' | 'en';
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  toggleLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);