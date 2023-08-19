import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { follow, unfollow } from "../../redux/usersReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) { profileId = 2 }
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
        .then(response => {
            this.props.setUserProfile(response.data);
        });
    }
    render() {
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
    setUserProfile,
    follow,
    unfollow
}) (withRouter(ProfileContainer));