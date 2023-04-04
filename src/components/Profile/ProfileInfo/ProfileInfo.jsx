import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo =(props) => {
    return (
        <div>
            <img src='https://www.thesun.co.uk/wp-content/uploads/2022/04/217c0052-c75a-46ce-9b65-d8e34368bc3c.jpg' />

            <div className={s.marpad}>
                ava + description
            </div>
        </div>
        
    );
}

export default ProfileInfo;