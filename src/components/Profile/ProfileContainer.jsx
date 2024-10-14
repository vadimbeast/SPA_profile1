import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus, savePhoto } from "../../redux/profileReducer";
import { follow, unfollow } from "../../redux/usersReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) {
            profileId = this.props.authorizedUserId
            if (!profileId) {
                this.props.history.push("/login");
            }
        }

        this.props.getUserProfile(profileId);

        this.props.getStatus(profileId);
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        if (this.props.router.params.profileId !== prevProps.router.params.profileId) {
            this.refreshProfile();
        }
    }
    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props}
                    isOwner={this.props.router.params.profileId}
                    profile={this.props.profile}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
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

export function withRouter(Component) {
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
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUserProfile,
        updateStatus,
        getStatus,
        savePhoto
    }),
    withRouter
)
    (ProfileContainer)
