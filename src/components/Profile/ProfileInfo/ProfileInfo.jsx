import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo =(props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <img src='https://www.thesun.co.uk/wp-content/uploads/2022/04/217c0052-c75a-46ce-9b65-d8e34368bc3c.jpg' />

            <div className={s.marpad}>
                <div>
                    <img src={ props.profile.photos.large != null ? props.profile.photos.large : userPhoto } />
                </div>
                <span>{ props.profile.aboutMe }</span>

                <div>
                    { props.profile.fullName }
                </div>

                <div>   
                    <button onClick={ () => {props.follow()}}>Follow</button> 
                    <button onClick={ () => {props.unfollow()}}>Unfollow</button>   
                </div>
            </div>
            <ProfileStatus status="Hello world!"/>
            <div className={ s.contact }>
                Контактная информация:
                <lo>
                    <li>{ props.profile.contacts.facebook }</li>
                    <li>{ props.profile.contacts.vk }</li>
                    <li>{ props.profile.contacts.twitter }</li>
                    <li>{ props.profile.contacts.instagram }</li>
                    <li>{ props.profile.contacts.github }</li>
                </lo>
            </div>
        </div>
        
    );
}

export default ProfileInfo;