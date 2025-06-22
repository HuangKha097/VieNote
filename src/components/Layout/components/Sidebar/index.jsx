import classNames from 'classnames/bind';
import React from 'react';

import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import routes from '../../../../config/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserGroup, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={routes.home}
                    icon={<FontAwesomeIcon className={cx('icons')} icon={faHome} />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={routes.following}
                    icon={<FontAwesomeIcon className={cx('icons')} icon={faUserGroup} />}
                />
                <MenuItem
                    title="LIVE"
                    to={routes.live}
                    icon={<FontAwesomeIcon className={cx('icons')} icon={faVideoCamera} />}
                />
            </Menu>
        </aside>
    );
};

export default Sidebar;
