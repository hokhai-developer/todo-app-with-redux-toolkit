import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import PrioritySelectedItem from '~/components/PrioritySelectedItem';
import { filterPrioritiesSelector } from '~/redux/selectors';
import styles from './PrioritySelected.module.scss';

const cx = classNames.bind(styles);
const PrioritySelected = ({ className }) => {
    const priorities = useSelector(filterPrioritiesSelector);
    return (
        <div className={cx('selected', className)}>
            {priorities &&
                priorities.length > 0 &&
                priorities.map((priority) => {
                    return <PrioritySelectedItem key={priority.id} title={priority.title} id={priority.id} />;
                })}
        </div>
    );
};

PrioritySelected.propTypes = {
    className: PropTypes.string,
};

export default PrioritySelected;
