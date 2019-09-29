import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Pagination.module.scss';


const Pagination = ({totalCount, pageSize, setPageCb, currentPage, ...props}) => {
	let pagesCount = Math.ceil( (totalCount*1) / (pageSize*1));
	let pagesList = [];

	for(let i = 1; i <= pagesCount; i++){
		if(i > 10 && i <= pagesCount - 10)
			continue;

		let className = `${s.paginationItem} ${i === currentPage ? s.active: ''}`;
		pagesList.push(<div key={i} className={className} onClick={()=>{setPageCb(i)}}>{i}</div>)
	}

    return (
        <div className={s.Pagination}>
			{ pagesList }
        </div>
    );
}

export default Pagination;