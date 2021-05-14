import React, { useEffect, useState } from "react";
import unsplash from "../api/unsplash";
import ArticleList from "./ArticleList";

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    unsplash.get("photos", {
      params: { per_page: "15" },
    }).then(data => setArticles(data.data)).catch(err => alert(err))
  }, []);

  if (articles) {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <ArticleList articles={articles} />
      </div>
    );
  }
  return null;
}

export default App;
