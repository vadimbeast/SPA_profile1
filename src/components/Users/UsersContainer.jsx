import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, togleIsFetching } from "../../redux/usersReducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.togleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.togleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.totalUsersCount(response.data.totalCount);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.togleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.togleIsFetching(false)
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


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togleIsFetching
    })(UsersContainer);