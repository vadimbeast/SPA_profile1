export const ADD_MESSAGE = 'ADD-MESSAGE';
export const DELETE_MESSAGE = 'DELETE-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Mama'},
        {id: 4, name: 'Papa'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Misha'}
      ],

    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How r u?'},
        {id: 3, message: 'I am fine'},
        {id: 4, message: 'Go to  Shishky'}
      ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: body }]
            }; 
        case "DELETE-MESSAGE":
            return {
                ...state, messages: state.messages.filter(p => p.id !== action.id)
            }      
        default: 
            return state;    
    }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})
export const deleteMessage = (id) => ({ type: DELETE_MESSAGE, id });

export default dialogsReducer;