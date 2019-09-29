import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import widgetsReducer from "./reducers/widgets-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

let store = {
	_state: {
		profilePage: {
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
		},
		dialogsPage: {
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
		},
		sidebar: {
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
				}
			]
		},
		widgets: {
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
	},

	_callSubscriber() {

	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	getState() {
		return this._state;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._state.widgets = widgetsReducer(this._state.widgets, action);

		this._callSubscriber(this._state);
	}

}

export default store;