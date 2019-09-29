import React from 'react';
import {onAddMessageAC, onMessageTextChangeAC} from "../../../../redux/reducers/dialogs-reducer";
import Conversation from "./Conversation";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: messageText => dispatch(onAddMessageAC(messageText)),
		messageTextChange: newText => dispatch(onMessageTextChangeAC(newText))
	}
}

const ConversationContainer = connect(mapStateToProps, mapDispatchToProps)(Conversation);

export default ConversationContainer;