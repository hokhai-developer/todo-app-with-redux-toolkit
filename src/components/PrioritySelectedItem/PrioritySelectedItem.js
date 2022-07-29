import React from 'react';
import classNames from 'classnames/bind';
import styles from './PrioritySelectedItem.module.scss';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PriorityLevel from '../PriorityLevel';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import filtersSlice from '~/redux/slices/filtersSlice';

const cx = classNames.bind(styles);
const PrioritySelectedItem = ({ title, className, id }) => {
    const dispatch = useDispatch();

    const handleDeletePriority = (e, id) => {
        e.stopPropagation();
        dispatch(filtersSlice.actions.priorityDelete(id));
    };

    return (
        <div className={cx('selected-item', className)}>
            {title && <PriorityLevel title={title} />}
            <button className={cx('btn-clear')} onClick={(e) => handleDeletePriority(e, id)}>
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
