import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    primary = false,
    outline = false,
    text = true,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    leftIcon,
    rightIcon,
    className,
    onClick,

    ...passProps
}) => {
    let Comp = 'button';
    const props = { onClick, ...passProps };

    //Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((keys) => {
            if (keys.startsWith('on') && typeof props[keys] === 'function') {
                delete props.onClick;
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });
    return (
        <div>
            <Comp className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        </div>
    );
};

export default Button;
