import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './HeaderNavItem.module.scss';
import ButtonIcon from '~/components/ButtonIcon';
import Menu from '~/components/Menu';
import { themeSelector } from '~/redux/selectors';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
const HeaderNavItem = ({ className, title, iconRight }) => {
    const [show, setShow] = useState(false);
    const [theme, setTheme] = useState('');
    const themes = useSelector(themeSelector);

    useEffect(() => {
        if (!themes.currentTheme) return;
        setTheme(themes.currentTheme);
    }, [themes.currentTheme]);
    return (
        <Menu show={show}>
            <div
                className={cx(
                    'wrapper',
                    {
                        dark: theme === 'dark',
                    },
                    className,
                )}
                onClick={() => {
                    setShow(!show);
                }}
            >
                <p className={cx('center-title')}>{title}</p>
                <ButtonIcon>{iconRight}</ButtonIcon>
            </div>
        </Menu>
    );
};

HeaderNavItem.propTypes = {};

export default HeaderNavItem;
