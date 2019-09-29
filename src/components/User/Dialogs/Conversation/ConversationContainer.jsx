import React from 'react';
import {onAddMessage, onMessageTextChange} from "../../../../redux/reducers/dialogs-reducer";
import Conversation from "./Conversation";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const ConversationContainer = connect(mapStateToProps, {
	onAddMessage,onMessageTextChange
})(Conversation);

export default ConversationContainer;