import React from "react";
import "./ArticleList.scss";
import ArticleCard from "./ArticleCard";
const ArticleList = (props) => {
  const articles = props.articles.map(({id, ...otherProps}) => {
    return <ArticleCard key={id} {...otherProps}></ArticleCard>
  });
  return <div className="article-list">{articles}</div>;
};

export default ArticleList;
