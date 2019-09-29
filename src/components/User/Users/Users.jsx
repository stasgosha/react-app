import React from 'react';
import {connect} from 'react-redux';
import {setPage, setTotalCount, setUsers, toggleIsFetching} from "../../../redux/reducers/users-reducer";
import * as axios from 'axios';
import UsersInner from "./UsersInner";

class UsersAPIComponent extends React.Component {
	//{usersList, pageSize, ...props}

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
			.then(response => {
				let users = response.data;
				this.props.setTotalCount(users);
				this.props.setUsers(users);
				this.props.toggleIsFetching(false);
			});
	}

	componentDidUpdate() {

	}

	onPageChanged = (page) => {
		this.props.setPage(page);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
			.then(response => {
				let users = response.data;
				this.props.setUsers(users);
				this.props.toggleIsFetching(false);
			});
	}

	render() {
		return <UsersInner currentPage={this.props.currentPage}
						   pageSize={this.props.pageSize}
						   onPageChanged={this.onPageChanged}
						   usersList={this.props.usersList}
						   isFetching={this.props.isFetching}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		usersList: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

const Users = connect(mapStateToProps, {
	setUsers, setPage, setTotalCount, toggleIsFetching
})(UsersAPIComponent);

export default Users;