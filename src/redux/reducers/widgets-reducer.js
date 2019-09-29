let initialState = {
	friendsWidget: [
		{
			id: 1,
			avatar: "//placeimg.com/220/220/people?v=1",
			name: "John Wick",
			isOnline: false
		},
		{
			id: 2,
			avatar: "//placeimg.com/220/220/people?v=2",
			name: "John Connor",
			isOnline: true
		},
		{
			id: 3,
			avatar: "//placeimg.com/220/220/people?v=3",
			name: "John Snow",
			isOnline: true
		},
		{
			id: 4,
			avatar: "//placeimg.com/220/220/people?v=4",
			name: "Matt Damon",
			isOnline: false
		}
	]
}

const widgetsReducer = (state = initialState, action) => {

	return state;
}

export default widgetsReducer;