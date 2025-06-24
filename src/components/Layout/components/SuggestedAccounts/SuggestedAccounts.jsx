import React from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

const SuggestedAccounts = ({ label }) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <span className={cx('more-btn')}>See more</span>
        </div>
    );
};

export default SuggestedAccounts;
