import * as React from "react";
import Heap from "../mock3rdParty/Heap";

const ArticleCard = ({ title, description, url, page, user }) => {
  const handleClick = () => {
    const eventName = "click_go_to_source";
    Heap.track(eventName, {
      page,
      user,
    });
    window.open(url, "_blank");
  };
  return (
    <div class="col-sm-6 mb-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <button onClick={handleClick} class="btn btn-primary">
            Go to Source
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
