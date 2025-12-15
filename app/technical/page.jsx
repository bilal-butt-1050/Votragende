// app/technical/page.jsx (Technical Specs Page)
import Hero from '@/components/Hero';
import SpecsSection from '@/components/SpecsSection';
import CTASection from '@/components/CTASection';
import { ChevronRight } from 'lucide-react';
// Note: No Next.js state or effects needed here.

export default function TechnicalPage() {
  return (
    <>
      <Hero
        label="TECHNICAL SPECIFICATIONS"
        title="ENGINEERED PERFECTION"
        tagline="Every specification meticulously designed"
      />

      <div className="fade-up">
        <SpecsSection
          label="CORE SPECIFICATIONS"
          title="Technical Overview"
          specs={[
            { label: 'Frequency Response', value: '20Hz – 40kHz' },
            { label: 'Power Output', value: '500W RMS / 1000W Peak' },
            { label: 'Maximum SPL', value: '115dB @ 1m' },
            { label: 'Impedance', value: '4 Ohms' }
          ]}
        />
      </div>

      <div className="scale-in">
        <CTASection
          title="Experience Votragende Today"
          description="Schedule a private listening session."
          primaryBtnText="Find a Dealer"
          primaryBtnIcon={<ChevronRight size={20} />}
          secondaryBtnText="Back to Overview"
          secondaryBtnIcon={<ChevronRight size={20} />}
          // Action: Set up the link back to the home page
          linkHrefSecondary="/" 
        />
      </div>
    </>
  );
}