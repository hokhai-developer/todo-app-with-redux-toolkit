import React from 'react';
import classNames from 'classnames/bind';
import styles from './FilterByPriority.module.scss';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const FilterByPriority = (props) => {
    return (
        <div className={cx('wrapper')}>
            <h6 className={cx('title')}>Filter By Priority</h6>
            <div className={cx('top')}>
                <div className={cx('selected')}>
                    <div className={cx('selected-item')}>
                        <p className={cx('level', 'high')}>high</p>
                        <button className={cx('btn-clear')}>
                            <ClearOutlinedIcon />
                        </button>
                    </div>
                    {/* <div className={cx('selected-item')}>
                        <p className={cx('level', 'medium')}>medium</p>
                        <button className={cx('btn-clear')}>
                            <ClearOutlinedIcon />
                        </button>
                    </div> */}
                    <div className={cx('selected-item')}>
                        <p className={cx('level', 'low')}>low</p>
                        <button className={cx('btn-clear')}>
                            <ClearOutlinedIcon />
                        </button>
                    </div>
                </div>
                <div className={cx('input')}>
                    <input type="text" placeholder="Please select Priority" />
                </div>
                <button className={cx('btn-clear-selected')}>
                    <ClearOutlinedIcon />
                </button>
            </div>
        </div>
    );
};

FilterByPriority.propTypes = {};

export default FilterByPriority;
