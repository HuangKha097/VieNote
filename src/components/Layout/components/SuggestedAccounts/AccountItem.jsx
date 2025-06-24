import React from 'react';
import classNames from 'classnames/bind';
<<<<<<< HEAD
import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PropperWrapper } from '../../../Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

const AccountItem = () => {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PropperWrapper>
                    <AccountPreview />
                </PropperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                // offset : vi tri
                offset={[-20, 0]}
                delay={[800, 0]}
                placement="bottom"
                interactive
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://i.pinimg.com/736x/ff/c5/93/ffc5938cbe8bf89edc872b8835fac026.jpg"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nguyenvana</strong>
                        </p>
                        <p className={cx('name')}>Nguyen van a</p>
                    </div>
                </div>
            </Tippy>
=======

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
const AccountItem = () => {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://i.pinimg.com/736x/ff/c5/93/ffc5938cbe8bf89edc872b8835fac026.jpg"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>nguyenvana</strong>
                </p>
                <p className={cx('name')}>Nguyen van a</p>
            </div>
>>>>>>> ab4c1c790ec81f48836a2381a4fc7201e13fecf0
        </div>
    );
};

export default AccountItem;
