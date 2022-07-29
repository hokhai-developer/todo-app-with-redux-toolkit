import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TodoList.module.scss';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { todoListSelector } from '~/redux/selectors';
import ErrorData from '~/components/ErrorData';
import { todosRemainingSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);
const TodoList = (props) => {
    const todoList = useSelector(todosRemainingSelector);
    return (
        <div className={cx('wrapper')}>
            {todoList && todoList.length > 0 ? (
                todoList.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            title={todo.name}
                            level={todo.priority}
                            completed={todo.completed}
                            id={todo.id}
                        />
                    );
                })
            ) : (
                <ErrorData />
            )}
        </div>
    );
};

TodoList.propTypes = {};

export default TodoList;
