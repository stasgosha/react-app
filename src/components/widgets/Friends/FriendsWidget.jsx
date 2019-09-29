import React from 'react';
import s from './FriendsWidget.module.scss';
import Friend from "./Friend/Friend";

const FriendsWidget = ({state, ...props}) => {
    let friends = state.map(friend => (
        <div className={s.item} key={friend.id}>
            <Friend data={friend}/>
        </div>
    ));

    return (
        <div className="white-card">
            <div className={s.FriendsWidget}>
				<h4 className="tpg-h4">Friends</h4>
                <div className={s.friendsList}>
					{friends}
                </div>
            </div>
		</div>
    );
}

export default FriendsWidget;