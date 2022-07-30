import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import LevelSelect from '~/components/LevelSelect';
import todoListSlice from '~/redux/slices/todosSlice';
import styles from './TodoForm.module.scss';

const cx = classNames.bind(styles);
const TodoForm = ({ className }) => {
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
        <div className={cx('wrapper', className)}>
            <div className={cx('container')}>
                <div className={cx('form-left')}>
                    <textarea
                        className={cx('text')}
                        value={inputValue}
                        onChange={(e) => handleChangeInputValue(e)}
                        placeholder="Create a new todo"
                    ></textarea>
                </div>

                <div className={cx('form-right')}>
                    <LevelSelect level={level} setLevel={setLevel} className={cx('selectLevel')} />
                    <button className={cx('btn-addTodo')} onClick={handleAddNewTodo}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

TodoForm.propTypes = {
    className: PropTypes.string,
};

export default TodoForm;
