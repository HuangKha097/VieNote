import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless'; // optional
import Tippy from '@tippyjs/react'; // optional
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PropperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';

import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [showSearchResult, setShowSearchResult] = useState(true);

    const searchRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleClearInputSearch = () => {
        setSearchInput('');
        setSearchResult([]);
        searchRef.current.focus();
    };

    const handleHideSearchResult = () => {
        setShowSearchResult(false);
    };
    return (
        <>
            <div className={cx('search')}>
                <HeadlessTippy
                    visible={showSearchResult && searchInput.trim().length > 0}
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
                    onClickOutside={handleHideSearchResult}
                >
                    <input
                        ref={searchRef}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onFocus={() => setShowSearchResult(true)}
                    />
                </HeadlessTippy>
                {/* Convert searchInput to Boolean , if searchInput is exist then visible clear button */}
                {!!searchInput && (
                    <button className={cx('clear')} onClick={handleClearInputSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} className="" />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <Tippy content="Search">
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
                    </button>
                </Tippy>
            </div>
        </>
    );
};

export default Search;
