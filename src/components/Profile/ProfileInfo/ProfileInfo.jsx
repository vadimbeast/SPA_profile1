import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo =(profile, status, updateStatus, follow, unfollow) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <img src='https://www.thesun.co.uk/wp-content/uploads/2022/04/217c0052-c75a-46ce-9b65-d8e34368bc3c.jpg' />

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

            <div className={s.marpad}>
                <div>
                    <img src={ profile.photos.large != null ? profile.photos.large : userPhoto } />
                </div>
                <span>{ profile.aboutMe }</span>

                <div>
                    { profile.fullName }
                </div>

                <div>   
                    <button onClick={ () => {follow()}}>Follow</button> 
                    <button onClick={ () => {unfollow()}}>Unfollow</button>   
                </div>
            </div>
        
            <div className={ s.contact }>
                Контактная информация:
                <lo>
                    <li>{ profile.contacts.facebook }</li>
                    <li>{ profile.contacts.vk }</li>
                    <li>{ profile.contacts.twitter }</li>
                    <li>{ profile.contacts.instagram }</li>
                    <li>{ profile.contacts.github }</li>
                </lo>
            </div>
        </div>
        
    );
}

export default ProfileInfo;