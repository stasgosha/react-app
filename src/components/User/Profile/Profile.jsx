import React from 'react';
import s from './Profile.module.scss';
import ProfileImage from "./ProfileImage/ProfileImage";
import UserAvatar from "../UserAvatar/UserAvatar";
import UserInfo from "../UserInfo/UserInfo";
import PostListContainer from "./PostsList/PostsList";
import AddPostContainer from "./AddPost/AddPostContainer";
import Preloader from "../../Common/Preloader/Preloader";

const Profile = ({profile, ...props}) => {
    if(!profile) return <Preloader/>
    return (
		<div className={s.Profile}>
            <section className={`${s.mainInfo} white-card`}>
                <div className={s.profileImageWrapper}>
                    <ProfileImage src={"//placeimg.com/1000/300/nature"} />
                </div>
                <div className={s.profileUserInfo}>
                    <div className={s.avatar}>
                        <UserAvatar src={profile.photos.large } size={"big"} />
                    </div>
                    <div className={s.content}>
                        <UserInfo profile={profile} />
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