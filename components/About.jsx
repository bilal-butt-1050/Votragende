// components/About.js
import { Volume2, Bluetooth, Battery, Shield } from 'lucide-react';

export default function About() {
  return (
    <section className="about-section fade-up">
      <div className="about-container">
        <div className="about-content">
          <h2>Precision Engineered Audio Excellence</h2>
          <p>
            Votragende represents the pinnacle of acoustic engineering. Every curve, every component, 
            meticulously crafted to deliver an immersive auditory experience that transcends conventional sound.
          </p>
          <p>
            From deep, resonant bass to crystalline highs, Votragende captures every nuance of your music 
            with unprecedented clarity and power.
          </p>

          <div className="about-features stagger-children">
            <div className="about-feature">
              <div className="feature-icon"><Volume2 size={24} /></div>
              <span className="feature-text">360° Sound Field</span>
            </div>
            <div className="about-feature">
              <div className="feature-icon"><Bluetooth size={24} /></div>
              <span className="feature-text">Wireless Connectivity</span>
            </div>
            <div className="about-feature">
              <div className="feature-icon"><Battery size={24} /></div>
              <span className="feature-text">24hr Battery Life</span>
            </div>
            <div className="about-feature">
              <div className="feature-icon"><Shield size={24} /></div>
              <span className="feature-text">Premium Build</span>
            </div>
          </div>
        </div>

        <div className="about-visual fade-right">
          <div className="image-glow"></div>
          <div className="sound-waves">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
          <div className="speaker-image-container">
            <img
              src="/images/pic2.png"
              alt="Votragende Speaker"
              className="speaker-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
