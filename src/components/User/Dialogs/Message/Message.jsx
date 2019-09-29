import React from 'react';
import s from './Message.module.scss';
import UserAvatar from "../../UserAvatar/UserAvatar";

const Message = ({data: {type, time, avatar, text},...props}) => {
    let messageType = '';
    if (!!type) {
        // type: incoming, outgoing
        messageType = s[type];
    }

    let mt = new Date(time);

	mt = (mt.getHours() % 12 || 12) + ":" + (mt.getMinutes() < 10 ? '0':'') + mt.getMinutes() + " " + (mt.getHours() < 12 ? 'AM' : 'PM');

    return (
        <div className={`${s.Message} ${messageType}`}>
            <div className={s.messageAvatar}>
                <UserAvatar src={avatar} size={'tiny'}/>
            </div>
            <div className={s.messageContent}>
                <div className={s.messageText}>{text}</div>
                <div className={s.messageTime}>{mt}</div>
            </div>
        </div>
    );
}

export default Message;