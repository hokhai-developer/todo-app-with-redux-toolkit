import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import filtersSlice from '~/redux/slices/filtersSlice';
import PriorityLevel from '../PriorityLevel';
import styles from './PrioritySelectedItem.module.scss';

const cx = classNames.bind(styles);
const PrioritySelectedItem = ({ title, className, id }) => {
    const dispatch = useDispatch();

    const handleDeletePriority = (e, id) => {
        e.stopPropagation();
        dispatch(filtersSlice.actions.priorityDelete(id));
    };

    return (
        <div className={cx('selected-item', className)}>
            {title && <PriorityLevel title={title} />}
            <button className={cx('btn-clear')} onClick={(e) => handleDeletePriority(e, id)}>
                <ClearOutlinedIcon />
            </button>
        </div>
    );
};

PrioritySelectedItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
};

export default PrioritySelectedItem;
