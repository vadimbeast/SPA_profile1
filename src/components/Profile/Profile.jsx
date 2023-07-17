import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
debugger
    return (
        <div className={s.content}>
            <ProfileInfo />
         
            <MyPostContainer store={props.store} />
                     
        </div>
    );
}

export default Profile;