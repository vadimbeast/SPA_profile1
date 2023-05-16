import React from "react";
import s from "./Message.module.css"


const Message = (props) => {
    return (
        <div className={s.messages}>
            <img src="https://kartinkof.club/uploads/posts/2022-05/thumbs/1653640320_1-kartinkof-club-p-veselie-kotiki-kartinki-1.jpg" />
            {props.message}  
           </div>
    );
}

export default Message;