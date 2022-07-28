import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import ButtonIcon from '../ButtonIcon';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Button = ({ className, iconLeft, iconRight, title, onClick, to, href, ...passProps }) => {
    let Comp;
    const props = {
        ...passProps,
        onClick,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
        props.target = '_blank';
    } else {
        Comp = 'button';
    }
    return (
        <Comp className={cx('wrapper', className)} {...props}>
            {iconLeft && <ButtonIcon className={cx('icon')}>{iconLeft}</ButtonIcon>}
            {title && <p>{title}</p>}
            {iconRight && <ButtonIcon className={cx('icon')}>{iconRight}</ButtonIcon>}
        </Comp>
    );
};

Button.propTypes = {
    className: PropTypes.string,
};

export default Button;
