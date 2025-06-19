import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless'; // optional
import Tippy from '@tippyjs/react'; // optional
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PropperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import { useDebounce } from '../../../../hooks';
import * as searchServices from '../../../../utils/services/searchService';

import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchInput, 500);

    const searchRef = useRef();

    useEffect(() => {
        // không kiểm tra searchInput, khi input rỗng (""), code sẽ gọi API với q=, dẫn đến lỗi 422 (Unprocessable Content) từ server.
        // !debounced? = !(debounced || '')
        if (!(debounced || '').trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
        // encodeURIComponent(searchInput) : mã hóa để tránh người dùng nhập "? &" gây lỗi URL
        //Axios using XMLHttpRequest
    }, [debounced]);

    const handleClearInputSearch = () => {
        setSearchInput('');
        setSearchResult([]);
        searchRef.current.focus();
    };

    const handleHideSearchResult = () => {
        setShowSearchResult(false);
    };
    const handleChangeInput = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchInput(searchValue);
        }
    };

    return (
        <>
            <div className={cx('search')}>
                <HeadlessTippy
                    appendTo={() => document.body}
                    visible={showSearchResult && searchInput.trim().length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-hint-box')} tabIndex="-1" {...attrs}>
                            <PropperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                {/* (searchResult || []).map(...) đảm bảo luôn có một mảng để .map(), tránh lỗi "Cannot read properties of undefined (reading 'map')". */}
                                {(searchResult || []).map((result) => (
                                    <AccountItem key={result.id} data={result} />
                                ))}
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
                        onChange={handleChangeInput}
                        onFocus={() => setShowSearchResult(true)}
                    />
                </HeadlessTippy>
                {/* Convert searchInput to Boolean , if searchInput is exist then visible clear button */}
                {!!searchInput && !loading && (
                    <button className={cx('clear')} onClick={handleClearInputSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} className="" />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <Tippy content="Search">
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
                    </button>
                </Tippy>
            </div>
        </>
    );
};

export default Search;
