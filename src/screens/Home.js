import * as React from "react";
import ArticleCard from "../components/ArticleCard";
import DDlog from "../mock3rdParty/DataDog";
import MixPanel from "../mock3rdParty/MixPanel";
import { v4 as uuid } from "uuid";
import { useFetchHomeArticle } from "../services/news/Queries/useFetchHomeArticle";

const page = "Home";

const Home = () => {
  const {
    isError,
    isFetching,
    refetch,
    data: articleList,
  } = useFetchHomeArticle({
    onError: (err) => {
      DDlog.error("error_fetch", {
        page,
        errorReason: JSON.stringify(err, null, 4),
      });
    },
  });

  const onRefreshClick = () => {
    const eventName = "refresh_feed";
    const unique_id = uuid();
    MixPanel.track(eventName, unique_id, {
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
        <h1>Home</h1>
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
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
