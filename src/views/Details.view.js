import React from "react";
import { useParams } from "react-router-dom";

import { getFeatureById } from "../data/data.service";
import { FeatureDetails } from "../components";

export default () => {
  const { featureId } = useParams();
  const feature = getFeatureById(featureId);

  console.log(feature);

  return feature ? <FeatureDetails feature={feature} /> : <></>;
};
