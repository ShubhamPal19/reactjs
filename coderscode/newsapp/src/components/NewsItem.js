import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>

        <div className="card">

        <div className="container">
            <span className="position-absolute  badge rounded-pill bg-danger" style ={{zIndex: 1,display:"flex",right:-5}}>{source}</span>
          
            </div>

          <img
            src={
              imageUrl
                ? imageUrl
                : "https://elegalmetrology.jharkhand.gov.in/japnet/images/news.jpg"
            }
            style={{ height: "30vh" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By : {author ? author : "Unknow"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
     
        </div>
      </div>
    );
  }
}
