import * as React from "react";
import { useTracking } from "react-tracking";
import ArticleCard from "../components/ArticleCard";
import { useFetchHomeArticle } from "../services/news/Queries/useFetchHomeArticle";

const Home = () => {
  const {
    isError,
    isFetching,
    refetch,
    data: articleList,
  } = useFetchHomeArticle({
    onError: (err) => {
      const eventName = "error_fetch";
      trackEvent({
        type: "error",
        data: {
          eventName,
          errorReason: JSON.stringify(err, null, 4),
        },
      });
    },
  });

  const { trackEvent, Track } = useTracking({
    // initial data for this component only, to pass to the child wrapped the child components with Track
    data: { page: "HOME" },
  });

  const onRefreshClick = () => {
    trackEvent({ type: "product", data: { eventName: "refresh_feed" } });
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
        <Track>
          {articleList.map(({ title, description, url }) => {
            return (
              <ArticleCard url={url} title={title} description={description} />
            );
          })}
        </Track>
      </div>
    </>
  );
};

export default Home;
