import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";
 

let state = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 7},
        {id: 3, message: 'Tratata', likesCount: 12},
        {id: 4, message: 'Bla-bla-bla', likesCount: 7}   
    ]
}

it('new post should be added', () => {
    let action = addPostActionCreator("All good");
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(5) ;
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator("All good");
    let newState = profileReducer(state, action);

    expect(newState.postData[4].message).toBe("All good") ;
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(3)
});