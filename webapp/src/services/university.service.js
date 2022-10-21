import { resourcePaths } from "../constants/app.constants";
import { GET } from "./http.service";

export const fetchUniversities = async (name, order) => {
  try {
    let params;
    if (order) {
      params = { name, order };
    } else {
      params = { name };
    }
    const responseData = await GET(resourcePaths.SEARCH_UNIVERSITIES, params);
    return responseData.data;
  } catch (error) {
    throw new Error(error);
  }
};
