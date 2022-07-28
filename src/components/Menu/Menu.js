import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const Menu = ({ show, children }) => {
    return (
        <div className={cx('wrapper')}>
            {show && <div>Menu item</div>}
            {children}
        </div>
    );
};

Menu.propTypes = {};

export default Menu;
