import * as React from "react";
const ArticleCard = ({ title, description, url }) => {
  const handleClick = () => {
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
