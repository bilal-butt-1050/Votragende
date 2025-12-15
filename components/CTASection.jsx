// components/CTASection.js
export default function CTASection({ 
  title, 
  description, 
  primaryBtnText, 
  primaryBtnIcon, 
  secondaryBtnText, 
  secondaryBtnIcon,
  onSecondaryClick 
}) {
  return (
    <section className="cta-section fade-scroll">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="hero-ctas">
        {primaryBtnText && (
          <button className="cta-btn cta-primary">
            {primaryBtnText} {primaryBtnIcon}
          </button>
        )}
        {secondaryBtnText && (
          <button className="cta-btn cta-secondary" onClick={onSecondaryClick}>
            {secondaryBtnText} {secondaryBtnIcon}
          </button>
        )}
      </div>
    </section>
  );
}