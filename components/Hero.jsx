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
          <h1>VOTRAGENDE</h1>
        </div>
        
        <p className="hero-tagline">{tagline}</p>
      </div>
      
    </section>
  );
}