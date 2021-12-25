import * as React from "react";
import { v4 as uuid } from "uuid";

import MixPanel from "../mock3rdParty/MixPanel";

const ArticleCard = ({ title, description, url, page }) => {
  const handleClick = () => {
    const eventName = "click_go_to_source";
    const unique_id = uuid();
    MixPanel.track(eventName, unique_id, {
      page,
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
