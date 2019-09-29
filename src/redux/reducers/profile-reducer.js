const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
	postsList: [
		{
			avatar: "//placeimg.com/100/100/people?v=1",
			message: "Doloremque porro earum obcaecati est maiores repellendus dolores nam asperiores."
		},
		{
			avatar: "//placeimg.com/100/100/people?v=2",
			message: "Numquam provident praesentium optio quisquam reprehenderit ipsum expedita et magnam."
		},
		{
			avatar: "//placeimg.com/100/100/people?v=3",
			message: "Eveniet non quaerat voluptas debitis neque itaque adipisci sunt necessitatibus."
		},
		{
			avatar: "//placeimg.com/100/100/people?v=4",
			message: "Maiores rerum odit nostrum doloribus. Voluptatibus ducimus adipisci, quibusdam iure!"
		}
	],
	newPostText: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			if(state.newPostText.trim() === '') return state;

			let newPost = {
				avatar: action.avatar,
				message: state.newPostText
			}

			return {
				...state,
				postsList: [newPost, ...state.postsList],
				newPostText: ''
			}

		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}

		default:
			return state;
	}
}

export const addPostAC = () => ({
	type: ADD_POST,
	avatar: '//placeimg.com/100/100/people?v=1'
})

export const onPostTextChangeAC = newText => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: newText
})

export default profileReducer;