
import { motion, useReducedMotion } from "framer-motion";
import { comparisons } from "../../data/siteData";
import SectionHeading from "../SectionHeading";
import "./CompareStructures.css";

const columns = [
  "Feature",
  "Private Limited",
  "LLP",
  "One Person Company",
];

export default function CompareStructures() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="compare-structures"
      className="gst-compare"
      aria-labelledby="gst-compare__title"
    >
      <div className="gst-compare__container">
        <motion.div
          className="gst-compare__heading"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeading
            eyebrow="COMPARE BUSINESS STRUCTURES"
            title="Choose the right structure for your business."
            description="Compare key factors to understand which business structure may suit your goals."
          />
        </motion.div>

        <motion.div
          className="gst-compare__table-wrap"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          role="region"
          aria-label="Business structure comparison table"
          tabIndex={0}
        >
          <table className="gst-compare__table">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={column}
                    scope="col"
                    className={
                      index === 1
                        ? "gst-compare__header gst-compare__header--featured"
                        : "gst-compare__header"
                    }
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {comparisons.map((row, rowIndex) => (
                <tr key={row[0]}>
                  {row.map((value, columnIndex) => {
                    const isFeature = columnIndex === 0;
                    const isBusinessSize =
                      rowIndex === comparisons.length - 1;

                    return (
                      <td
                        key={`${row[0]}-${columnIndex}`}
                        className={[
                          "gst-compare__cell",
                          columnIndex === 1
                            ? "gst-compare__cell--featured"
                            : "",
                          isFeature
                            ? "gst-compare__cell--feature"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {isFeature ? (
                          value
                        ) : (
                          <span className="gst-compare__value">
                            <span
                              className={[
                                "gst-compare__dot",
                                isBusinessSize
                                  ? "gst-compare__dot--neutral"
                                  : "gst-compare__dot--success",
                              ].join(" ")}
                              aria-hidden="true"
                            />
                            <span>{value}</span>
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
