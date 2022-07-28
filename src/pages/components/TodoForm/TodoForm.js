import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoForm.module.scss';
import PropTypes from 'prop-types';
import LevelSelect from '~/components/LevelSelect';

const cx = classNames.bind(styles);
const TodoForm = (props) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('todo-input')}>
                    <input type="text" placeholder="Create a new todo" className={cx('input')} />
                </div>
                <div className={cx('selectLevel')}>
                    <LevelSelect />
                </div>
                <button className={cx('btn-addTodo')}>Add</button>
            </div>
        </div>
    );
};

TodoForm.propTypes = {};

export default TodoForm;
