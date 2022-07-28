import React from 'react';
import classNames from 'classnames/bind';
import styles from './Filters.module.scss';
import PropTypes from 'prop-types';
import FilterByPriority from '../FilterByPriority';
import FilterBySearch from '../FilterBySearch';
import FilterByStatus from '../FilterByStatus';

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

Filters.propTypes = {};

export default Filters;
