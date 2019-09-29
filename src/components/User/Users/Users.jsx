import React from 'react';
import {connect} from 'react-redux';
import {setPageAC, setTotalCountAC, setUsersAC} from "../../../redux/reducers/users-reducer";
import * as axios from 'axios';
import UsersInner from "./UsersInner";

class UsersAPIComponent extends React.Component{
	//{usersList, pageSize, ...props}

	componentDidMount(){
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
			.then(response => {
				let users = response.data;
				this.props.setTotalCount(users);
				this.props.setUsers(users);
			});
	}

	componentDidUpdate(){

	}

	onPageChanged = (page) => {
		this.props.setPage(page);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
			.then(response => {
				let users = response.data;
				this.props.setUsers(users);
			});
	}

    render (){
        return <UsersInner currentPage={this.props.currentPage}
						   pageSize={this.props.pageSize}
						   onPageChanged={this.onPageChanged}
						   usersList={this.props.usersList}/>
    }
}

let mapStateToProps = (state) => {
	return {
		usersList: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setPage: (page) => {
			dispatch(setPageAC(page));
		},
		setTotalCount: (totalCount) => {
			dispatch(setTotalCountAC(totalCount));
		}
	}
}

const Users = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default Users;