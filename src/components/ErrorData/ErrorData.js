import React from 'react';
import classNames from 'classnames/bind';
import styles from './ErrorData.module.scss';
import Images from '~/assets/images';
import Image from '~/components/Image';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const ErrorData = (props) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Image src={Images.noData} alt="no-data-result" className={cx('image')} />
                <h4 className={cx('description')}>No data result</h4>
            </div>
        </div>
    );
};

ErrorData.propTypes = {};

export default ErrorData;
