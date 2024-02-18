import dialogsReducer, { addMessageActionCreator, deleteMessage } from "./dialogsReducer";


let state = {
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

it('new message should be added', () => {
    let action = addMessageActionCreator("All good");
    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(5);
})

it('after deleting length of messages should be decrement', () => {
    let action = deleteMessage(1);
    let newState = dialogsReducer(state, action);

    expect(newState.messages.length).toBe(3);
})