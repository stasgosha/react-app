import React from 'react';
import Profile from "./Profile";
import * as axios from "axios/index";
import {connect} from 'react-redux';
import {setUserProfile} from "../../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userID = this.props.match.params.userID;
		!userID && (userID = 1130);

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
			.then(response => {
				this.props.setUserProfile(response.data);
			});
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

export default compose(withRouter, connect(mapStateToProps, {setUserProfile}))(ProfileContainer);