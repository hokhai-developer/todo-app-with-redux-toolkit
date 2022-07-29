import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TodoList.module.scss';
import PriorityLevel from '~/components/PriorityLevel';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import todoListSlice from '~/redux/slices/todosSlice';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const cx = classNames.bind(styles);
const TodoItem = ({ title, level, className, completed, id }) => {
    const [complete, setComplete] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (completed === undefined) return;
        setComplete(!!completed);
    }, [completed]);

    const handleComplete = (id) => {
        //dispatch
        dispatch(todoListSlice.actions.toggleTodoStatus(id));
        setComplete(!complete);
    };

    const handleDeleteTodo = (id) => {
        dispatch(todoListSlice.actions.deleteTodo(id));
    };

    return (
        <div
            className={cx('todo-item', className, {
                completed: complete,
            })}
        >
            <input
                type="checkbox"
                checked={complete}
                className={cx('input-checkbox')}
                onChange={() => handleComplete(id)}
            />

            <div className={cx('center')}>
                <p className={cx('title')} onClick={() => handleComplete(id)}>
                    {title}
                </p>
            </div>
            <div className={cx('right')}>
                <PriorityLevel title={level} className={cx('translateY')} />
                <button onClick={() => handleDeleteTodo(id)} className={cx('btn-delete')}>
                    <ClearOutlinedIcon />
                </button>
            </div>
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
