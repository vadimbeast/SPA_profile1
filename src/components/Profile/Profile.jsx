import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                follow={props.follow}
                unfollow={props.unfollow}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
            />

            <MyPostContainer />

        </div>
    );
}

export default Profile;