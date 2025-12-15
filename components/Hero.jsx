"use client";

import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero fade-up">
      <div className="hero-bg parallax" data-speed="0.3"></div>
      
      <div className="hero-content">
        <span className="hero-label">Singer • Guitarist</span>
        
        <h1 className="hero-title">
          Azeem <br />Toofani
        </h1>
        
        <p className="hero-tagline">
   A guitarist, composer, and sonic explorer
        </p>
        

      </div>
      
      <div className="hero-portrait">
        <div className="portrait-glow"></div>
        <div className="portrait-container parallax" data-speed="0.2">
          <img 
            src="/images/pic1.png" 
            alt="Azeem Toofani" 
            className="portrait-image"
          />
        </div>
      </div>
    </section>
  );
}