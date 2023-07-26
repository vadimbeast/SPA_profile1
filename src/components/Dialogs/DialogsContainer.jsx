import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {

    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
            
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;