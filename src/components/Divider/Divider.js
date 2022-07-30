import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Divider.module.scss';

const cx = classNames.bind(styles);
const Divider = ({ className }) => {
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('divider')}></div>
        </div>
    );
};
Divider.propTypes = {
    className: PropTypes.string,
};

export default Divider;
