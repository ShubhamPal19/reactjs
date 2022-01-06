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

  async updateNews() {

    this.props.setProgress(10)
    this.setState({ loading: true });

    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30)
    let data = await fetch(url);
    this.props.setProgress(60)
    let parsedData = await data.json();
    this.props.setProgress(80)
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults 
    });

    this.props.setProgress(100)
  }

  handlePreClick = async () => {
    // this.state({loading: true})
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await  data.json()

    //   this.setState({
    //     articles : parsedData.articles,
    //     page:this.state.page -1,
    //     loading: false
    //   });

    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    // if(this.state.page+1<=Math.ceil(this.state.totalArticles/10)){

    // console.log("in nest")
    // this.setState({loading: true})
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await  data.json()

    // this.setState({
    //   articles : parsedData.articles,
    //   page:this.state.page +1,
    //   loading:false
    // });
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
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

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    // let data = await fetch(url);
    // let parsedData = await  data.json()
    // this.setState({  articles : parsedData.articles,totalArticles:parsedData.totalResults });

    // console.log(parsedData)
    this.updateNews();
  }


  fetchMoreData = async () => {

    this.setState({ page: this.state.page + 1 });
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults 
    });
  };

  render() {
    console.log("ind render");

    return (
      <>
     
    
        <h2 className="text-center">NewsMonkey - Top Headings</h2>
        


        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={ this.state.loading && <Spinner/>}
        >
          <div className="container">

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
        </div>
        </InfiniteScroll>
      
        </>
    );
  }
}
