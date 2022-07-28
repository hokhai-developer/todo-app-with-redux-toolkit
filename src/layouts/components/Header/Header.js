import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import HeaderNavItem from '../HeaderNavItem';
import { KeyboardArrowDownOutlined, ChatOutlined, SettingsOutlined, Notifications } from '@mui/icons-material';
import { MenuOutlined } from '@mui/icons-material';
import { ClearOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { themeSelector } from '~/redux/selectors';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
const Header = (props) => {
    const [toggleNav, setToggleNav] = useState(false);
    const [theme, setTheme] = useState('');
    const themes = useSelector(themeSelector);

    useEffect(() => {
        if (!themes.currentTheme) return;
        setTheme(themes.currentTheme);
    }, [themes.currentTheme]);

    return (
        <header
            className={cx('wrapper', {
                dark: theme === 'dark',
            })}
        >
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <Image src={images.logo} alt="logo" className={cx('logo-image')} />
                    <h1 className={cx('logo-title')}>
                        DEV - <span className={cx('success')}>Success</span>
                    </h1>
                </div>

                <nav
                    className={cx('center-nav', {
                        toggleNav: !toggleNav,
                    })}
                >
                    <HeaderNavItem
                        title="demo"
                        iconRight={<KeyboardArrowDownOutlined className={cx('center-arrow-down')} />}
                        className="active"
                    />
                    <HeaderNavItem
                        title="pages"
                        iconRight={<KeyboardArrowDownOutlined className={cx('center-arrow-down')} />}
                    />
                    <HeaderNavItem
                        title="account"
                        iconRight={<KeyboardArrowDownOutlined className={cx('center-arrow-down')} />}
                    />
                    <HeaderNavItem
                        title="my"
                        iconRight={<KeyboardArrowDownOutlined className={cx('center-arrow-down')} />}
                    />
                </nav>

                <div className={cx('actions')}>
                    <button
                        className={cx('toggle-nav', 'tablet', {
                            dark: theme === 'dark',
                        })}
                        onClick={() => setToggleNav(!toggleNav)}
                    >
                        {!toggleNav ? (
                            <MenuOutlined className={cx('icon')} />
                        ) : (
                            <ClearOutlined className={cx('icon')} />
                        )}
                    </button>
                    <Link
                        to="/"
                        className={cx('action-item', {
                            dark: theme === 'dark',
                        })}
                    >
                        <ChatOutlined className={cx('icon-medium')} />
                    </Link>
                    <Link
                        to="/"
                        className={cx('action-item', {
                            dark: theme === 'dark',
                        })}
                    >
                        <SettingsOutlined className={cx('icon-medium')} />
                    </Link>
                    <button
                        to="/"
                        className={cx('action-item', {
                            dark: theme === 'dark',
                        })}
                    >
                        <Notifications className={cx('icon-medium')} />
                    </button>
                    <Image
                        src={images.userDefault}
                        alt="user-avatar"
                        className={cx('action-item', 'user-avatar', {
                            dark: theme === 'dark',
                        })}
                    />
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {};

export default Header;
