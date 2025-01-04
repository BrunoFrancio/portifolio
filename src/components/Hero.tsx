import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();
  const [text] = useTypewriter({
    words: [
      'Fullstack Developer',
      'Backend Developer',
      language === 'pt' ? 'Problemas complexos, soluções simples!' : 'Complex problems, simple solutions!',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-medium text-indigo-600 dark:text-indigo-400">
              {language === 'pt' ? 'Olá, eu sou' : 'Hi, I am'}
            </h2>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Bruno Francio
            </h1>
            <div className="text-3xl font-medium text-gray-600 dark:text-gray-300">
              <span>{text}</span>
              <Cursor cursorColor="#6366f1" />
            </div>
            <div className="flex space-x-4">
              <a
                href="#portfolio"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                {language === 'pt' ? 'Veja meu portfólio' : 'View my portfolio'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900/30 transition-colors"
              >
                {language === 'pt' ? 'Entre em contato' : 'Contact me'}
              </a>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800"
              alt="Profile"
              className="w-80 h-80 rounded-full object-cover mx-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;