import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FilterByStatus.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const FilterByStatus = (props) => {
    const [status, setStatus] = useState('all');
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
