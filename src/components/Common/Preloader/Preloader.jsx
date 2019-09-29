import React from 'react';
import s from './Preloader.module.scss';

const Preloader = () => {
	return <div className={s.Preloader}>
		<div className={s.dot}></div>
		<div className={s.dot}></div>
		<div className={s.dot}></div>
	</div>
}

export default Preloader;