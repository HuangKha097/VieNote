import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PropperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';

const cx = classNames.bind(styles);

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);
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
                    <div className={cx('action')}></div>
                </div>
            </header>
        </>
    );
};

export default Header;
