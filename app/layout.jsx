// app/layout.jsx
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="votragende-site">
          <div className="grain-overlay" />

          <Navbar />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
