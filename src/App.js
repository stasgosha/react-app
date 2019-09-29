import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SidebarContainer from "./components/Sidebar/Sidebar";
import Profile from "./components/User/Profile/Profile";
import {Route} from "react-router-dom";

import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser, faNewspaper, faComment, faUsers} from '@fortawesome/free-solid-svg-icons';
import DialogsContainer from "./components/User/Dialogs/Dialogs";
import Users from "./components/User/Users/Users";

library.add(faUser, faNewspaper, faComment, faUsers);

const App = (props) => {

	return (
		<div className="app-wrapper">
			<div className="app-header">
				<Header/>
			</div>
			<div className="container">
				<div className="app-content">
					<div className="item sidebar">
						<SidebarContainer/>
					</div>
					<div className="item main-content">
						<Route exact path={"/"} render={() => (
							<Profile />
						)}/>
						<Route exact path={"/profile"} render={() => (
							<Profile />
						)}/>
						<Route path={"/dialogs"} render={() => (
							<DialogsContainer />
						)}/>
						<Route path={"/users"} render={() => (
							<Users />
						)}/>
					</div>
				</div>
			</div>
			<div className="app-footer"></div>
		</div>
	);
}

export default App;