import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC, togleIsFetchingAC } from "../../redux/usersReducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import p from "./Users.module.css";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.togleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.togleIsFetchingAC(false);
            this.props.setUsers(response.data.items);
            this.props.totalUsersCount(response.data.totalCount);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.togleIsFetchingAC(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.togleIsFetchingAC(false)
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

        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users totalUsersCount = {this.props.totalUsersCount}
                  pageSize = {this.props.pageSize} 
                  currentPage = {this.props.currentPage}
                  onPageChanged = {this.onPageChanged}
                  users = {this.props.users}
                  follow = {this.props.follow}
                  unfollow = {this.props.unfollow}
                  />
        </>         
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCountAC: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        togleIsFetchingAC: (isFetching) => {
            dispatch(togleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);