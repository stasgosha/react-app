import React from 'react';
import {connect} from "react-redux";
import AddPost from "./AddPost";
import {addPostAC, onPostTextChangeAC} from "../../../../redux/reducers/profile-reducer";

let mapStateToProps = state => {
	return {
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (newText) => {
			dispatch(onPostTextChangeAC(newText));
		},
		onAddPost: () => {
			dispatch(addPostAC());
		}
	}
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);


export default AddPostContainer;