import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoList.module.scss';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const TodoList = (props) => {
    return (
        <div className={cx('wrapper')}>
            <TodoItem title="Learn Yoga" level="low" completed />
            <TodoItem title="Learn Redux" level="medium" />
            <TodoItem title="Learn JavaScript" level="high" />
            <TodoItem title="Learn Redux" level="medium" />
            <TodoItem title="Learn JavaScript" level="high" />
            <TodoItem title="Learn JavaScript" level="high" />
            <TodoItem title="Learn Redux" level="medium" />
            <TodoItem title="Learn JavaScript" level="high" />
        </div>
    );
};

TodoList.propTypes = {};

export default TodoList;
