import React from "react";
import unsplash from "../api/unsplash";
import ArticleList from "./ArticleList";

class App extends React.Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    const response = await unsplash.get("photos", {
      params: { per_page: "20" },
    });
    console.log(response);
    this.setState({ articles: response.data });
  }

  render() {
    if (this.state.articles) {
      return (
        <div className="ui container" style={{ marginTop: "10px" }}>
          <ArticleList articles={this.state.articles} />
        </div>
      );
    }
    return null;
  }
}

export default App;
