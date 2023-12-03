import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.messages
        .map(m => <Message message={m.message} />)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }
debugger
    if (!props.isAuth) return <Navigate to="/login" />;

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.dialogsItems}>

                {messagesElements}

                <AddMessageFormRedux onSubmit={addNewMessage} />

            </div>


        </div>
    );
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.textarea}
                       component={Textarea} 
                       name="newMessageBody" 
                       placeholder="Enter your message"
                       validate={[required, maxLength50]} />
            </div>
            <div>
                <button className={s.buttonStyle}>Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;