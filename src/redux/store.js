import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {

        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 7},
                {id: 3, message: 'Tratata', likesCount: 12},
                {id: 4, message: 'Bla-bla-bla', likesCount: 7}   
            ],
    
            newPostText: 'Введите текст...'
    
    
        },
    
        dialogsPage: {
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
              ],  
    
            avatar: [
                {id: 1, urlImage: "https://klike.net/uploads/posts/2019-07/medium/1564314090_3.jpg"},
                {id: 2, urlImage: "https://kartinkof.club/uploads/posts/2022-05/thumbs/1653640320_1-kartinkof-club-p-veselie-kotiki-kartinki-1.jpg"},
                {id: 3, urlImage: "https://cojo.ru/wp-content/uploads/2022/12/milye-kotiki-29-1.webp"},
                {id: 4, urlImage: "https://koshka.top/uploads/posts/2021-12/1640160492_1-koshka-top-p-milenkie-kotiki-1.jpg"},
                {id: 5, urlImage: "https://scientificrussia.ru/images/b/teb-full.jpg"},
                {id: 6, urlImage: "https://happypik.ru/wp-content/uploads/2019/09/njashnye-kotiki8.jpg"}
            ],
            
            newMessageText: 'Введите новое сообщение...'
        },

        sidebar: {
            
        }
    },

    _callSubscriber() {
        console.log("State change")
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
       },


   dispatch(action) {

       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       
       this._callSubscriber(this._state);

   }

}

export default store;
window.store = store;