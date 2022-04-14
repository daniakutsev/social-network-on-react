import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, setUserProfileThunkCreator} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let pathname = window.location.pathname;
        let userId = pathname.substring(9)
        if (!userId) userId = 2;
        this.props.setUserProfileThunkCreator(userId);
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfileThunkCreator, setUserProfile})(ProfileContainer)