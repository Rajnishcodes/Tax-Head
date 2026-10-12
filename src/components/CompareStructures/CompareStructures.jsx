import "./CompareStructures.css";

const comparisonData = [
  {
    factor: "Liability Protection",
    privateLimited: "Strong",
    llp: "Strong",
    opc: "Strong",
  },
  {
    factor: "Compliance",
    privateLimited: "Moderate",
    llp: "Moderate",
    opc: "Higher",
  },
  {
    factor: "Tax Benefits",
    privateLimited: "Available",
    llp: "Available",
    opc: "Available",
  },
  {
    factor: "Investment Opportunities",
    privateLimited: "Excellent",
    llp: "Limited",
    opc: "Limited",
  },
  {
    factor: "Suitable Business Size",
    privateLimited: "Growing & Funded",
    llp: "Service / Small Biz",
    opc: "Solo Founders",
  },
];

export default function CompareStructures() {
  return (
    <section
      id="compare-structures"
      className="compare-structures-section"
    >
      <div className="compare-structures-section__container">

        {/* Section Heading */}
        <div className="compare-structures-heading">

          <span className="compare-structures-heading__eyebrow">
            <span className="compare-structures-heading__line"></span>
            Choose Your Structure
          </span>

          <h2 className="compare-structures-heading__title">
            Compare the right business
            <br />
            structure for your goals.
          </h2>

          <p className="compare-structures-heading__description">
            A quick view of the factors that commonly matter when choosing
            a structure.
          </p>

        </div>


        {/* Comparison Table */}
        <div className="compare-structures-table-wrapper">

          <table className="compare-structures-table">

            <thead>
              <tr>
                <th scope="col">
                  Factor
                </th>

                <th scope="col">
                  Private Limited
                </th>

                <th scope="col">
                  LLP
                </th>

                <th scope="col">
                  OPC
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonData.map((item) => (
                <tr key={item.factor}>

                  <th scope="row">
                    {item.factor}
                  </th>

                  <td>
                    {item.privateLimited}
                  </td>

                  <td>
                    {item.llp}
                  </td>

                  <td>
                    {item.opc}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}