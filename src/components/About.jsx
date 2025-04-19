import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import photo from '../assets/photo.jpg'; // Importe ton image
import './About.css';

const About = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.5 }
    }
  };

  return (
    <Tilt 
      tiltMaxAngleX={5} 
      tiltMaxAngleY={5}
      tiltReverse={true}
      transitionSpeed={1500}
      gyroscope={true}
    >
      <motion.section 
        id="about" 
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="container">
          <motion.h2 className="section-title" variants={itemVariants}>
            À propos de moi
          </motion.h2>
          
          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <p>
                {/* Remplace ce texte par ta description */}
                Passionné par le développement web depuis plusieurs années, je mets mes compétences 
                au service de projets innovants. Mon approche combine créativité et rigueur technique 
                pour offrir des solutions adaptées aux besoins des utilisateurs.
              </p>
              <p>
                {/* Ajoute tes informations personnelles ici */}
                Etudiant en Licence 3 à l'université de Yaoundé 1, j'ai travaillé sur divers projets allant des sites vitrines 
                aux applications web un peu complexes. J'aime apprendre de nouvelles technologies et partager 
                mes connaissances avec la communauté.
              </p>
                
              <motion.div className="about-info" variants={itemVariants}>
              
                <div>
                  <span>Nom :</span> NGUEUDJANG DJOMO ALAIN GILDAS
                </div>
                <div>
                  <span>Email :</span> alain.ng.tech@gmail.com
                </div>
                <div>
                  <span>Expérience :</span> --
                </div>
                <div>
                  <span>Localisation :</span> YAOUNDE, CAMEROUN
                </div>

              </motion.div>
            </motion.div>
            
            <motion.div className="about-image" variants={itemVariants}>
              <img 
                src={photo} 
                alt="Ma photo de profil" 
                className="profile-photo"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Tilt>
  );
};

export default About;