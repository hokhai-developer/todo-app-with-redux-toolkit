import React, { useEffect, useRef, useState, useId } from 'react';
import classNames from 'classnames/bind';
import styles from './FilterByPriority.module.scss';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import DropDownPriority from '~/components/DropDownPriority';
import PrioritySelected from '~/components/PrioritySelected';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const FilterByPriority = (props) => {
    const [prioritySelected, setPrioritySelected] = useState([{ title: 'high', id: useId() }]);
    const [showDropdown, setShowDropDown] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const inSideRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        document.addEventListener('click', handleClickOutSide);
        return () => {
            document.removeEventListener('click', handleClickOutSide);
        };
    }, []);

    const handleClickOutSide = (e) => {
        const { target } = e;
        if (!inSideRef.current.contains(target)) {
            setInputValue('');
            setShowDropDown(false);
        }
    };

    const handleClearInputValue = (e) => {
        e.stopPropagation();
        setInputValue('');
        inputRef.current.focus();
    };

    return (
        <div className={cx('wrapper')}>
            <h6 className={cx('title')}>Filter By Priority</h6>
            <div className={cx('top')} ref={inSideRef}>
                {prioritySelected && prioritySelected.length > 0 && (
                    <PrioritySelected prioritySelected={prioritySelected} />
                )}
                <div className={cx('input')}>
                    <input
                        type="text"
                        ref={inputRef}
                        placeholder="Please select Priority"
                        onFocus={() => setShowDropDown(true)}
                        value={inputValue}
                        onChange={(e) => {
                            if (e.target.value.startsWith(' ')) {
                                return;
                            }
                            setInputValue(e.target.value);
                        }}
                    />
                </div>
                {inputValue.length > 0 && (
                    <button className={cx('btn-clear-input')} onClick={handleClearInputValue}>
                        <ClearOutlinedIcon />
                    </button>
                )}
                {showDropdown && <DropDownPriority />}
            </div>
        </div>
    );
};

FilterByPriority.propTypes = {};

export default FilterByPriority;
