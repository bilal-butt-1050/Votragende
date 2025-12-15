// components/SpecsSection.js
export default function SpecsSection({ label, title, subtitle, specs }) {
  return (
    <section className="content-section fade-scroll">
      <div className="section-header">
        <span className="section-label">{label}</span>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      <div className="specs-container">
        {specs.map((spec, index) => (
          <div className="spec-row" key={index}>
            <div className="spec-label">{spec.label}</div>
            <div className="spec-value">
              {spec.value.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < spec.value.split('\n').length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}