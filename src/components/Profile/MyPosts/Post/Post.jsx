import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.marpad}>
            <img src='https://img.championat.com/c/900x900/news/big/x/n/frenk-lempard-glavnyj-trener-fk-chelsi_15622361251229279030.jpg' />
            {props.message}
            <div>
                <span>like</span>
            </div>
          </div>
    );
}

export default Post;