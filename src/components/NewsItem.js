import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsItem extends Component {
  

  render() {
    let {title, description, imageUrl, author, date} = this.props; 
    return (
     
      <div className="card" style={{ margin:'5px 5px'}}>
        <img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/H4U4OJCWHNFB2VHHMHNYZJS6GI_size-normalized.jpg&w=1440":imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {description}
          </p>
          <a href="/" className="btn btn-sm btn-dark">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">
          By {author?author:"Unkown"} on {new Date(date).toGMTString()}
        </div>
      </div>
    );
  }
}

export default NewsItem;
