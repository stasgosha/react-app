import React from 'react';
import s from './LogoBlock.module.scss';
import logo from './logo.svg';
import {NavLink} from "react-router-dom";

const LogoBlock = (props) => {
    return (
        <NavLink to={"/"} className={s.LogoBlock}>
            <img src={logo} alt=""/>
            <span>SamuraiJS</span>
        </NavLink>
    );
}

export default LogoBlock;