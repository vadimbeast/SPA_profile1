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

    let dialogs = [
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Mama'},
        {id: 4, name: 'Papa'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Misha'}
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How r u?'},
        {id: 3, message: 'I am fine'},
        {id: 4, message: 'Go to  Shishky'}
    ]


    let dialogsElements = dialogs
        .map( d => <DialogItem name = {d.name} id = {d.id}/> );

    let messagesElements = messages
        .map( m => <Message message = {m.message}/> )

    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>

               { dialogsElements }

           </div>
           <div className={s.dialogsItems}>
               
               { messagesElements }

           </div>
        </div>
    );
}

export default Dialogs;