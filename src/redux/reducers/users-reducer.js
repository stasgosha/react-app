const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
	users: {
		items: [],
		totalCount: 0
	},
	pageSize: 15,
	currentPage: 1,
	isFetching: false
}

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: {
					...state.users,
					items: state.users.items.map(u => {
						if (u.id === action.userId) {
							return {
								...u,
								followed: true
							}
						}
						return u;
					})
				}
			}

		case UNFOLLOW:
			return {
				...state,
				users: {
					...state.users,
					items: state.users.items.map(u => {
						if (u.id === action.userId) {
							return {
								...u,
								followed: false
							}
						}
						return u;
					})
				}
			}

		case SET_USERS:
			return {
				...state,
				users: {
					...state.users,
					items: action.users.items
				}
			}

		case SET_TOTAL_COUNT:
			return {
				...state,
				users: {
					...state.users,
					totalCount: action.totalCount
				}
			}

		case SET_PAGE:
			return {
				...state,
				currentPage: action.page
			}

		case TOGGLE_IS_FETCHING:
			return{
				...state,
				isFetching: action.isFetching
			}

		default:
			return state;

	}
}

export const follow = id => ({
	type: FOLLOW,
	userId: id
})

export const unfollow = id => ({
	type: UNFOLLOW,
	userId: id
})

export const setUsers = users => ({
	type: SET_USERS,
	users
})

export const setTotalCount = users => ({
	type: SET_TOTAL_COUNT,
	totalCount: users.totalCount
})

export const setPage = page => ({
	type: SET_PAGE,
	page
})

export const toggleIsFetching = isFetching => ({
	type: TOGGLE_IS_FETCHING,
	isFetching
})

export default usersReducer;