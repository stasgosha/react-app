import React from 'react';
import s from './UserCard.module.scss';
import {followAC, unfollowAC} from "../../../../redux/reducers/users-reducer";
import {connect} from 'react-redux';
import UserAvatar from "../../UserAvatar/UserAvatar";
import Btn from "../../../Common/Buttons/Btn";

const UserCardInner = ({user, ...props}) => {
	let onFollowClick = () => {
		user.followed ? props.unfollow(user.id) : props.follow(user.id);
	}

	return <div className={s.userCard}>
		<div className={s.cardAvatar}>
			<UserAvatar size={"large"} src={user.photos.large} isOnline={false} />
		</div>
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

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (id) => { dispatch(followAC(id)) },
		unfollow: (id) => { dispatch(unfollowAC(id)) }
	}
}

const UserCard = connect(mapStateToProps, mapDispatchToProps)(UserCardInner);

export default UserCard;