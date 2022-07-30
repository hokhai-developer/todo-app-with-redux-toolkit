import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import filtersSlice from '~/redux/slices/filtersSlice';
import PriorityLevel from '../PriorityLevel';
import styles from './DropDownPriority.module.scss';

const cx = classNames.bind(styles);
const DropDownItem = ({ className, priority, active }) => {
    const dispatch = useDispatch();

    const handleActive = (priority) => {
        dispatch(filtersSlice.actions.prioritiesChange(priority));
    };

    return (
        <div
            className={cx(
                'dropDown-item',
                {
                    active: active,
                },
                className,
            )}
            onClick={() => handleActive(priority)}
        >
            <PriorityLevel title={priority.title} />
            {active && <CheckOutlinedIcon style={{ color: '#50f8ef' }} />}
        </div>
    );
};

DropDownItem.propTypes = {
    classNames: PropTypes.string,
    title: PropTypes.string,
    active: PropTypes.bool,
};

export default DropDownItem;
