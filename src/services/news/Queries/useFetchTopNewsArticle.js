import { useQuery } from "react-query";
import { services } from "../instace";

const fetchTopNewsArticle = async () => {
  try {
    const { data } = await services.get("top-headlines?q=tech");
    return data.articles;
  } catch (err) {
    throw err;
  }
};

export const useFetchTopNewsArticle = (options) => {
  return useQuery("fetchTopNewsTech", fetchTopNewsArticle, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    ...options,
  });
};
