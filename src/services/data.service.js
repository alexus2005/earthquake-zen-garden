import { getData } from "../_data/simulatedApiClient";

export const getSiteInfo = async () => (await getData()).site;
export const getProfileInfo = async () => (await getData()).profile;
export const getFeaturesList = async () =>
  (await getData()).data.features.map(feature => ({
    ...feature,
    properties: {
      ...feature.properties,
      mag: parseFloat(feature.properties.mag),
    },
  }));
export const getFeatureById = async featureId =>
  (await getData()).data.features.find(feature => feature.id === featureId);
