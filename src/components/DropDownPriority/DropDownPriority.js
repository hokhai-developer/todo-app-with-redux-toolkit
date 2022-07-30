import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { filterPrioritiesSelector } from '~/redux/selectors';
import ErrorData from '../ErrorData';
import DropDownItem from './DropDownItem';
import styles from './DropDownPriority.module.scss';

const cx = classNames.bind(styles);
const DropDownPriority = ({ className, prioritiesList }) => {
    const priorities = useSelector(filterPrioritiesSelector);

    return (
        <div className={cx('dropDown', className)}>
            <div className={cx('dropDown-list')}>
                {prioritiesList && prioritiesList.length > 0 ? (
                    prioritiesList.map((priority) => {
                        let isActive;
                        if (priorities.length === 0) {
                            isActive = false;
                        } else {
                            priorities.forEach((element) => {
                                if (element.id === priority.id) {
                                    isActive = true;
                                }
                            });
                        }
                        return <DropDownItem key={priority.id} priority={priority} active={isActive} />;
                    })
                ) : (
                    <ErrorData />
                )}
            </div>
        </div>
    );
};

DropDownPriority.propTypes = {
    className: PropTypes.string,
    prioritiesList: PropTypes.array,
};

export default DropDownPriority;
