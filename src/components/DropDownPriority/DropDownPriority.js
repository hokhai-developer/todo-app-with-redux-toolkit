import React from 'react';
import classNames from 'classnames/bind';
import styles from './DropDownPriority.module.scss';
import DropDownItem from './DropDownItem';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const DropDownPriority = ({ className }) => {
    return (
        <div className={cx('dropDown', className)}>
            <div className={cx('dropDown-list')}>
                <DropDownItem title="high" />
                <DropDownItem title="medium" />
                <DropDownItem title="low" />
            </div>
        </div>
    );
};

DropDownPriority.propTypes = {
    className: PropTypes.string,
};

export default DropDownPriority;
