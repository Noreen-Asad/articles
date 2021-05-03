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
    let overview;
    if (alt_description) {
     overview = <p>{alt_description}</p>
    }
    else{
      overview = <p>no description available</p>
    }
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
            {overview}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ArticleCard;