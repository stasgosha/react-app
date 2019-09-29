let initialState = {
	sidebarNav: [
		{
			to: '/profile',
			icon: 'user',
			text: 'Profile'
		},
		{
			to: '/dialogs',
			icon: 'comment',
			text: 'Dialogs'
		},
		{
			to: '/news',
			icon: 'newspaper',
			text: 'News'
		},
		{
			to: '/users',
			icon: 'users',
			text: 'Users'
		}
	]
}

const sidebarReducer = (state = initialState, action) => {



	return state;
}

export default sidebarReducer;