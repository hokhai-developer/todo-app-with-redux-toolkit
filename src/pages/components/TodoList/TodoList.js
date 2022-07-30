import classNames from 'classnames/bind';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Divider from '~/components/Divider';
import ErrorData from '~/components/ErrorData';
import { todosRemainingSelector } from '~/redux/selectors';

import TodoEdit from '../TodoEdit';
import TodoItem from './TodoItem';
import styles from './TodoList.module.scss';

const cx = classNames.bind(styles);
const TodoList = (props) => {
    const [showEdit, setShowEdit] = useState(false);
    const [todoEdit, setTodoEdit] = useState([]);
    const todoList = useSelector(todosRemainingSelector);

    const handleShowEdit = (id) => {
        if (id) {
            const newTodoEdit = todoList.find((todo) => todo.id === id);
            setTodoEdit(newTodoEdit);
        }
        setShowEdit(true);
    };
    return (
        <div className={cx('wrapper')}>
            {!showEdit ? (
                <div>
                    {todoList && todoList.length > 0 ? (
                        todoList.map((todo) => {
                            return (
                                <>
                                    <TodoItem
                                        key={todo.id}
                                        title={todo.name}
                                        level={todo.priority}
                                        completed={todo.completed}
                                        id={todo.id}
                                        handleShowEdit={handleShowEdit}
                                    />
                                    <Divider className={cx('divider')} />
                                </>
                            );
                        })
                    ) : (
                        <ErrorData />
                    )}
                </div>
            ) : (
                <TodoEdit todoEdit={todoEdit} setTodoEdit={setTodoEdit} setShowEdit={setShowEdit} />
            )}
        </div>
    );
};

export default TodoList;
