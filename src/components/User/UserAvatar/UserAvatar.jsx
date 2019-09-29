import React from 'react';
import s from './UserAvatar.module.scss';

// src, size, isOnline
const UserAvatar = ({size, src, isOnline, ...props}) => {
    let cmpClass = '';

    if (!!size){
        // size: tiny, small, medium, big
        cmpClass += s[size];
    }else{
		cmpClass = s.medium;
	}

	let isOnlineClass = !!isOnline ? s.isOnline : false;

    return (
        <div className={`${s.UserAvatar} ${cmpClass} ${isOnlineClass}`}>
            <img src={src || '//placeimg.com/220/220/people'} alt=""/>
        </div>
    );
}

export default UserAvatar;