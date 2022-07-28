import React from 'react';
import classNames from 'classnames/bind';
import styles from './Divider.module.scss';

const cx = classNames.bind(styles);
const Divider = (props) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('divider')}></div>
        </div>
    );
};

export default Divider;
