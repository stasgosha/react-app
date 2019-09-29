import React from 'react';
import s from './PostsList.module.scss';
import Post from "./Post/Post";
import {connect} from "react-redux";

const PostsList = (props) => {
    const showPosts = (data) => data.map(post => <Post data={post} />);

    return (
        <div className={s.PostsList}>
            { showPosts(props.postsList) }
        </div>
    )
}

let mstp = (state) => {
    return {
		postsList: state.profilePage.postsList
    }
}

const PostListContainer = connect(mstp, {})(PostsList);

export default PostListContainer;