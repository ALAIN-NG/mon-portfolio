import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  // Gestion des changements de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Envoi du formulaire via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      setSendStatus('validation_error');
      return;
    }

    setIsSending(true);
    setSendStatus(null);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email envoyé avec succès:', result.text);
      setSendStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Réinitialisation du formulaire
    }, (error) => {
      console.error('Erreur lors de l\'envoi:', error.text);
      setSendStatus('error');
    })
    .finally(() => {
      setIsSending(false);
      // Réinitialisation du message après 5 secondes
      setTimeout(() => setSendStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contactez-moi</h2>
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3>Informations de contact</h3>
            <p>
              N'hésitez pas à me contacter pour toute question ou opportunité. 
              Je suis disponible pour discuter de projets, collaborations ou emplois.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>alain.ng.tech@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+237 672 568 571</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Yaoundé, Cameroun</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/ALAIN-NG/" className="social-icon"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/alain-ngueudjang-035b97290/" className="social-icon"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.linkedin.com/in/alain-ngueudjang-035b97290/" className="social-icon"><i className="fab fa-twitter"></i></a>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Votre message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn"
              disabled={isSending}
            >
              {isSending ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
            
            {sendStatus === 'success' && (
              <motion.div
                className="alert alert-success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message envoyé avec succès !
              </motion.div>
            )}
            
            {sendStatus === 'error' && (
              <motion.div
                className="alert alert-error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Erreur lors de l'envoi. Veuillez réessayer.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;