import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DropDownLevel.module.scss';
import PropTypes from 'prop-types';
import PriorityLevel from '../PriorityLevel';

const level = [
    { title: 'high', value: 'high' },
    { title: 'medium', value: 'medium' },
    { title: 'low', value: 'low' },
];
const cx = classNames.bind(styles);
const DropDownLevel = ({ className, setShowDropDownLevel, setPriorityLevel, priorityLevel }) => {
    const [leverList, settLeverList] = useState(level);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('level-list', className)}>
                {leverList &&
                    leverList.length > 0 &&
                    leverList.map((level, index) => {
                        return (
                            <div
                                key={index}
                                className={cx('level-item', {
                                    active: priorityLevel === level.value,
                                })}
                                onClick={() => {
                                    setShowDropDownLevel(false);
                                    setPriorityLevel(level.value);
                                }}
                            >
                                <PriorityLevel title={level.title} className={cx('content')} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

DropDownLevel.propTypes = {};

export default DropDownLevel;
