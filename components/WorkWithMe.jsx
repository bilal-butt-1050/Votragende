"use client";

import { Guitar, Music, Palette, Zap, Star, Heart, ArrowRight, Mail, Calendar } from 'lucide-react';

export default function WorkWithMe() {
  const services = [
    {
      icon: Guitar,
      title: "Original Guitar Lines",
      description: "Signature guitar parts that add character and depth to your tracks",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Music,
      title: "Cinematic Scores",
      description: "Atmospheric compositions for film, games, and media projects",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Palette,
      title: "Flamenco-inspired Textures",
      description: "Authentic Spanish guitar techniques with modern sensibilities",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Experimental Sound Design",
      description: "Innovative guitar processing and unique sonic landscapes",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Star,
      title: "Custom Compositions",
      description: "Tailored pieces that perfectly fit your creative vision",
      color: "from-yellow-500 to-amber-600"
    },
    {
      icon: Heart,
      title: "Emotional Soundtracks",
      description: "Music that tells stories and evokes specific emotions",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your vision, project needs, and creative direction"
    },
    {
      number: "02",
      title: "Concept Development",
      description: "I create initial sketches and sound concepts based on our discussion"
    },
    {
      number: "03",
      title: "Creation & Refinement",
      description: "Full composition with regular updates and collaborative feedback"
    },
    {
      number: "04",
      title: "Final Delivery",
      description: "Professionally mixed stems and full project files delivered"
    }
  ];

  return (
    <section id="work-with-me" className="work-with-me">
      {/* Background Elements */}
      <div className="work-bg-gradient"></div>
      <div className="work-texture-overlay"></div>
      
      <div className="work-container">
        {/* Header */}
        <div className="work-header fade-up">
          <div className="work-label">
            <span>Collaboration</span>
          </div>
          <h2 className="work-title">Work With Me</h2>
          <p className="work-subtitle">
            If you're looking for something different, textured, and emotionally deep — 
            I collaborate selectively with artists who value unique musical expression.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card fade-up stagger-${index % 3}`}>
              <div className={`service-icon-container bg-gradient-to-br ${service.color}`}>
                <service.icon className="service-icon" size={20} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="work-columns">
          {/* Left - Philosophy */}
          <div className="philosophy-column fade-up">
            <div className="philosophy-header">
              <h3 className="philosophy-title">Collaborative Philosophy</h3>
              <div className="philosophy-icon">
                <Heart size={24} />
              </div>
            </div>
            
            <div className="philosophy-content">
              <p className="philosophy-text">
                I believe in creating music that serves the project's emotional core. 
                Every collaboration is a unique journey where we explore sound together, 
                pushing boundaries while maintaining authenticity.
              </p>
              
              <div className="philosophy-points">
                <div className="philosophy-point">
                  <div className="point-bullet"></div>
                  <span>Quality over quantity</span>
                </div>
                <div className="philosophy-point">
                  <div className="point-bullet"></div>
                  <span>Emotional depth in every note</span>
                </div>
                <div className="philosophy-point">
                  <div className="point-bullet"></div>
                  <span>Innovation within tradition</span>
                </div>
                <div className="philosophy-point">
                  <div className="point-bullet"></div>
                  <span>Clear communication throughout</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Process */}
          <div className="process-column fade-up stagger-1">
            <div className="process-header">
              <h3 className="process-title">The Process</h3>
              <div className="process-icon">
                <Calendar size={24} />
              </div>
            </div>
            
            <div className="process-steps">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="work-cta fade-up stagger-2">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Create Something Unique?</h3>

          </div>
          
          <div className="cta-actions">
            <a href="mailto:azeemtoofanii@gmail.com" className="cta-button-primary">
              <Mail size={18} />
              Contact Me at azeemtoofanii@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}