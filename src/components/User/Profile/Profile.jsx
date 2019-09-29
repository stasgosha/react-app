import React from 'react';
import s from './Profile.module.scss';
import ProfileImage from "./ProfileImage/ProfileImage";
import UserAvatar from "../UserAvatar/UserAvatar";
import UserInfo from "../UserInfo/UserInfo";
import PostListContainer from "./PostsList/PostsList";
import AddPostContainer from "./AddPost/AddPostContainer";

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <section className={`${s.mainInfo} white-card`}>
                <div className={s.profileImageWrapper}>
                    <ProfileImage src={"//placeimg.com/1000/300/nature"} />
                </div>
                <div className={s.profileUserInfo}>
                    <div className={s.avatar}>
                        <UserAvatar src={"//placeimg.com/220/220/people"} size={"big"} />
                    </div>
                    <div className={s.content}>
                        <UserInfo/>
                    </div>
                </div>
            </section>
            <section className="white-card">
                <h3 className="tpg-h3">My posts</h3>
                <AddPostContainer />
                <PostListContainer />
            </section>
        </div>
    );
}

export default Profile;