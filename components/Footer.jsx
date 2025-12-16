// components/Footer.jsx
"use client";

import { Instagram, Youtube, Music, Mail, Headphones, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grain-overlay" />
      
      <div className="footer-container">
        <div className="footer-sections">
          {/* Brand Section */}
          <div className="footer-brand fade-up">
            <div className="footer-logo">
              <Headphones size={32} />
              <span className="footer-brand-name">Votragende</span>
            </div>
            <p className="footer-description">
     Experience sound in its purest form. Engineered for audiophiles, designed for executives.
            </p>
          </div>
          

        
          {/* Social */}
          <div className="footer-social fade-up stagger-3">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-icons">
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Spotify">
                <Music size={20} />
              </a>
              <a href="mailto:info@votragende.com" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <div className="footer-newsletter">
              <p className="newsletter-text">Subscribe to our newsletter</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  <Mail size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="footer-divider" />
        
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Votragende. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}