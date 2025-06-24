import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './Login.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

const Login = ({ close }) => {
    const [action, setAction] = useState('Login');

    return (
        <div className={cx('background-blur')}>
            <div className={cx('container')}>
                <div className={cx('close-wrapper')} onClick={close}>
                    <FontAwesomeIcon className={cx('close-btn')} icon={faCircleXmark} />
                </div>
                <div className={cx('header')}>
                    <div className={cx('text')}>{action}</div>
                    <div className={cx('underline')}></div>
                </div>
                <div className={cx('inputs')}>
                    {action === 'Login' ? (
                        <div></div>
                    ) : (
                        <div className={cx('input')}>
                            <span className={cx('icon')}>{<FontAwesomeIcon icon={faUser} />}</span>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                    )}
                    <div className={cx('input')}>
                        <span className={cx('icon')}>{<FontAwesomeIcon icon={faEnvelope} />} </span>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className={cx('input')}>
                        <span className={cx('icon')}>{<FontAwesomeIcon icon={faLock} />} </span>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                </div>
                {action === 'Sign Up' ? (
                    <div></div>
                ) : (
                    <Link to={'/'} className={cx('forgot-password')}>
                        Forgot password ?
                    </Link>
                )}
                <div className={cx('submit-container')}>
                    <Button primary large onClick={() => setAction('Sign Up')} disabled={action === 'Sign Up'}>
                        Sign Up
                    </Button>
                    <Button primary large onClick={() => setAction('Login')} disabled={action === 'Login'}>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
