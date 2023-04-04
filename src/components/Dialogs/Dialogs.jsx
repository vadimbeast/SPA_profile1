import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.messages}>
               <div className={s.message}>{props.message}</div>   
           </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>

               <DialogItem name="Masha" id="1"/>
               <DialogItem name="Max" id="2"/>
               <DialogItem name="Mama" id="3"/>
               <DialogItem name="Papa" id="4"/>
               <DialogItem name="Sasha" id="5"/>
               <DialogItem name="Misha" id="6"/>

           </div>
           <div className={s.dialogs}>
               <Message message="Hi"/> 
           </div>
        </div>
    );
}

export default Dialogs;