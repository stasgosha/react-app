import React from 'react';
import s from './UserCard.module.scss';
import {follow, unfollow} from "../../../../redux/reducers/users-reducer";
import {connect} from 'react-redux';
import UserAvatar from "../../UserAvatar/UserAvatar";
import Btn from "../../../Common/Buttons/Btn";
import {NavLink} from "react-router-dom";

const UserCardInner = ({user, ...props}) => {
	let onFollowClick = () => {
		user.followed ? props.unfollow(user.id) : props.follow(user.id);
	}

	return <div className={s.userCard}>
		<NavLink className={s.cardAvatar} to={`/profile/${user.id}`}>
			<UserAvatar size={"large"} src={user.photos.large} isOnline={false} />
		</NavLink>
		<div className={s.cardContent}>
			<div className={`${s.userName} tpg-h4`}>{user.name}</div>
			<div className={`${s.userStatus} tpg-body-1`}>{user.status}</div>
			<div className={s.userActions}>
				<Btn text={user.followed ? 'Unfollow' : 'Follow'} onClick={onFollowClick} size={"small"}/>
			</div>
		</div>
	</div>
}

let mapStateToProps = (state) => {
	return {}
}

const UserCard = connect(mapStateToProps, {
	follow, unfollow
})(UserCardInner);

export default UserCard;