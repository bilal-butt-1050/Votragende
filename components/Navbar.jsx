// components/Navbar.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar({
  navVisible,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  const pathname = usePathname();

  const routes = [
    { name: 'OVERVIEW', path: '/', key: 'overview' },
    { name: 'TECHNICAL', path: '/technical', key: 'technical' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <nav className={`navbar ${navVisible ? 'visible' : ''}`}>
        <div className="nav-logo">     
          <Link href="/">
            {/* Added wrapper div for better control */}
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
              key={route.key}
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
              key={route.key}
              href={route.path}
              className={`nav-link ${isActive(route.path) ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}