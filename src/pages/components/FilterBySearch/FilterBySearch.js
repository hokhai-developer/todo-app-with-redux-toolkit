import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FilterBySearch.module.scss';
import PropTypes from 'prop-types';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import useDebounce from '~/hooks/useDebounce';
import { useDispatch } from 'react-redux';
import filtersSlice from '~/redux/slices/filtersSlice';

const cx = classNames.bind(styles);
const FilterBySearch = (props) => {
    const [inputValue, setInputValue] = useState('');
    const newValue = useDebounce(inputValue);
    const dispatch = useDispatch();

    const handleChangeInputValue = (e) => {
        const { value } = e.target;
        if (value.startsWith(' ')) {
            setInputValue('');
        } else {
            setInputValue(value);
        }
    };

    useEffect(() => {
        const search = newValue.replaceAll(' ', '').toLowerCase();
        dispatch(filtersSlice.actions.searchChange(search));
    }, [newValue]);

    return (
        <div className={cx('wrapper')}>
            <h6 className={cx('title')}>Search</h6>
            <div className={cx('search-group')}>
                <input
                    type="text"
                    placeholder="Search text"
                    className={cx('input')}
                    value={inputValue}
                    onChange={(e) => handleChangeInputValue(e)}
                />
                <button className={cx('btn-search')}>
                    <SearchOutlinedIcon />
                </button>
            </div>
        </div>
    );
};

FilterBySearch.propTypes = {};

export default FilterBySearch;
