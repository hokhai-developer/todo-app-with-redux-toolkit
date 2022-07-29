import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './LevelSelect.module.scss';
import PropTypes from 'prop-types';
import PriorityLevel from '../PriorityLevel';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import DropDownLevel from '../DropDownLevel';

const cx = classNames.bind(styles);
const LevelSelect = ({ level, setLevel }) => {
    const [showDropDownLevel, setShowDropDownLevel] = useState(false);

    const inSideRef = useRef();
    useEffect(() => {
        document.addEventListener('click', handleClickOutSide);
        return () => {
            document.removeEventListener('click', handleClickOutSide);
        };
    }, []);

    const handleClickOutSide = (e) => {
        const { target } = e;
        if (!inSideRef.current.contains(target)) {
            setShowDropDownLevel(false);
        }
    };

    return (
        <div
            className={cx('wrapper')}
            ref={inSideRef}
            onClick={() => {
                setShowDropDownLevel(!showDropDownLevel);
            }}
        >
            <div className={cx('labelShow')}>
                <PriorityLevel title={level} />
                <div
                    className={cx('icon')}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowDropDownLevel(!showDropDownLevel);
                    }}
                >
                    {showDropDownLevel ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}
                </div>
            </div>
            {showDropDownLevel && (
                <DropDownLevel setShowDropDownLevel={setShowDropDownLevel} setLevel={setLevel} level={level} />
            )}
        </div>
    );
};

LevelSelect.propTypes = {};

export default LevelSelect;
