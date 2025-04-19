import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Importe tes images
import projet1 from '../assets/projet1.jpg';
import projet2 from '../assets/projet2.jpg';
import projet3 from '../assets/projet3.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Application Web',
      description: 'Application web de gestion de ventes en ligne et en local',
      tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'MySql'],
      image: projet1,
      links: {
        demo: '#',
        code: '#'
      }
    },
    {
      title: 'Jeu Web',
      description: 'Jeu de Ludo en reseau',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySql'],
      image: projet2,
      links: {
        demo: '#',
        code: '#'
      }
    },
    {
      title: 'Site Vitrine',
      description: 'Site web pour start',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: projet3,
      links: {
        demo: '#',
        code: '#'
      }
    },
    
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={`Capture d'écran du projet ${project.title}`}
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a 
                    href={project.links.demo} 
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Voir le projet
                  </motion.a>
                  <motion.a 
                    href={project.links.code} 
                    className="btn btn-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code source
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;