import React from 'react';
import './articles.css';

const Articles = ( { imgUrl, date, title, text }) => {
  return (
    <div className="zictc__blog-container__article">
      <div className="zictc__blog-container__article-image">
        <img src={ imgUrl } alt=" blog illustration" />
      </div>
      <div className="zictc__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <div className="zictc__blog-container__article-content__btn">
          <a href="">read more</a>
        </div>
      </div>
    </div>
  )
}

export default Articles;
