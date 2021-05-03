import React from "react";
import "./ArticleList.scss";
import ArticleCard from "./ArticleCard";
const ArticleList = (props) => {
  const articles = props.articles.map((article) => {
    return <ArticleCard article={article} key={article.id} />
  });
  return <div className="article-list">{articles}</div>;
};

export default ArticleList;
