import {combineReducers, createStore} from "redux";
import widgetsReducer from "./reducers/widgets-reducer";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	sidebar: sidebarReducer,
	widgets: widgetsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;