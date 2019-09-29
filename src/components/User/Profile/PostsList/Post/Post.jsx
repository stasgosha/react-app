import React from 'react';
import s from './Post.module.scss';
import UserAvatar from "../../../UserAvatar/UserAvatar";

const Post = (props) => {
    return (
        <div className={s.Post}>
            <div className={s.userAvatar}>
                <UserAvatar src={props.data.avatar} size={"medium"} />
            </div>
            <div className={s.postText}>
                {props.data.message}
            </div>
        </div>
    )
}

export default Post;