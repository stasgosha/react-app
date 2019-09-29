import React from 'react';
import s from './Dialogs.module.scss';

import DialogPreview from "./DialogPreview/DialogPreview";
import ConversationContainer from "./Conversation/ConversationContainer";
import {addPostAC, onPostTextChangeAC} from "../../../redux/reducers/profile-reducer";
import {connect} from "react-redux";

const Dialogs = ({dialogPreviews, ...props}) => {

	let previewsList = dialogPreviews.map(previewItem => (
			<div className={s.item} key={previewItem.id}>
				<DialogPreview data={previewItem}/>
			</div>
		)
	);

	return (
		<div className={`${s.Dialogs} white-card`}>
			<div className={s.dialogsSidebar}>
				<div className={s.sidebarHeader}>
					<h3 className="tpg-h4">Messages</h3>
				</div>
				<div className={s.dialogsList}>
					{ previewsList }
				</div>
			</div>
			<div className={s.dialogsContent}>
				<div className={s.contentHeader}>
					<p className="tpg-body-2">John Wick</p>
				</div>
				<div className={s.dialogsConversation}>
					<ConversationContainer/>
				</div>
			</div>
		</div>
	);
}

let mstp = state => {
	return {
		dialogPreviews: state.dialogsPage.dialogPreviews
	}
}

let mdtp = dispatch => {
	return {
		updateNewPostText: (newText) => {
			dispatch(onPostTextChangeAC(newText));
		},
		onAddPost: () => {
			dispatch(addPostAC());
		}
	}
}

const DialogsContainer = connect(mstp, mdtp)(Dialogs);

export default DialogsContainer;