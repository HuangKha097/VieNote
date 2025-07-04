import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PropperWrapper } from '../../Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};
const Menu = ({ children, items = [], hideOnClick = false, onChange = defaultFn }) => {
    const [history, setHistory] = useState([{ data: items }]);
    //Lay phan tu cuoi cua mang history
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // !!item.children convert sang Boolean => co thi isParent = true
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((pre) => pre.slice(0, pre.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PropperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title="Language" onBack={handleBack} />}
                <div className={cx('menu-body')}> {renderItems()}</div>
            </PropperWrapper>
        </div>
    );

    const handleResetToFirstMenu = () => {
        setHistory((pre) => pre.slice(0, 1));
    };

    return (
        <Tippy
            offset={[12, 8]}
            interactive
            hideOnClick={hideOnClick}
            placement="bottom-end"
            delay={[0, 800]}
            render={renderResult}
            onHide={handleResetToFirstMenu}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
