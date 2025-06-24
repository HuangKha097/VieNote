import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faUser,
    faGear,
    faCoins,
    faRightFromBracket,
    faCloudUpload,
    faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import routesConfig from '../../../../config/routes';
import Button from '../../../Button';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import Menu from '../../../Popper/Menu';
import Image from '../../../Image';
import Search from '../Search';
import Login from '../../../Popper/Login';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Vietnamese' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const Header = () => {
    const [login, setLogin] = useState(false);
    const [currentUser, setCurrentUser] = useState(true);

    //Handle logic
    const handlePopupLogin = () => {
        setLogin(true);
    };

    const handleMenuChange = (menuItem) => {
        if (menuItem.title === 'Log out') {
            setCurrentUser(false);
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@nguyenvana',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/',
        },
    ];

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <btn className={cx('logo-btn')}>
                        <Link to={routesConfig.home}>
                            <img src={images.logo} alt="" />
                        </Link>
                    </btn>

                    {/*Import Search Logic Here */}
                    <Search />

                    <div className={cx('action')}>
                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                    <Link to="/upload">
                                        <button className={cx('action-btn')}>
                                            <FontAwesomeIcon icon={faCloudUpload} />
                                        </button>
                                    </Link>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button
                                    text={false}
                                    primary
                                    to="/"
                                    leftIcon={<FontAwesomeIcon icon={faSignIn} className="" />}
                                    onClick={handlePopupLogin}
                                >
                                    Log in
                                </Button>
                            </>
                        )}
                        <Menu
                            //  render lại component Menu (bằng cách thay đổi key của Menu)
                            key={currentUser ? 'user' : 'guest'}
                            items={currentUser ? userMenu : MENU_ITEMS}
                            onChange={handleMenuChange}
                        >
                            {currentUser ? (
                                <Image
                                    src="https://i.pinimg.com/736x/96/c1/46/96c146d85768edf567549a2b093fb42c.jpg"
                                    className={cx('user-avatar')}
                                    alt="Nguyen van a"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </header>
            {login && <Login close={() => setLogin(false)} />}
        </>
    );
};

export default Header;
