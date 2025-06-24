import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '../../../../Button';

const cx = classNames.bind(styles);

const AccountPreview = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://i.pinimg.com/736x/ff/c5/93/ffc5938cbe8bf89edc872b8835fac026.jpg"
                    alt=""
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nguyenvana</strong>
                </p>
                <p className={cx('name')}>Nguyen van a</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>95.1M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
};

export default AccountPreview;
