import classNames from 'classnames/bind';
import FilterByPriority from '../FilterByPriority';
import FilterBySearch from '../FilterBySearch';
import FilterByStatus from '../FilterByStatus';
import styles from './Filters.module.scss';

const cx = classNames.bind(styles);
const Filters = (props) => {
    return (
        <div className={cx('wrapper')}>
            <FilterBySearch />
            <FilterByStatus />
            <FilterByPriority />
        </div>
    );
};

export default Filters;
