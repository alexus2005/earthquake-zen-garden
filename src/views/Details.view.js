import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getFeatureById } from "../services/data.service";
import { FeatureDetails, PageHeading } from "../components";

export default () => {
  const { featureId } = useParams();
  const [feature, setFeature] = useState();

  useEffect(async () => setFeature(await getFeatureById(featureId)));

  return (
    <>
      {feature ? (
        <>
          <PageHeading text={feature.properties.title} />
          <FeatureDetails feature={feature} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
