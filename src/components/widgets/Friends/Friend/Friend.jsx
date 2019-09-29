import React from 'react';
import s from './Friend.module.scss';
import UserAvatar from "../../../User/UserAvatar/UserAvatar";

const Friend = ({data: {avatar, isOnline, name}, ...props}) => {
    return (
        <div className={s.Friend}>
			<div className={s.avatar}>
                <UserAvatar src={avatar} isOnline={isOnline}/>
            </div>
			<div className={s.name}>{name}</div>
        </div>
    );
}

export default Friend;