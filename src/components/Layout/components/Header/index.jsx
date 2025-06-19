import React from 'react';
import routesConfig from '../../../../config/routes';
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

import Button from '../../../Button';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import Menu from '../../../Popper/Menu';
import Image from '../../../Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const currentUser = true;
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
    //Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
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
            to: '/feedback',
        },
    ];

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <Link to={routesConfig.home}>
                            <img src={images.logo} alt="" />
                        </Link>
                    </div>

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
                                    leftIcon={<FontAwesomeIcon icon={faSignIn} className="" />}
                                >
                                    Log in
                                </Button>
                            </>
                        )}
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
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
        </>
    );
};

export default Header;
