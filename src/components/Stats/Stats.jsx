import { stats } from "../../data/siteData";
import "./Stats.css";

function renderStatValue(value) {
  const valueString = String(value);

  const match = valueString.match(/^(.+?)([+/].+)$/);

  if (!match) {
    return valueString;
  }

  return (
    <>
      <span className="gst-stats__value-main">
        {match[1]}
      </span>
      <span className="gst-stats__value-accent">
        {match[2]}
      </span>
    </>
  );
}

export default function Stats() {
  return (
    <section className="gst-stats" aria-label="Business statistics">
      <div className="gst-stats__container">
        {stats.map((stat) => (
          <div
            className="gst-stats__item"
            key={stat.label}
          >
            <strong className="gst-stats__value">
              {renderStatValue(stat.value)}
            </strong>

            <span className="gst-stats__label">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}