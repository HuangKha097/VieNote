import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button';

const cx = classNames.bind(styles);
const Header = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <Button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronCircleLeft}></FontAwesomeIcon>
            </Button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};

export default Header;
