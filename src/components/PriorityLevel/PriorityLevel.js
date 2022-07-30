import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './PriorityLevel.module.scss';

const cx = classNames.bind(styles);
const PriorityLevel = ({ className, title }) => {
    return <p className={cx('level', { [title]: title }, className)}>{title}</p>;
};

PriorityLevel.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
};

export default PriorityLevel;
