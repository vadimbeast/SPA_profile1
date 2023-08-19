import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
         <img src='https://banner2.cleanpng.com/20180711/vg/kisspng-201617-premier-league-english-football-league-l-lion-emoji-5b460f06eeac18.5589169115313180229776.jpg'/>
         <div className={ s.loginBlock }>
            { props.isAuth ? props.login
            : <button>
                <NavLink to={'/login'}>Sign up</NavLink>
              </button> 
            }
         </div>
      </header>
    );
}

export default Header;