import React from 'react';
import s from './Conversation.module.scss';
import Message from "../Message/Message";
import Btn from "../../../Common/Buttons/Btn";

const Conversation = ({dialogsPage, ...props}) => {
	let messages = dialogsPage.messagesList.map(message => (
			<div className={s.item} key={message.time}>
				<Message data={message}/>
			</div>
		)
	);

	let newMessage = React.createRef();

	const onAddMessage = () => {
		props.addMessage(newMessage.current.value);
	}

	const onMessageTextChange = (e) => {
		let newText = newMessage.current.value;
		props.messageTextChange(newText);
	}

	const onEnterPress = (e) => {
		if(e.key === 'Enter' && !e.ctrlKey){
			onAddMessage();
		}
	}

	return (
		<div className={s.Conversation}>
			<div className={s.messagesArea}>{ messages }</div>
			<div className={s.newMessageArea}>
				<div className={s.textareaWrapper}>
					<textarea
						ref={newMessage}
						onChange={onMessageTextChange}
						onKeyUp={onEnterPress}
						value={dialogsPage.newMessageText}/>
				</div>
				<div className={s.sendButtonWrapper}>
					<Btn text={"Send"} onClick={onAddMessage}/>
				</div>
			</div>
		</div>
	);
}

export default Conversation;