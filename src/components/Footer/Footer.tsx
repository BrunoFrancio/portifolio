import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Code } from 'lucide-react'; // Ícone de código como logo

const Footer = () => {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Nome com logo de código */}
          <div className="flex items-center gap-2 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-2"> <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {'<>'}
            </span> Bruno Francio</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'pt'
                  ? 'Desenvolvedor Full Stack'
                  : 'Full Stack Developer'}
              </p>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/bruno-francio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.24.79 24 1.77 24h20.45c.97 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.6V9h3.52zm-1.76-13c-1.13 0-2.04-.92-2.04-2.05 0-1.13.92-2.05 2.04-2.05s2.05.92 2.05 2.05c-.01 1.13-.92 2.05-2.05 2.05zm16.2 13h-3.52v-5.5c0-1.31-.47-2.2-1.65-2.2-.9 0-1.44.61-1.68 1.2-.08.2-.1.47-.1.75v5.75h-3.52s.05-9.33 0-10.3h3.52v1.45c.47-.72 1.3-1.76 3.15-1.76 2.3 0 4.02 1.51 4.02 4.76v5.85z" />
              </svg>
            </a>
            <a
              href="https://github.com/BrunoFrancio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297C5.373.297 0 5.67 0 12.298c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.166c-3.338.726-4.033-1.417-4.033-1.417-.546-1.387-1.333-1.757-1.333-1.757-1.09-.743.082-.728.082-.728 1.205.086 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.493.997.11-.776.42-1.305.763-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.465-2.38 1.236-3.222-.124-.305-.535-1.526.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.006-.404 1.02.005 2.05.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.65.242 2.87.118 3.176.772.843 1.236 1.913 1.236 3.222 0 4.61-2.807 5.62-5.478 5.92.43.372.824 1.104.824 2.223v3.293c0 .319.22.694.825.576C20.565 22.092 24 17.592 24 12.298 24 5.67 18.627.297 12 .297z" />
              </svg>
            </a>
          </div>

          {/* Direitos reservados */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {year} {language === 'pt' ? 'Todos os direitos reservados' : 'All rights reserved'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
