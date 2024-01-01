import React from 'react';
import './blog.css';
import { Article } from '../../Components'
import {blog01, blog02, blog03, blog04, blog05} from './import'

const Blog = () => {
  return (
    <div className="gpt__blog section__padding">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">
          <Article
            imageurl={blog01}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            Date="Sep 26, 2021"
          />
        </div>
        <div className="gpt__blog-container_groupB">
          <Article
            imageurl={blog02} 
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
            Date="Sep 26, 2021"
          />
          <Article
            imageurl={blog03}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            Date="Sep 26, 2021"
          />
          <Article
            imageurl={blog04}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            Date="Sep 26, 2021"
          />
          <Article
            imageurl={blog05}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            Date="Sep 26, 2021"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog
