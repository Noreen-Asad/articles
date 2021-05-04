import React, { useState } from "react";
import "./ArticleList.scss";

const ArticleCard = ({ urls, description, alt_description }) => {
  const [details, setDescription] = useState(description);
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const showLightBox = () => {
    setLightboxDisplay(true);
    setDescription(alt_description);
  };
  const hideLightBox = () => {
    setLightboxDisplay(false);
  };
  let overview;
  if (alt_description) {
    overview = <p>{alt_description}</p>
  }
  else {
    overview = <p>no description available</p>
  }
  return (
    <div className="card">
      <div
        onClick={() => { showLightBox(urls['regular'], details) }}
        className="article-img"
      >
        <img alt={description} src={urls['regular']} />
      </div>
      <div>{description}</div>
      <div>{alt_description}</div>
      {lightboxDisplay ? (
        <div className="lightbox" onClick={hideLightBox}>
          {overview}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ArticleCard;