import React from 'react';
import { Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-scroll';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const navigation = [
    { name: language === 'pt' ? 'Início' : 'Home', href: 'hero' },
    { name: language === 'pt' ? 'Sobre' : 'About', href: 'about' },
    { name: language === 'pt' ? 'Habilidades' : 'Skills', href: 'skills' },
    { name: language === 'pt' ? 'Portfólio' : 'Portfolio', href: 'portfolio' },
    { name: language === 'pt' ? 'Experiência' : 'Experience', href: 'experience' },
    { name: language === 'pt' ? 'Depoimentos' : 'Testimonials', href: 'testimonials' },
    { name: language === 'pt' ? 'Contato' : 'Contact', href: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Portfolio
          </div>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href} // Nome correspondente ao `id` de cada seção
                smooth={true} // Habilita a rolagem suave
                duration={500} // Tempo de transição em milissegundos
                className="cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme and Language Toggles */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle Language"
            >
              <Languages className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
