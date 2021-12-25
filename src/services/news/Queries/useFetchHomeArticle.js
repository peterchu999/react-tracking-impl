import { useQuery } from "react-query";
import { services } from "../instace";

const fetchHomeArticle = async () => {
  try {
    const { data } = await services.get("everything?q=tech");
    return data.articles;
  } catch (err) {
    throw err;
  }
};

export const useFetchHomeArticle = (options) => {
  return useQuery("fetchEverythingTech", fetchHomeArticle, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    ...options,
  });
};
