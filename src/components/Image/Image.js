import React, { useState } from 'react';
import Images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const Image = ({ src, alt = 'developer', fallBack, className }) => {
    const [newSrc, setNewSrc] = useState(src);
    const handleError = () => {
        const src = fallBack ? fallBack : Images.noImage;
        setNewSrc(src);
    };
    return <img src={newSrc} alt={alt} onError={handleError} className={cx('image', className)} />;
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
