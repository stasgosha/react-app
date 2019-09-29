import React from 'react';
import s from './Btn.module.scss';

const Btn = ({onClick, text, size, ...props}) => {
	let addClass = '';

	switch(size){
		case 'small':
			addClass = s.small;
			break;
	}

    return (
        <button className={`${s.Btn} ${addClass}`} onClick={onClick}>{text}</button>
    )
}

export default Btn;