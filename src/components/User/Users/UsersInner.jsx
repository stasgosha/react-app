import React from 'react';
import s from './Users.module.scss';
import UserCard from "./UserCard/UserCard";
import Pagination from "../../Common/Pagination/Pagination";
import Preloader from "../../Common/Preloader/Preloader";

const UsersInner = ({currentPage, usersList, pageSize, onPageChanged, isFetching, ...props}) => {
	return <div className={s.usersPage}>
		<div className="white-card">
			<Pagination
				currentPage={currentPage}
				totalCount={usersList.totalCount}
				pageSize={pageSize}
				setPageCb={onPageChanged}
			/>
		</div>
		<div className="white-card">
			{
				isFetching
					? <Preloader/>
					: <div className={s.usersList}>
						{usersList.items.map(user => <div key={user.id} className={s.item}>
							<UserCard user={user}/>
						</div>)}
					</div>
			}
		</div>
	</div>
}

export default UsersInner;