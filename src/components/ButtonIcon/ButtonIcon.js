import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ButtonIcon.module.scss';

const cx = classNames.bind(styles);
const ButtonIcon = ({ className, children }) => {
    return <button className={cx('wrapper', className)}>{children}</button>;
};

ButtonIcon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default ButtonIcon;
