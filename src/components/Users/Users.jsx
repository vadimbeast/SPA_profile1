import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
            />
            <div>
                {
                    users.map(u => <User user={u}
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />)}
            </div>
        </div>
    );
}

export default Users;