import React from 'react';
import s from './Sidebar.module.scss';
import SidebarNav from "./SidebarNav/SidebarNav";
import FriendsWidget from "../widgets/Friends/FriendsWidget";
import {connect} from "react-redux";

const Sidebar = ({state, ...props}) => {
	return (
		<aside className={s.Sidebar}>
			<SidebarNav state={state.sidebar.sidebarNav}/>
			<FriendsWidget state={state.widgets.friendsWidget}/>
		</aside>
	);
}

let mstp = (state) => {
	return {
		state: state
	}
}

const SidebarContainer = connect(mstp, {})(Sidebar);

export default SidebarContainer;