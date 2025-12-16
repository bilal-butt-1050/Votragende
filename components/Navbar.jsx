// components/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import "../app/styles/_navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  const [navVisible, setNavVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const routes = [
    { name: 'OVERVIEW', path: '/' },
    { name: 'TECHNICAL', path: '/technical' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setNavVisible(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <>
      <nav className={`navbar ${navVisible ? 'visible' : ''}`}>
        <div className="nav-logo">
          <Link href="/">
            <div className="logo-container">
              <img
                src="/images/logo2.png"
                alt="Logo"
                className="logo-image"
              />
            </div>
          </Link>
        </div>

        <div className="nav-links">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`nav-link ${isActive(route.path) ? 'active' : ''}`}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          className="mobile-menu-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="mobile-menu-links">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`nav-link ${isActive(route.path) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
