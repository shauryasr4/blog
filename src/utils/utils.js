import { BASE_URL } from "../utils/constants";

const urlBuilder = (
  succeedingString,
  baseUrl = BASE_URL,
) => {
  return baseUrl + "/" + succeedingString;
};

export { urlBuilder };
