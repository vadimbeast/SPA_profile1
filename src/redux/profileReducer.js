export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 7},
        {id: 3, message: 'Tratata', likesCount: 12},
        {id: 4, message: 'Bla-bla-bla', likesCount: 7}   
    ],

    newPostText: 'Введите текст...'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST": 
            let newPost = state.newPostText
            return {
                ...state,
                postData: [...state.postData, { id: 5, message: newPost, likesCount: 0 }],
                newPostText: ''
            }        
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;            

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;