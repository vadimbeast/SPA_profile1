import React from "react";
import styles from "./Users.module.css";


const Users = (props) => {
debugger
    if (props.users.length === 0) {
        props.setUsers ( [
                {id: 1, photoUrl: 'https://klike.net/uploads/posts/2019-07/medium/1564314090_3.jpg', followed: true, fullName: 'Masha S.', location: {city: 'Penza', country: 'Russia'}, lastStatus: 'I like coffee'},
                {id: 2, photoUrl: 'https://scientificrussia.ru/images/b/teb-full.jpg', followed: true, fullName: 'Max D.', location: {city: 'Moscow', country: 'Russia'}, lastStatus: 'Minecraft is my life'},
                {id: 3, photoUrl: 'https://happypik.ru/wp-content/uploads/2019/09/njashnye-kotiki8.jpg', followed: false, fullName: 'John M.', location: {city: 'New York', country: 'USA'}, lastStatus: 'Wazzap..'},
                {id: 4, photoUrl: 'https://cojo.ru/wp-content/uploads/2022/12/milye-kotiki-29-1.webp', followed: false, fullName: 'Frank', location: {city: 'London', country: 'UK'}, lastStatus: 'I find football coach job!'}
            ]
        )
    }
    debugger
    return (
        <div>
            {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {
                        u.followed 
                        ? <button onClick={ () => {props.follow(u.id)}}>Follow</button> 
                        : <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
                    }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.lastStatus}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}

export default Users;