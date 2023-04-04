import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
        <h3>My post</h3>
           <div>
               <textarea></textarea>
               <div>
                   <button>Add post</button>
               </div>
               
               <button>Remove</button>
               
           </div>
        <div>
          new post 
        </div>
        <div>
          <Post message='How are you?' />
          <div className={s.postBlock}>
            post 2
          </div>
        </div>
      </div>
    );
}

export default MyPosts;
