import React from 'react';
import classNames from 'classnames/bind';
import styles from './PrioritySelectedItem.module.scss';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PriorityLevel from '../PriorityLevel';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const PrioritySelectedItem = ({ title, className }) => {
    return (
        <div className={cx('selected-item', className)}>
            {title && <PriorityLevel title={title} />}
            <button className={cx('btn-clear')}>
                <ClearOutlinedIcon />
            </button>
        </div>
    );
};

PrioritySelectedItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
};

export default PrioritySelectedItem;
