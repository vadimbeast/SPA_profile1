import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postElements = 
      props.postData.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action);
  }

    return (
        <div className={s.postBlock}>
        <h3>My post</h3>
           <div>
               <textarea className={ s.textarea }
                         onChange={onPostChange} 
                         ref={newPostElement}
                         placeholder={props.newPostText}></textarea>
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
