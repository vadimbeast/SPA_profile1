import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.module}>
        my posts
           <div>
               <textarea></textarea>
               <button>Add post</button>
               <button>Remove</button>
           </div>
        <div>
          new post 
        </div>
        <div>
          <Post message='How are you?' />
          <div className={s.marpad}>
            post 2
          </div>
        </div>
      </div>
    );
}

export default MyPosts;
