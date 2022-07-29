import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DropDownPriority.module.scss';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import PriorityLevel from '../PriorityLevel';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import filtersSlice from '~/redux/slices/filtersSlice';

const cx = classNames.bind(styles);
const DropDownItem = ({ className, priority, active }) => {
    const dispatch = useDispatch();

    const handleActive = (priority) => {
        dispatch(filtersSlice.actions.prioritiesChange(priority));
    };

    return (
        <div
            className={cx(
                'dropDown-item',
                {
                    active: active,
                },
                className,
            )}
            onClick={() => handleActive(priority)}
        >
            <PriorityLevel title={priority.title} />
            {active && <CheckOutlinedIcon style={{ color: '#50f8ef' }} />}
        </div>
    );
};

DropDownItem.propTypes = {
    classNames: PropTypes.string,
    title: PropTypes.string,
};

export default DropDownItem;
