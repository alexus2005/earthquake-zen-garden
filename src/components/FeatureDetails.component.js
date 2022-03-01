import React from "react";

const renderFeatureAspect = ({ label, value }) => (
  <tr>
    <td className="feature-aspect-label">{label}</td>
    <td className="feature-aspect-value">{value}</td>
  </tr>
);

const FeatureAspects = aspects => aspects.map(renderFeatureAspect);

export default ({
  properties: { place, title, mag, time, status, tsunami, type },
}) => {
  const aspects = [
    {
      label: "Title",
      value: { title },
    },
    {
      label: "Magnitude",
      value: { mag },
    },
    {
      label: "Time",
      value: { time },
    },
    {
      label: "Status",
      value: { status },
    },
    {
      label: "Tsunami",
      value: { tsunami },
    },
    {
      label: "Type",
      value: { type },
    },
  ];

  return (
    <section className="feature-details-container">
      <h1>{place}</h1>
      <FeatureAspects aspects={aspects} />
    </section>
  );
};
