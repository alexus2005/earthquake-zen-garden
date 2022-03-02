import React from "react";
import { Link } from "react-router-dom";
import { number, shape, string } from "prop-types";

import { formatTime } from "../services/time.service";

function SingleFeature({
  feature: {
    properties: { title, mag, time },
    id
  }
}) {
  return (
    <tr key={id}>
      <td>
        <Link to={`/details/${id}`}>{title}</Link>
      </td>
      <td className="feature-list-magnitude">{mag}</td>
      <td className="feature-list-time">{formatTime(time)}</td>
    </tr>
  );
}

SingleFeature.propTypes = {
  feature: shape({
    properties: shape({
      title: string.isRequired,
      mag: number.isRequired,
      time: number.isRequired
    }),
    id: string.isRequired
  })
};

export default SingleFeature;
