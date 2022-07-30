import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import DropDownLevel from '../DropDownLevel';
import PriorityLevel from '../PriorityLevel';
import styles from './LevelSelect.module.scss';

const cx = classNames.bind(styles);
const LevelSelect = ({ level, setLevel, className, down = false }) => {
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
            className={cx('wrapper', className)}
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
                <DropDownLevel
                    setShowDropDownLevel={setShowDropDownLevel}
                    setLevel={setLevel}
                    level={level}
                    down={down}
                />
            )}
        </div>
    );
};

LevelSelect.propTypes = {
    level: PropTypes.string,
    setLevel: PropTypes.func,
    className: PropTypes.string,
    down: PropTypes.bool,
};

export default LevelSelect;
