"use client";

import { Instagram, Youtube, Music, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand fade-up">
          <h3>Azeem Toofani</h3>
          <p className="footer-description">
            Creating music that touches the soul. Guitarist, vocalist, and 
            storyteller through melody and verse.
          </p>
          <p className="footer-copyright">
            © {currentYear} Azeem Toofani. All rights reserved.
          </p>
        </div>
        
        <div className="footer-social fade-up stagger-1">
          <div className="social-title">Connect</div>
          <div className="social-icons">
            <a href="#" className="social-link">
              <Instagram />
            </a>
            <a href="#" className="social-link">
              <Youtube />
            </a>
            <a href="#" className="social-link">
              <Music />
            </a>
            <a href="mailto:azeemtoofanii@gmail.com" className="social-link">
              <Mail />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}