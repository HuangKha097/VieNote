import React from 'react';
import classNames from 'classnames/bind';

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
        </div>
    );
};

export default AccountItem;
