import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://i.pinimg.com/736x/dd/e0/fc/dde0fcc5632f23bbe3548cb94941882a.jpg"
                alt="Hoaa"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>Nguyen Van A</p>
                <span className={cx('username')}>nguyenvana2025</span>
            </div>
        </div>
    );
};

export default AccountItem;
