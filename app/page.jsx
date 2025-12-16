// app/page.jsx
'use client';

import { useEffect } from 'react';
import SpeakerDetails from '@/components/Speaker';
import Hero from '@/components/Hero';
import ContentSection from '@/components/ContentSection';
import About from '@/components/About';

import {
  Waves,
  Zap,
  Bluetooth,
  Wifi,
  Speaker,
  Music,
  Radio,
  Award,
  Heart
} from 'lucide-react';

export default function OverviewPage() {

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;

        if (entry.isIntersecting) {
          el.classList.add('animate');

          if (el.classList.contains('stagger-children')) {
            Array.from(el.children).forEach((child, i) => {
              child.style.transitionDelay = `${i * 0.15}s`;
            });
          }

          observer.unobserve(el);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      '.fade-up, .fade-left, .fade-right, .scale-in, .stagger-children'
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero
        label="PREMIUM AUDIO SYSTEM"
        tagline="Experience sound in its purest form. Engineered for audiophiles, designed for executives."
      />

      <SpeakerDetails />
      <About />

      <div className="fade-up stagger-children">
        <ContentSection
          label="AUDIO PERFORMANCE"
          title="Uncompromising Sound Quality"
          subtitle="Powered by advanced acoustic technology and premium drivers"
          features={[
            { icon: <Waves size={32} />, title: 'Deep Bass Response', description: 'Powerful 5" woofer delivers.' },
            { icon: <Speaker size={32} />, title: 'Crystal Clear Mids', description: 'Precision-tuned midrange for vocal clarity.' },
            { icon: <Music size={32} />, title: 'Sparkling Highs', description: 'Silk dome tweeters reproduce ultra-high frequencies.' }
          ]}
        />
      </div>

      <div className="fade-left stagger-children">
        <ContentSection
          label="AESTHETIC EXCELLENCE"
          title="Form Meets Function"
          subtitle="Industrial design that complements executive any space"
          features={[
            { icon: <Award size={32} />, title: 'Premium Materials', description: 'Chrome plated Metal.' },
            { icon: <Zap size={32} />, title: 'Minimalist Design', description: 'Clean lines, sleek curves and timeless proportions.' },
            { icon: <Heart size={32} />, title: 'Attention to Detail', description: 'Every element refined for elegance and usability.' }
          ]}
        />
      </div>

      <div className="fade-right stagger-children">
        <ContentSection
          label="SEAMLESS INTEGRATION"
          title="Connected Audio Experience"
          subtitle="Effortless connectivity across all devices"
          features={[
            { icon: <Bluetooth size={32} />, title: 'Bluetooth 5.3', description: 'Lossless wireless streaming.' },
            { icon: <Wifi size={32} />, title: 'Multiple Audio Platforms', description: 'AirPlay 2, Chromecast, Spotify Connect.' },
            { icon: <Radio size={32} />, title: 'Wired Options', description: 'XLR, RCA, optical inputs.' }
          ]}
        />
      </div>
    </>
  );
}
