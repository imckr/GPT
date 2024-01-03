import React from 'react';
import "./article.css";

const Article = ({imageurl, title, Date}) => {
  return (
    <div className="gpt__blog-container__article">
      <div className="gpt__blog-container__article-image">
        <img src={imageurl} alt="blog" />
      </div>
      <div className="gpt__blog-container__article-content">
        <div>
          <p>{Date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  );
}

export default Article
