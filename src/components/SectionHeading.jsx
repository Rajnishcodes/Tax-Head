export default function SectionHeading({ eyebrow, title, description, light=false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}
