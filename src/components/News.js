import React, { useState, useEffect, useRef } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar"; // Import the LoadingBar component
// import "./News.css"; // Import your News.css file if you have one

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = async (category, currentPage) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    console.log("Fetching URL:", url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const capitalizeFirstLetter = (string) => {
    let remain = string.slice(1);
    return string.charAt(0).toUpperCase() + remain;
  };

  const loadingBarRef = useRef(null); // Create a ref for the LoadingBar

  useEffect(() => {
    console.log("Props:", props);
    const fetchData = async () => {
      loadingBarRef.current.continuousStart(); // Start the loading bar
      setLoading(true);
      const parsedData = await fetchNews(props.cat, page);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      loadingBarRef.current.complete(); // Complete the loading bar
    };

    fetchData();
  }, [props.cat, page, props.apiKey, props.country, props.pageSize]);

  const fetchMoreData = async () => {
    if (page + 1 <= Math.ceil(totalResults / props.pageSize)) {
      setLoading(true);
      const nextPage = page + 1;
      const parsedData = await fetchNews(props.cat, nextPage);
      setPage(nextPage);
      setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
      setLoading(false);
    }
  };

  return (
    <div className="container my-3">
      <LoadingBar color="#f11946" ref={loadingBarRef} /> {/* LoadingBar component */}
      <h2 className="text-center" style={{ margin: "90px 0px" }}>
        NewsUpdate - Top {capitalizeFirstLetter(props.cat)} Headlines
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        Loader={loading ? <div>Loading...</div> : null}
        style={{ overflow: "hidden" }}
      >
        <div className="row">
          {articles.map((element) => {
            
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;