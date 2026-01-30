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
    <section id="home" className="relative overflow-hidden min-h-screen pt-20 flex items-center">
      {/* Background Pattern Overlay */}
      <div className="tl-bg-pattern tl-bg-noise"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-medium text-primary">
              {language === 'pt' ? 'Olá, eu sou' : 'Hi, I am'}
            </h2>
            <h1 className="text-5xl font-bold text-foreground">
              Bruno Francio
            </h1>
            <div className="text-3xl font-medium text-muted-foreground">
              <span>{text}</span>
              <Cursor cursorColor="hsl(199 89% 48%)" />
            </div>
            <div className="flex space-x-4">
              <a
                href="#portfolio"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-foreground hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
              >
                {language === 'pt' ? 'Veja meu portfólio' : 'View my portfolio'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=54999832993&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                {language === 'pt' ? 'Entre em contato' : 'Contact me'}
              </a>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/BrunoFrancio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-francio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/brunofrancio.webp"
              alt="Bruno Francio"
              className="w-80 h-80 rounded-full object-cover mx-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
