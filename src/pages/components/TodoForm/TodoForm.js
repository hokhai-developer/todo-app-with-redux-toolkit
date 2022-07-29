import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TodoForm.module.scss';
import PropTypes from 'prop-types';
import LevelSelect from '~/components/LevelSelect';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import todoListSlice from '~/redux/slices/todosSlice';

const cx = classNames.bind(styles);
const TodoForm = (props) => {
    const [level, setLevel] = useState('medium');
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleChangeInputValue = (e) => {
        const value = e.target.value;
        if (value.startsWith(' ')) {
            return;
        }
        setInputValue(e.target.value);
    };

    const handleAddNewTodo = () => {
        if (inputValue.trim().length === 0) return;
        const newTodo = {
            id: uuidv4(),
            name: inputValue.trim(),
            completed: false,
            priority: level,
            search: inputValue.trim().replaceAll(' ', '').toLowerCase(),
        };
        dispatch(todoListSlice.actions.addTodo(newTodo));
        setLevel('medium');
        setInputValue('');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('todo-input')}>
                    <input
                        type="text"
                        placeholder="Create a new todo"
                        className={cx('input')}
                        value={inputValue}
                        onChange={(e) => handleChangeInputValue(e)}
                    />
                </div>
                <div className={cx('selectLevel')}>
                    <LevelSelect level={level} setLevel={setLevel} />
                </div>
                <button className={cx('btn-addTodo')} onClick={handleAddNewTodo}>
                    Add
                </button>
            </div>
        </div>
    );
};

TodoForm.propTypes = {};

export default TodoForm;
