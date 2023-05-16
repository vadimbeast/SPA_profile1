import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postElements = 
      props.postData.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

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
        
        <div className={s.postBlock}>
          { postElements }
        </div>
      </div>
    );
}

export default MyPosts;
