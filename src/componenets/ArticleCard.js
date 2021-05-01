import React from "react";
import "./ArticleList.scss";

class ArticleCard extends React.Component {
  state = {
    lightboxDisplay: false,
    imageURL: "",
    description: ''
  };
  showLightBox = (url, description) => {
    this.setState({ lightboxDisplay: true, imageURL: url, details: description });
  };
  hideLightBox = (url) => {
    this.setState({ lightboxDisplay: false, imageURL: "" });
  };
  render() {
    const { description, urls, alt_description } = this.props.article;
    return (
      <div className="card">
        <div
          onClick={() => {
            this.showLightBox(urls.regular, description);
          }}
          className="article-img"
        >
          <img alt={description} src={urls['regular']} />
        </div>
        <div>{description}</div>
        <div>{alt_description}</div>
        {this.state.lightboxDisplay ? (
          <div className="lightbox" onClick={this.hideLightBox}>
            {/* <img
              className="lightbox-img"
              alt=""
              src={this.state.imageURL}
            ></img> */}
            <p>{description}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ArticleCard;