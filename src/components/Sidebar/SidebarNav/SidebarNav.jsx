import React from 'react';
import s from './SidebarNav.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom";

const SidebarNav = ({state, ...props}) => {
	let links = state.map(link => (
		<li key={link.text}>
			<NavLink to={link.to} activeClassName={s.active}>
				<span className={s.linkIcon}>
					<FontAwesomeIcon icon={link.icon}/>
				</span>
				<span className={s.linkText}>{link.text}</span>
			</NavLink>
		</li>
	));

	return (
		<div className="white-card">
			<ul className={s.SidebarNav}>
				{links}
			</ul>
		</div>
	);
}

export default SidebarNav;