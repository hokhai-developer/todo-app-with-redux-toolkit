import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Images from '~/assets/images';
import Image from '~/components/Image';
import styles from './ErrorData.module.scss';

const cx = classNames.bind(styles);
const ErrorData = ({ className }) => {
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('container')}>
                <Image src={Images.noData} alt="no-data-result" className={cx('image')} />
                <h4 className={cx('description')}>No data result</h4>
            </div>
        </div>
    );
};

ErrorData.propTypes = {
    className: PropTypes.string,
};

export default ErrorData;
