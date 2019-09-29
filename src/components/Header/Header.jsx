import React from 'react';
import s from './Header.module.scss';
import LogoBlock from '../Common/LogoBlock/LogoBlock';

const Header = (props) => {
    return (
        <header className={s.Header}>
            <div className="container">
                <div className={s.headerInner}>
                    <div className={s.headerBlock}>
                        <LogoBlock/>
                    </div>
                    <div className={s.headerBlock}>
                        <a href="#">Login</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;