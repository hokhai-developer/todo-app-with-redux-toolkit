import classNames from 'classnames/bind';
import Divider from '~/components/Divider';
import Filters from '~/pages/components/Filters';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import styles from './Todo.module.scss';

const cx = classNames.bind(styles);
const Todo = (props) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>TODO APP with Redux Toolkit</h2>
                <Filters />
                <Divider />
                <TodoList />
                <Divider />
                <TodoForm />
            </div>
        </div>
    );
};

Todo.propTypes = {};

export default Todo;
