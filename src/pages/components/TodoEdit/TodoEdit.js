import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import LevelSelect from '~/components/LevelSelect';
import todoListSlice from '~/redux/slices/todosSlice';
import styles from './TodoEdit.module.scss';

const cx = classNames.bind(styles);
const TodoEdit = ({ todoEdit, setTodoEdit, setShowEdit, className }) => {
    const [level, setLevel] = useState(todoEdit.priority);
    const [textValue, setTextValue] = useState(todoEdit.name);
    const dispatch = useDispatch();
    console.log(todoEdit);
    const handleCancel = () => {
        setTodoEdit([]);
        setShowEdit(false);
    };
    const handleSave = (todoEdit) => {
        const newTodo = {
            id: todoEdit.id,
            completed: todoEdit.completed,
            name: textValue.trim(),
            priority: level,
            search: textValue.trim().replaceAll(' ', '').toLowerCase(),
        };
        dispatch(todoListSlice.actions.updateTodo(newTodo));
        setTodoEdit([]);
        setShowEdit(false);
    };
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('edit-left')}>
                <div className={cx('edit-top')}>
                    <textarea
                        className={cx('text-area')}
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                    ></textarea>
                </div>
                <div className={cx('edit-bottom')}>
                    <button className={cx('btn', 'btn-save')} onClick={() => handleSave(todoEdit)}>
                        Save
                    </button>
                    <button className={cx('btn', 'btn-cancel')} onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
            <div className={cx('edit-right')}>
                <LevelSelect className={cx('drop-down')} level={level} setLevel={setLevel} down={true} />
            </div>
        </div>
    );
};

TodoEdit.propTypes = {
    todoEdit: PropTypes.object,
    setTodoEdit: PropTypes.func,
    setShowEdit: PropTypes.func,
    className: PropTypes.string,
};

export default TodoEdit;
