import classNames from 'classnames/bind';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const MenuItem = ({ title, to, icon }) => {
    return (
        // NavLink duoc active thi nav.isActive = true
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
};

export default MenuItem;
