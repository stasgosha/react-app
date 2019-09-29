import React from 'react';
import s from './AddPost.module.scss';
import Btn from "../../../Common/Buttons/Btn";

const AddPost = (props) => {
	let newPostTextarea = React.createRef();

	const onAddPost = () => {
		props.onAddPost();
	}

	const onPostTextChange = () => {
		let newText = newPostTextarea.current.value;
		debugger;
		props.onPostTextChange(newText);
	}

	const onEnterPress = (e) => {
		if(e.key === 'Enter' && !e.ctrlKey){
			onAddPost();
		}
	}

    return (
        <div className={s.AddPost}>
            <div className="form">
                <div className="form-row">
                    <div className="form-field">
                        <textarea ref={newPostTextarea}
								  onChange={onPostTextChange}
								  onKeyUp={onEnterPress}
								  className="textarea"
								  placeholder={"What's new?"}
								  value={props.newPostText} />
                    </div>
                </div>
                <div className="form-row flex-right">
                    <div className="form-field">
                        <Btn text={"Send"} onClick={ onAddPost } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost;