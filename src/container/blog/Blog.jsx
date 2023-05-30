import React from 'react';
import { Articles } from '../../components';
import { zut1,zut2,zut3,zut4,blog02 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className="zictc__blog section__padding">
      <div className="zictc__blog-heading">
        <h1 className="gradient__text">
          Zambia University of Technology weekly trends
        </h1>
      </div>
      <div className="zictc__blog-container">
        <div className="zictc__blog-container__mainblog">
          <Articles 
            imgUrl={zut1} 
            date='01-02-2023'  
            title='Zambia University of technology scopes the award of most prestigious higher learning institution in Zambia' 
          />
        </div>
        <div className="zictz__blog-container__smallerblog">
          <Articles 
            imgUrl={blog02} 
            date='01-02-2023' 
            title='4th year students develop an automated voice control wheel chair.' 
          />
          <Articles 
            imgUrl={zut4} 
            date='01-02-2023' 
            title='Former zut student applauded as best software developer at ZICTA' 
          />
          <Articles
            imgUrl={zut3}
            date='01-02-2023' 
            title='2nd year students develops a virtual reality that helps you tour  zambia remotely'  
          />
          <Articles 
            imgUrl={zut2} 
            date='01-02-2023' 
            title='ZUT  staff representing zambia at the world networking competition in japan'  
          />
        </div>
      </div>
    </div>
  )
}

export default Blog;
