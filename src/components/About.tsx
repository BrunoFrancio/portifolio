import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Code, Coffee, Gamepad2, BookOpen } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  const hobbies = [
    { icon: <Code className="w-6 h-6" />, name: language === 'pt' ? 'Programação' : 'Coding' },
    { icon: <Coffee className="w-6 h-6" />, name: language === 'pt' ? 'Café' : 'Coffee' },
    { icon: <Gamepad2 className="w-6 h-6" />, name: language === 'pt' ? 'Jogos' : 'Gaming' },
    { icon: <BookOpen className="w-6 h-6" />, name: language === 'pt' ? 'Leitura' : 'Reading' },
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
              ? 'Sou um desenvolvedor apaixonado por criar soluções que fazem a diferença.'
              : "I'm a developer passionate about creating solutions that make a difference."}
          </p>
          <p>
            {language === 'pt'
              ? 'Com mais de 5 anos de experiência em desenvolvimento web, especializo-me em criar aplicações robustas e escaláveis.'
              : 'With over 5 years of experience in web development, I specialize in creating robust and scalable applications.'}
          </p>
          <p>
            {language === 'pt'
              ? 'Meu objetivo é continuar aprendendo e compartilhando conhecimento com a comunidade.'
              : 'My goal is to continue learning and sharing knowledge with the community.'}
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-6">
            {language === 'pt' ? 'Interesses' : 'Interests'}
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {hobbies.map((hobby) => (
              <div key={hobby.name} className="flex flex-col items-center gap-2">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                  {hobby.icon}
                </div>
                <span className="text-sm">{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;