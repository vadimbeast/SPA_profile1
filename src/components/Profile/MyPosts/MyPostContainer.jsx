import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profileReducer";
import { updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
            
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer;