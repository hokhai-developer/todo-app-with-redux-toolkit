import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FilterByStatus.module.scss';
import { useDispatch } from 'react-redux';
import filtersSlice from '~/redux/slices/filtersSlice';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const FilterByStatus = (props) => {
    const [status, setStatus] = useState('all');
    const dispatch = useDispatch();

    const handleStatusChange = (e) => {
        if (e.target.value === status) return;
        dispatch(filtersSlice.actions.statusChange(e.target.value));
    };

    return (
        <div className={cx('wrapper')}>
            <h6 className={cx('title')}>Filter By Status</h6>
            <div className={cx('input-wrapper')}>
                <div className={cx('form-group')}>
                    <input
                        type="radio"
                        id="all"
                        name="status"
                        value="all"
                        defaultChecked={status === 'all' ? true : false}
                        onChange={(e) => setStatus('all')}
                        onClick={(e) => handleStatusChange(e)}
                    />
                    <label htmlFor="all" className={cx('label')}>
                        All
                    </label>
                </div>
                <div className={cx('form-group')}>
                    <input
                        type="radio"
                        id="completed"
                        name="status"
                        value="completed"
                        defaultChecked={status === 'completed' ? true : false}
                        onChange={(e) => setStatus('completed')}
                        onClick={(e) => handleStatusChange(e)}
                    />
                    <label htmlFor="completed" className={cx('label')}>
                        Completed
                    </label>
                </div>
                <div className={cx('form-group')}>
                    <input
                        type="radio"
                        id="todo"
                        name="status"
                        value="todo"
                        defaultChecked={status === 'todo' ? true : false}
                        onChange={(e) => setStatus('todo')}
                        onClick={(e) => handleStatusChange(e)}
                    />
                    <label htmlFor="todo" className={cx('label')}>
                        To do
                    </label>
                </div>
            </div>
        </div>
    );
};

FilterByStatus.propTypes = {};

export default FilterByStatus;
