import { useQuery } from "react-query";

const fetchCurrentUser = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email: "lorem@ipsum.com",
        phoneNumber: "123456",
      });
    }, 1000);
  });
};

export const useFetchCurrentUser = (options) => {
  return useQuery("fetchCurrentUser", fetchCurrentUser, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    ...options,
  });
};
