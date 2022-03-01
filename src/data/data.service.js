import dataSource from "./data.json";

export const getSiteInfo = () => dataSource.site;
export const getProfileInfo = () => dataSource.profile;
export const getFeaturesList = () => dataSource.data.features;
export const getFeatureById = featureId =>
  dataSource.data.features.find(feature => feature.id === featureId);
