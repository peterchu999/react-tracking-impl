import * as React from "react";
import ArticleCard from "../components/ArticleCard";
import DDlog from "../mock3rdParty/DataDog";
import MixPanel from "../mock3rdParty/MixPanel";
import { useFetchTopNewsArticle } from "../services/news/Queries/useFetchTopNewsArticle";
import { v4 as uuid } from "uuid";
import { useFetchCurrentUser } from "../services/users/Queris/useFetchCurrentUser";
import Heap from "../mock3rdParty/Heap";

const page = "TopNews";

const TopNews = () => {
  const { data: user } = useFetchCurrentUser();
  const {
    isError,
    isFetching,
    refetch,
    data: articleList,
  } = useFetchTopNewsArticle({
    onError: (err) => {
      const eventName = "error_fetch";
      DDlog.error(eventName, {
        page,
        user,
        errorReason: JSON.stringify(err, null, 4),
      });
    },
  });

  const onRefreshClick = () => {
    const eventName = "refresh_feed";
    Heap.track(eventName, {
      user,
      page,
    });
    refetch();
  };

  if (isFetching) {
    return (
      <h2 class="p-2">
        <div class="spinner-border text-secondary mx-2" role="status"></div>
        Still Loading....
      </h2>
    );
  }

  if (isError) {
    return <h2 class="text-danger">Error Occurs...</h2>;
  }

  return (
    <>
      <div class="d-flex justify-content-between mb-3 align-items-center">
        <h1>Top News</h1>
        <button onClick={onRefreshClick} class="btn btn-success">
          Refersh Feed
        </button>
      </div>
      <div class="row d-flex">
        {articleList.map(({ title, description, url }) => {
          return (
            <ArticleCard
              url={url}
              titl={title}
              description={description}
              page={page}
              user={user}
            />
          );
        })}
      </div>
    </>
  );
};

export default TopNews;
