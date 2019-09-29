import React from 'react';
import s from './UserInfo.module.scss';

const UserInfo = (props) => {
    return (
        <div className={s.UserInfo}>
            <h3 className={ `${s.userName} tpg-h3` }>Stas Goshovsky</h3>
            <ul className={s.infoList}>
                <li>Date of Birth: <strong>August 16</strong></li>
                <li>City: <strong>Kiev</strong></li>
                <li>Education: <strong>NTUU "KPI"'12</strong></li>
                <li>Web Site: <strong><a href="http://goshovsky.com" target="_blank">http://goshovsky.com</a></strong></li>
            </ul>
        </div>
    );
}

export default UserInfo;