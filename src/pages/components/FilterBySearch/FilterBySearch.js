import React from 'react';
import classNames from 'classnames/bind';
import styles from './FilterBySearch.module.scss';
import PropTypes from 'prop-types';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const cx = classNames.bind(styles);
const FilterBySearch = (props) => {
    return (
        <div className={cx('wrapper')}>
            <h6 className={cx('title')}>Search</h6>
            <div className={cx('search-group')}>
                <input type="text" placeholder="Search text" className={cx('input')} />
                <button className={cx('btn-search')}>
                    <SearchOutlinedIcon />
                </button>
            </div>
        </div>
    );
};

FilterBySearch.propTypes = {};

export default FilterBySearch;
