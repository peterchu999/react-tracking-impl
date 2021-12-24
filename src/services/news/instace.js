import axios from "axios";
import { NEWS_API_KEY } from "../../config";

export const services = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    "X-Api-Key": NEWS_API_KEY,
  },
});

export const getHomeArticle = async () => {
  try {
    const { data } = await services.get("everything?q=tech");
    return data;
  } catch (err) {
    throw err;
  }
};
