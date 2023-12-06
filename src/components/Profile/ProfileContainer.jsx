import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import { follow, unfollow } from "../../redux/usersReducer";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) { profileId = this.props.authorizedUserId }

        this.props.getUserProfile(profileId);
        
        this.props.getStatus(profileId);
        
    }
    render() { 

        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}
                                         follow = {this.props.follow}
                                         unfollow = {this.props.unfollow}
                                         status = {this.props.status}
                                         updateStatus = {this.props.updateStatus}
                                         />   
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default compose(
    connect (mapStateToProps, {
        follow,
        unfollow,
        getUserProfile,
        updateStatus,
        getStatus
    }),
    withRouter,
    //withAuthRedirect
)
    (ProfileContainer)
