import React from "react";
import { string, number, shape } from "prop-types";

import { formatTime } from "../services/time.service";

const renderFeatureAspect = ({ label, value }) => (
  <tr key={label}>
    <td className="feature-aspect-label">{label}</td>
    <td className="feature-aspect-value">{value}</td>
  </tr>
);

const FeatureAspects = ({ aspects }) => aspects.map(renderFeatureAspect);

function FeatureDetails({
  feature: {
    properties: { title, mag, time, status, tsunami, type }
  }
}) {
  const aspects = [
    {
      label: "Title",
      value: title
    },
    {
      label: "Magnitude",
      value: mag
    },
    {
      label: "Time",
      value: formatTime(time)
    },
    {
      label: "Status",
      value: status
    },
    {
      label: "Tsunami",
      value: tsunami
    },
    {
      label: "Type",
      value: type
    }
  ];

  return (
    <section className="feature-details-container">
      <table>
        <tbody>
          <FeatureAspects aspects={aspects} />
        </tbody>
      </table>
    </section>
  );
}

FeatureDetails.propTypes = {
  feature: shape({
    properties: shape({
      title: string.isRequired,
      mag: number.isRequired,
      time: number.isRequired,
      status: string.isRequired,
      type: string.isRequired
    })
  })
};

export default FeatureDetails;
