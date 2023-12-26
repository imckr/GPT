import React from 'react';
import './blog.css';
import { Article } from '../../Components'

const Blog = () => {
  return (
    <div className="gpt__blog section__padding">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt__blog-container'>
        <div className='gpt__blog-container_groupA'>
          <Article/>
        </div>
        <div className='gpt__blog-container_groupB'>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
        </div>
      </div>
    </div>
  );
}

export default Blog
