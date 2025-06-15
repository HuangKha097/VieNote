import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSignIn,
    faSpinner,
    faUser,
    faGear,
    faCoins,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react'; // optional
import 'tippy.js/dist/tippy.css';

import Button from '../../../Button';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PropperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Menu from '../../../Popper/Menu';

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
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

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
                        <img src={images.logo} alt="" />
                    </div>
                    <div className={cx('search')}>
                        <Tippy
                            visible={searchResult.length > 0}
                            interactive={true}
                            render={(attrs) => (
                                <div className={cx('search-hint-box')} tabIndex="-1" {...attrs}>
                                    <PropperWrapper>
                                        <h4 className={cx('search-title')}>Accounts</h4>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </PropperWrapper>
                                </div>
                            )}
                        >
                            <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
                        </Tippy>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} className="" />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <Tippy content="Search">
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
                            </button>
                        </Tippy>
                    </div>

                    <div className={cx('action')}>
                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faCloudUpload} />
                                    </button>
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
                                <img
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
