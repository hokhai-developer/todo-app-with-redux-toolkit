import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TodoList.module.scss';
import PriorityLevel from '~/components/PriorityLevel';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const TodoItem = ({ title, level, className, completed }) => {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        if (completed === undefined) return;
        setComplete(!!completed);
    }, [completed]);

    const handleComplete = () => {
        //dispatch
        setComplete(!complete);
    };
    return (
        <div
            className={cx('todo-item', className, {
                completed: complete,
            })}
        >
            <input type="checkbox" checked={complete} className={cx('input-checkbox')} onChange={handleComplete} />

            <div className={cx('center')}>
                <p className={cx('title')} onClick={handleComplete}>
                    {title}
                </p>
            </div>
            <PriorityLevel title={level} />
        </div>
    );
};

TodoItem.propTypes = {
    level: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    complete: PropTypes.bool,
};

export default TodoItem;
