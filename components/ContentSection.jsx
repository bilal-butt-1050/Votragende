// components/ContentSection.js
export default function ContentSection({ label, title, subtitle, features }) {
  return (
    <section className="content-section fade-scroll">
      <div className="section-header">
        <span className="section-label">{label}</span>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>
      <div className="cards-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="card-icon">{feature.icon}</div>
            <h3 className="card-title">{feature.title}</h3>
            <p className="card-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}