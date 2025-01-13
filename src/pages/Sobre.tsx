// src/pages/Sobre.tsx
import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience/Experience';

const Sobre: React.FC = () => {
  return (
    <div className="p-8">
      {/* Reutilizando o conteúdo do About */}
      <section id="about" className="mb-12">
        <About />
      </section>
      
      {/* Reutilizando o conteúdo do Experience */}
      <section id="experience">
        <Experience />
      </section>
    </div>
  );
};

export default Sobre;
