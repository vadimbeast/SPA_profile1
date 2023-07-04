export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.body;
            return state;
        case "ADD-MESSAGE":
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 5, message: body});
            return state;   
        default: 
            return state;    
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})


export default dialogsReducer;