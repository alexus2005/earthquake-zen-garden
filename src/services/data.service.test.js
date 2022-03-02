import "regenerator-runtime";
import {
  getFeatureById,
  getFeaturesList,
  getProfileInfo,
  getSiteInfo
} from "./data.service";

const featuresData = [
  {
    type: "Feature",
    properties: {
      mag: 1.19,
      place: "3km ENE of The Geysers, CA",
      time: 1523647508250,
      status: "automatic",
      type: "earthquake",
      title: "M 1.2 - 3km ENE of The Geysers, CA"
    },
    id: "1"
  }
];

const siteData = {
  title: "Earthquake Zen Garden",
  heroImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Arenal_Volcano_07_2015_CRI_3828.jpg/1920px-Arenal_Volcano_07_2015_CRI_3828.jpg",
  logoImage: "https://www.realtor.com/realtor-com.png"
};

const profileData = {
  firstName: "first name",
  lastName: "last name",
  phone: "604-816-2486",
  email: "test@test.test",
  bio: "Some bio here",
  avatarImage: "http://nowhere.nowhere/nowhere.jpg"
};

jest.mock("../_data/simulatedApiClient", () => ({
  __esModule: true,
  getData: jest.fn(async () => ({
    profile: profileData,
    data: { features: featuresData },
    site: siteData
  }))
}));

describe("data.service test suite", () => {
  test("getProfileInfo should return correct profile info", async () => {
    const expectedProfileInfo = profileData;

    expect(await getProfileInfo()).toEqual(expectedProfileInfo);
  });

  test("getSiteInfo should return correct site info", async () => {
    const expectedSiteInfo = siteData;

    expect(await getSiteInfo()).toEqual(expectedSiteInfo);
  });

  test("getFeaturesList should return correct site info", async () => {
    const expectedFeaturesList = featuresData.map((feature) => ({
      ...feature,
      properties: {
        ...feature.properties,
        mag: parseFloat(feature.properties.mag)
      }
    }));

    expect(await getFeaturesList()).toEqual(expectedFeaturesList);
  });

  test("getFeatureById should return correct site info", async () => {
    const expectedFeature = featuresData[0];

    expect(await getFeatureById("1")).toEqual(expectedFeature);
  });
});
