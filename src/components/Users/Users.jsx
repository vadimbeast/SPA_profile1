import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props } ) => {
    return (  
        <div>

            <Paginator currentPage={currentPage}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       onPageChanged={onPageChanged}
            />

            {
            props.users.map( u => <div key={u.id}>
                 <span>
                     <div>
                        <NavLink to={'./../profile/' + u.id}> 
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                     <div>
                        {
                        u.followed 
                            ? <button disabled={ props.followingInProgress.some(id => id === u.id) } onClick={ () => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> 
                            : <button disabled={ props.followingInProgress.some(id => id === u.id) } onClick={ () => {
                                props.follow(u.id);
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.lastStatus}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}

export default Users;