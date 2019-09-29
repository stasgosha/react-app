import React from 'react';
import {connect} from "react-redux";
import AddPost from "./AddPost";
import {onAddPost, onPostTextChange} from "../../../../redux/reducers/profile-reducer";

let mapStateToProps = state => {
	return {
		newPostText: state.profilePage.newPostText
	}
}

const AddPostContainer = connect(mapStateToProps, {
	onPostTextChange,
	onAddPost
})(AddPost);


export default AddPostContainer;