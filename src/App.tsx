import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <main>
                    <section id="hero">
                      <Hero />
                    </section>
                    <section id="about">
                      <About />
                    </section>
                    <section id="skills">
                      <Skills />
                    </section>
                    <section id="portfolio">
                      <Portfolio />
                    </section>
                    <section id="experience">
                      <Experience />
                    </section>
                  </main>
                }
              />
              {/* Rota para a página Sobre */}
              <Route path="/sobre" element={<Sobre />} />

              {/* Rota para a página Projetos */}
              <Route path="/projetos" element={<Projetos />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

