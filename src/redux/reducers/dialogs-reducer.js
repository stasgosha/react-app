const SEND_MESSAGE = 'SEND_MESSAGE';
const MESSAGE_TEXT_CHANGE = "MESSAGE_TEXT_CHANGE";

let initialState = {
	dialogPreviews: [
		{
			id: 1,
			avatar: "//placeimg.com/220/220/people?v=1",
			author: "John Wick",
			lastMessage: "Ipsam adipisci cumque dolore officiis quas. Dolor, adipisci!",
			isUnread: false
		},
		{
			id: 2,
			avatar: "//placeimg.com/220/220/people?v=2",
			author: "John Snow",
			lastMessage: "Velit consequatur? Sed.",
			isUnread: true
		},
		{
			id: 3,
			avatar: "//placeimg.com/220/220/people?v=3",
			author: "Matt Damon",
			lastMessage: "Quasi ut qui molestias tempore dolorum rerum consequuntur!",
			isUnread: false
		},
		{
			id: 4,
			avatar: "//placeimg.com/220/220/people?v=4",
			author: "John Wick",
			lastMessage: "Ipsam adipisci cumque dolore officiis quas. Dolor, adipisci!",
			isUnread: false
		},
		{
			id: 5,
			avatar: "//placeimg.com/220/220/people?v=5",
			author: "John Snow",
			lastMessage: "Velit consequatur? Sed.",
			isUnread: false
		},
		{
			id: 6,
			avatar: "//placeimg.com/220/220/people?v=6",
			author: "Matt Damon",
			lastMessage: "Quasi ut qui molestias tempore dolorum rerum consequuntur!",
			isUnread: false
		}
	],
	messagesList: [
		{
			type: "incoming",
			text: "Lorem ipsum dolor sit met conse, proin ultricies ac dui a gravida. Sed at eros blandit, imperdiet augue vitae",
			avatar: "//placeimg.com/220/220/people?v=1",
			time: 1567525950257
		},
		{
			type: "outgoing",
			text: "Lorem ipsum dolor sit met conse",
			avatar: "//placeimg.com/220/220/people?v=2",
			time: 1567525951257
		},
		{
			type: "incoming",
			text: "Sed at eros blandit, imperdiet augue vitae",
			avatar: "//placeimg.com/220/220/people?v=1",
			time: 1567525952257
		}
	],
	newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			if(action.messageText.trim() === '') return state;

			let newMessage = {
				type: "outgoing",
				text: action.messageText,
				avatar: "//placeimg.com/220/220/people?v=1",
				time: action.messageTime
			}

			return {
				...state,
				messagesList: [...state.messagesList, newMessage],
				newMessageText: ''
			}

		case MESSAGE_TEXT_CHANGE:
			return {
				...state,
				newMessageText: action.newMessage
			}

		default:
			return state;

	}
}

export const onAddMessageAC = message => ({
	type: SEND_MESSAGE,
	messageText: message,
	messageTime: new Date().getTime()
})

export const onMessageTextChangeAC = newMessage => ({
	type: MESSAGE_TEXT_CHANGE,
	newMessage: newMessage
})

export default dialogsReducer;