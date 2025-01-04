import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Code, Coffee, Gamepad2, BookOpen } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  const hobbies = [
    { icon: <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />, name: language === 'pt' ? 'Programação' : 'Coding' },
    { icon: <Coffee className="w-6 h-6 text-brown-600 dark:text-brown-400" />, name: language === 'pt' ? 'Café' : 'Coffee' },
    { icon: <Gamepad2 className="w-6 h-6 text-green-600 dark:text-green-400" />, name: language === 'pt' ? 'Jogos' : 'Gaming' },
    { icon: <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />, name: language === 'pt' ? 'Leitura' : 'Reading' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === 'pt' ? 'Sobre mim' : 'About me'}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-600 dark:text-gray-300">
          <p>
            {language === 'pt'
              ? 'Sou um desenvolvedor apaixonado por criar soluções simples para problemas complexos. Entusiasta de métodos ágeis, ambientes dinâmicos e entrega contínua.'
              : "I'm a developer passionate about creating simple solutions for complex problems. Enthusiastic about agile methodologies, dynamic environments, and continuous delivery."}
          </p>
          <p>
            {language === 'pt'
              ? 'Com mais de 3 anos de experiência em desenvolvimento web, especializo-me em criar aplicações robustas, escaláveis e de alto desempenho.'
              : 'With over 3 years of experience in web development, I specialize in creating robust, scalable, and high-performance applications.'}
          </p>
          <p>
            {language === 'pt'
              ? 'Tenho uma mentalidade orientada para resultados e estou sempre disposto a aprender com meus colegas e compartilhar meu conhecimento para impulsionar o sucesso coletivo.'
              : 'I have a results-oriented mindset and am always willing to learn from my colleagues and share my knowledge to drive collective success.'}
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-6">
            {language === 'pt' ? 'Interesses' : 'Interests'}
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {hobbies.map((hobby) => (
              <div key={hobby.name} className="flex flex-col items-center gap-2">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  {hobby.icon}
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-200">{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
