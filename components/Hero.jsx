// components/Hero.js

export default function Hero({
  label,
  tagline,
}) {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <span className="hero-label">{label}</span>
        
        <div className="hero-title">
          <img src="/images/logo3.png" alt="VOTRAGENDE Logo" />
        </div>
        
        <p className="hero-tagline">{tagline}</p>
      </div>
      
    </section>
  );
}