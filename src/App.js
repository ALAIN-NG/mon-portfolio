import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Configuration des animations
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 }
  }
};

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <CustomCursor />
      
      <Header />
      
      <main>
        <motion.section
          id="home"
          className="hero-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container">
            <motion.div 
              className="hero-content"
              variants={sectionVariants}
            >
              <motion.h1 variants={sectionVariants}>Salut, je suis Alain DJOMO</motion.h1>
              <motion.p variants={sectionVariants}>Développeur Full Stack</motion.p>
              <motion.a 
                href="#projects" 
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;