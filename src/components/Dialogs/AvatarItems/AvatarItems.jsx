import React from "react";


const AvatarItems = (props) => {

    return (
        <div>
            <img src={props.avatar.urlImage}/>
            {props.avatar}
        </div>
    );
}

export  default AvatarItems;