import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import DropDownPriority from '~/components/DropDownPriority';
import PrioritySelected from '~/components/PrioritySelected';
import styles from './FilterByPriority.module.scss';

const prioritiesList = [
    {
        id: 1,
        value: 'high',
        title: 'high',
        search: 'high',
    },
    {
        id: 2,
        value: 'medium',
        title: 'medium',
        search: 'medium',
    },
    {
        id: 3,
        value: 'low',
        title: 'low',
        search: 'low',
    },
];

const cx = classNames.bind(styles);
const FilterByPriority = (props) => {
    const [prioritiesDropdown, setPrioritiesDropdown] = useState(prioritiesList);
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
            setShowDropDown(false);
        }
    };

    const handleClearInputValue = (e) => {
        e.stopPropagation();
        setInputValue('');
        setPrioritiesDropdown(prioritiesList);
        inputRef.current.focus();
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        if (value.startsWith(' ')) {
            setPrioritiesDropdown(prioritiesList);
            return;
        }
        setInputValue(value);
        const newValue = value.replaceAll(' ', '').toLowerCase();
        const newPrioritiesDropdown = prioritiesList.filter((priority) => priority.search.includes(newValue));
        if (newPrioritiesDropdown.length > 0) {
            setPrioritiesDropdown(newPrioritiesDropdown);
        } else {
            setPrioritiesDropdown([]);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h6 className={cx('title')}>Filter By Priority</h6>
            <div className={cx('top')} ref={inSideRef}>
                {<PrioritySelected />}
                <div className={cx('input')}>
                    <input
                        type="text"
                        ref={inputRef}
                        placeholder="Please select Priority"
                        onFocus={() => setShowDropDown(true)}
                        value={inputValue}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                {inputValue.length > 0 && (
                    <button className={cx('btn-clear-input')} onClick={handleClearInputValue}>
                        <ClearOutlinedIcon />
                    </button>
                )}
                {showDropdown && <DropDownPriority prioritiesList={prioritiesDropdown} />}
            </div>
        </div>
    );
};

export default FilterByPriority;
