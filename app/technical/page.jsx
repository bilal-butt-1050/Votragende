// app/technical/page.jsx (Technical Specs Page)
'use client';

import Hero from '@/components/Hero';
import SpecsSection from '@/components/SpecsSection';
import CTASection from '@/components/CTASection';
import { 
  ChevronRight, 
  Headphones,
  Bluetooth,
  Users
} from 'lucide-react';

// Import real icons from react-icons
import { FaYoutube, FaSpotify, FaSoundcloud } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import { useEffect } from 'react';
import Image from 'next/image';

export default function TechnicalPage() {
  useEffect(() => {
    // Scroll animation for slide-up items
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          // Remove the class when element goes out of view
          // This allows animation to trigger again on next scroll
          entry.target.classList.remove('animate');
        }
      });
    }, observerOptions);

    // Observe all slide-up items
    document.querySelectorAll('.slide-up-item').forEach((item) => {
      observer.observe(item);
    });

    // Observe existing fade-up, scale-in, fade-left, fade-right elements
    const animationElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in');
    animationElements.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero
        label="TECHNICAL SPECIFICATIONS"
        title="ENGINEERED PERFECTION"
        tagline="Every specification meticulously designed"
      />

      {/* Size and Weight Section */}
      <div className="fade-up">
        <section className="content-section">
          <div className="section-header">
            <span className="section-label">PHYSICAL DIMENSIONS</span>
            <h2 className="section-title">Size and Weight</h2>
            <p className="section-subtitle">
              Precision-engineered for optimal acoustic performance
            </p>
          </div>
          
          {/* Center Image */}
          <div className="size-image-container">
            <Image
              src="/images/Size.png"
              alt="Votragende Speaker Dimensions"
              width={800}
              height={600}
              className="size-image"
              priority
            />
          </div>
            
          {/* Weight Display */}
          <div className="weight-display-container">
            <div className="weight-display">
              <div className="weight-icon">
                <Headphones size={20} />
              </div>
              <div className="weight-content">
                <div className="weight-label">Weight</div>
                <div className="weight-value">18 kg (39.68 Pounds)</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Audio Technology Section */}
      <div className="scale-in">
        <SpecsSection
          label="AUDIO ENGINEERING"
          title="Audio Technology"
          subtitle="Premium components working in harmony"
          specs={[
            { label: 'Midrange Speakers', value: 'Array of 2 × 6-inch Drivers' },
            { label: 'Woofer', value: '4-inch High Excursion Woofer' },
            { label: 'Tweeters', value: '2 × Premium Silk Dome Tweeters' },
            { label: 'Controls', value: 'Dedicated Bass & Stereo Control Knobs' },
            { label: 'Bass Port', value: 'Rear Exhaust Vent for Maximum Bass Travel' },
            { label: 'Amplification', value: 'Class-D Digital Amplifier' },
          ]}
        />
      </div>

      {/* Audio Sources Section */}
      <div className="fade-up">
        <section className="content-section audio-sources-section">
          <div className="section-header">
            <span className="section-label">CONNECTIVITY</span>
            <h2 className="section-title">Audio Sources</h2>
            <p className="section-subtitle">
              Seamless integration with all your favorite platforms
            </p>
          </div>

          <div className="audio-sources-container">
            {/* Music Streaming Platforms */}
            <div className="platforms-grid platforms-row">
              <div className="platform-card platform-youtube slide-up-item">
                <div className="platform-icon">
                  <FaYoutube size={32} />
                </div>
                <div className="platform-name">YouTube</div>
              </div>
              <div className="platform-card platform-spotify slide-up-item">
                <div className="platform-icon">
                  <FaSpotify size={32} />
                </div>
                <div className="platform-name">Spotify</div>
              </div>
              <div className="platform-card platform-apple slide-up-item">
                <div className="platform-icon">
                  <SiApplemusic size={32} />
                </div>
                <div className="platform-name">Apple Music</div>
              </div>
              <div className="platform-card platform-soundcloud slide-up-item">
                <div className="platform-icon">
                  <FaSoundcloud size={32} />
                </div>
                <div className="platform-name">SoundCloud</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Wireless Section */}
      <div className="fade-left">
        <section className="content-section">
          <div className="section-header">
            <span className="section-label">WIRELESS TECHNOLOGY</span>
            <h2 className="section-title">Connectivity</h2>
            <p className="section-subtitle">
              Advanced wireless features for seamless listening
            </p>
          </div>

          <div className="wireless-container">
            <div className="wireless-grid">
              <div className="wireless-card bluetooth-card slide-up-item">
                <div className="wireless-icon">
                  <Bluetooth size={48} />
                </div>
                <div className="wireless-content">
                  <h3 className="wireless-title">Bluetooth 5.0</h3>
                  <p className="wireless-description">
                    Bluetooth 5.0 and above compatibility for crystal clear wireless audio
                  </p>
                </div>
              </div>

              <div className="wireless-card peer-card slide-up-item">
                <div className="wireless-icon">
                  <Users size={48} />
                </div>
                <div className="wireless-content">
                  <h3 className="wireless-title">Peer to Peer</h3>
                  <p className="wireless-description">
                    Peer to Peer Discovery for easy guest access without passwords
                  </p>
                </div>
              </div>


            </div>
          </div>
        </section>
      </div>

      <CTASection
        title="Download Full Brand Identity"
        primaryBtnText="Download PDF"
        primaryBtnIcon={<ChevronRight size={18} />}
        primaryHref="/images/Brand.pdf"
      />

    </>
  );
}