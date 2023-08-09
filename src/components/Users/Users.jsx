import axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";


class Users extends React.Component {
        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.totalUsersCount(response.data.totalCount);
            });
        };

        onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
        }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        };

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);

        return (
            <div>
                <div>
                     { slicedPages.map( p => {
                        return <span className={ this.props.currentPage === p && styles.selectedPage }
                                     onClick={ (e) => { this.onPageChanged(p) } }>{p}</span>
                     })}
                </div>
                {
                this.props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {
                            u.followed 
                            ? <button onClick={ () => {this.props.follow(u.id)}}>Follow</button> 
                            : <button onClick={ () => {this.props.unfollow(u.id)}}>Unfollow</button>
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
}

export default Users;