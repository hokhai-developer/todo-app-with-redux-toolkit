import React from 'react';
import classNames from 'classnames/bind';
import styles from './PrioritySelected.module.scss';
import PrioritySelectedItem from '~/components/PrioritySelectedItem';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const PrioritySelected = ({ className, prioritySelected }) => {
    return (
        <div className={cx('selected', className)}>
            {prioritySelected &&
                prioritySelected.length > 0 &&
                prioritySelected.map((priority) => {
                    return <PrioritySelectedItem key={priority.id} title={priority.title} />;
                })}
        </div>
    );
};

PrioritySelected.propTypes = {
    prioritySelected: PropTypes.array,
    className: PropTypes.string,
};

export default PrioritySelected;
