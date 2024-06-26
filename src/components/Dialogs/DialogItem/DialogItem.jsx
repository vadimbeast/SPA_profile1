import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

    /*let avatarElement = props.avatar
       .map( a => <AvatarItems id = {a.id} urlImage = {a.urlImage} /> );*/

    return (
        <div className={s.dialog + ' ' + s.active}>
            
            

            <NavLink to={"/dialogs" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;