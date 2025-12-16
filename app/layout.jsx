// app/layout.jsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import for App Router path tracking
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current URL path
  const [navVisible, setNavVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine current page based on pathname for Navbar active state/logic
  const currentPage = pathname === '/' ? 'overview' : 'technical';

  useEffect(() => {
    // 1. Navbar Scroll Visibility
    const handleScroll = () => {
      setNavVisible(window.scrollY > 50);
    };

    // 2. Intersection Observer for Scroll Animations (Applies to all pages)
    const observerOptions = {
      threshold: 0, 
      rootMargin: '0px 0px -10% 0px' 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target;

        if (entry.isIntersecting) {
          target.classList.add('animate');
          
          if (target.classList.contains('stagger-children')) {
            const children = target.children;
            Array.from(children).forEach((child, i) => {
              child.style.transitionDelay = `${i * 0.15}s`; 
            });
          }

        } else {
          target.classList.remove('animate');

          if (target.classList.contains('stagger-children')) {
            const children = target.children;
            Array.from(children).forEach((child) => {
              child.style.transitionDelay = `0s`; 
            });
          }
        }
      });
    }, observerOptions);

    // Selectors for elements needing animation
    const animElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in, .stagger-children');
    animElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Re-run observer when the page changes (pathname changes)
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [pathname]); // Depend on pathname to re-run observer and recalculate animations

  return (
    <html lang="en">
      <body>
        <div className="votragende-site">
          <div className="grain-overlay" />

          <Navbar
            currentPage={currentPage}
            // Note: setCurrentPage logic must be updated in Navbar to use next/link instead of state
            navVisible={navVisible}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          
          {/* Render the specific page content (app/page.jsx or app/technical/page.jsx) */}
          {children} 
          <Footer />
        </div>
      </body>
    </html>
  );
}