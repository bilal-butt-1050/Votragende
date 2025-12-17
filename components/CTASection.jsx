// components/CTASection.js
export default function CTASection({ 
  title, 
  description, 
  primaryBtnText, 
  primaryBtnIcon,
  primaryHref,
  secondaryBtnText, 
  secondaryBtnIcon,
  onSecondaryClick 
}) {
  return (
    <section className="cta-section fade-scroll">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="hero-ctas">
        {primaryBtnText && primaryHref && (
          <a
            href={primaryHref}
            className="cta-btn cta-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {primaryBtnText} {primaryBtnIcon}
          </a>
        )}

        {secondaryBtnText && (
          <button
            className="cta-btn cta-secondary"
            onClick={onSecondaryClick}
          >
            {secondaryBtnText} {secondaryBtnIcon}
          </button>
        )}
      </div>
    </section>
  );
}
