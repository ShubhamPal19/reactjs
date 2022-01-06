import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  async changepage() {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=8d512af358c74200a779778604178a32&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults 
    });
  }

  handlePreClick = async () => {
    // this.state({loading: true})
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8d512af358c74200a779778604178a32&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await  data.json()

    //   this.setState({
    //     articles : parsedData.articles,
    //     page:this.state.page -1,
    //     loading: false
    //   });

    this.setState({ page: this.state.page - 1 });
    this.changepage();
  };

  handleNextClick = async () => {
    // if(this.state.page+1<=Math.ceil(this.state.totalArticles/10)){

    // console.log("in nest")
    // this.setState({loading: true})
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8d512af358c74200a779778604178a32&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await  data.json()

    // this.setState({
    //   articles : parsedData.articles,
    //   page:this.state.page +1,
    //   loading:false
    // });
    this.setState({ page: this.state.page + 1 });
    this.changepage();
  };

  constructor() {
    super();
    console.log("closondf ");
    this.state = {
      articles: [],
      loading: false,
      page: 1,

      totalResults:0
      
    };
  }

  async componentDidMount() {
    console.log(" in cdm");

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8d512af358c74200a779778604178a32&pageSize=${this.props.pageSize}`
    // let data = await fetch(url);
    // let parsedData = await  data.json()
    // this.setState({  articles : parsedData.articles,totalArticles:parsedData.totalResults });

    // console.log(parsedData)
    this.changepage();
  }

  render() {
    console.log("ind render");

    return (

      <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top Headings</h2>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="row my-4">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreClick}
          >
            {" "}
            &larr; previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
