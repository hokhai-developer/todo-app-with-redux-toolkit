import React from 'react';
import classNames from 'classnames/bind';
import styles from './Todo.module.scss';
import PropTypes from 'prop-types';
import Filters from '~/pages/components/Filters';

const cx = classNames.bind(styles);
const Todo = (props) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>TODO APP with Redux Toolkit</h2>
                <Filters />
                <div>Divider</div>
                <div>TodoList </div>
            </div>
        </div>
    );
};

Todo.propTypes = {};

export default Todo;
