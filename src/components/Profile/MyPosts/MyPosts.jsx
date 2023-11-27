import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from "redux-form";


const MyPosts = (props) => {

  let postElements =
    props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addNewPostText = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postBlock}>
      <h3>My post</h3>

      <MyPostFormRedux onSubmit={addNewPostText} />

      <div className={s.postBlock}>
        {postElements}
      </div>
    </div>
  );
}

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.textarea}
          placeholder={"Enter your text..."}
          name={"newPostText"}
          component={"textarea"}
        />
      </div>
      <div>
        <button className={s.buttonStyle}>Add post</button>
      </div>
    </form>
  );
}

const MyPostFormRedux = reduxForm({ form: 'addNewPostText' })(MyPostsForm)

export default MyPosts;
