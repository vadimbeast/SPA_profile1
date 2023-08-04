import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
debugger
  let postElements = 
      props.postData.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
    return (
        <div className={s.postBlock}>
        <h3>My post</h3>
           <div>
               <textarea className={ s.textarea }
                         onChange={onPostChange} 
                         ref={newPostElement}
                         placeholder={props.newPostText}
                         value = {props.newPostText}></textarea>
               <div>
                   <button className={ s.buttonStyle }
                           onClick={ addPost }>Add post</button>
               </div>                
           </div>
        
        <div className={s.postBlock}>
          { postElements }
        </div>
      </div>
    );
}

export default MyPosts;
