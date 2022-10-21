import axios from "axios";
import { baseURL } from "../constants/app.constants";

const axiosInstance = axios.create({
  baseURL,
});

export const GET = async (url, params) => {
  try {
    return await axiosInstance.get(url, {
      params,
    });
  } catch (error) {
    throw new Error(error);
  }
};
