import React from 'react';
import s from './DialogPreview.module.scss';
import UserAvatar from "../../UserAvatar/UserAvatar";
import {NavLink} from "react-router-dom";

const DialogPreview = ({data: {id, isUnread, avatar, author, lastMessage},...props}) => {
    let unreadClass = '';

    if (isUnread === 'true') {
        unreadClass = s.unread;
    }

    return (
        <NavLink to={`/dialogs/${id}`} className={s.DialogPreview} activeClassName={s.active}>
            <div className={s.previewAvatar}>
                <UserAvatar src={avatar} size={"medium"}/>
            </div>
            <div className={s.previewContent}>
                <p className={`${s.previewName} tpg-body-2`}>{author}</p>
                <div className={`${s.previewMessage} ${unreadClass}  tpg-small`}>{lastMessage}</div>
            </div>
        </NavLink>
    );
}

export default DialogPreview;