import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message";


const Dialogs = (props) => {

    //let state = props.dialogsPage;

    let dialogsElements = props.dialogs
        .map( d => <DialogItem name = {d.name} id = {d.id}/> );

    let messagesElements = props.messages
        .map( m => <Message message = {m.message} /> )

    let newMessageElement = React.createRef();
    
    let addMessage = () => { 
        props.addMessage();
    }

    let onMessageChange = () => {
        let body = newMessageElement.current.value;
        props.updateNewMessageText(body);
    }

    return (
        <div className={s.dialogs}>

           <div className={s.dialogsItems}>
                
               { dialogsElements }

           </div>
           <div className={s.dialogsItems}>
               
               { messagesElements }

               <textarea className={ s.textarea }
                         onChange={ onMessageChange }
                         ref={ newMessageElement }
                         placeholder={props.newMessageText}></textarea>
               <div>
                   <button className={ s.buttonStyle }
                           onClick={ addMessage }>Send</button>
               </div>

           </div>


        </div>
    );
}

export default Dialogs;