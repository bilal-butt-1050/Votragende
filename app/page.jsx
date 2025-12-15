// app/page.jsx (Overview/Home Page)
import SpeakerDetails from '@/components/Speaker'; // Assuming this is your combined component
import Hero from '@/components/Hero';
import ContentSection from '@/components/ContentSection';
import CTASection from '@/components/CTASection';
import About from '@/components/About';
import {
  Volume2,
  Waves,
  Zap,
  Bluetooth,
  Wifi,
  Speaker,
  Music,
  Radio,
  ChevronRight,
  Award,
  Heart
} from 'lucide-react';
// Note: Removed useState, useEffect, and the conditional rendering logic.

export default function OverviewPage() {
  return (
    <>
      <Hero
        label="PREMIUM AUDIO SYSTEM"
        tagline="Experience sound in its purest form. Engineered for audiophiles, designed for perfection."
      />
      
   <SpeakerDetails />
  <About />


      <div className="fade-up stagger-children">
        <ContentSection
          label="AUDIO PERFORMANCE"
          title="Uncompromising Sound Quality"
          subtitle="Powered by advanced acoustic technology and premium drivers"
          features={[
            { icon: <Waves size={32} />, title: 'Deep Bass Response', description: 'Dual 10" woofers deliver distortion-free bass down to 20Hz.' },
            { icon: <Speaker size={32} />, title: 'Crystal Clear Mids', description: 'Precision-tuned midrange for vocal clarity.' },
            { icon: <Music size={32} />, title: 'Sparkling Highs', description: 'Silk dome tweeters reproduce ultra-high frequencies.' }
          ]}
        />
      </div>
      
      <div className="fade-left stagger-children">
        <ContentSection
          label="AESTHETIC EXCELLENCE"
          title="Form Meets Function"
          subtitle="Industrial design that complements any space"
          features={[
            { icon: <Award size={32} />, title: 'Premium Materials', description: 'Aircraft-grade aluminum and hand-finished wood.' },
            { icon: <Zap size={32} />, title: 'Minimalist Design', description: 'Clean lines, timeless proportions.' },
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
            { icon: <Wifi size={32} />, title: 'WiFi Streaming', description: 'AirPlay 2, Chromecast, Spotify Connect.' },
            { icon: <Radio size={32} />, title: 'Wired Options', description: 'XLR, RCA, optical inputs.' }
          ]}
        />
      </div>

      <div className="scale-in">
        <CTASection
          title="Ready to Experience Votragende?"
          description="Elevate your listening experience."
          primaryBtnText="Find a Dealer"
          primaryBtnIcon={<ChevronRight size={20} />}
          secondaryBtnText="View Full Specs"
          secondaryBtnIcon={<ChevronRight size={20} />}
          // Action: Set up the link to the technical page
          linkHrefSecondary="/technical" 
        />
      </div>
    </>
  );
}