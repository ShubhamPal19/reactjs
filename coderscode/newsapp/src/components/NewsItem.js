import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style ={{left: '90%', zIndex: 1}}>
        {source}
            
          </span>
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
