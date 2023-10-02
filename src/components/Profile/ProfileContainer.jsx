import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { follow, unfollow } from "../../redux/usersReducer";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) { profileId = 29713 }

        this.props.getUserProfile(profileId);
    }
    render() {

        if (!this.props.isAuth) return <Navigate to="/login" />

        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}
                                         follow = {this.props.follow}
                                         unfollow = {this.props.unfollow}
                                         />   
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
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

export default connect (mapStateToProps, {
    follow,
    unfollow,
    getUserProfile
}) (withRouter(ProfileContainer));