import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DropDownPriority.module.scss';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import PriorityLevel from '../PriorityLevel';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const DropDownItem = ({ className, title }) => {
    const [active, setActive] = useState(false);

    const handleActive = () => {
        setActive(!active);
    };

    return (
        <div
            className={cx(
                'dropDown-item',
                {
                    active: active,
                },
                className,
            )}
            onClick={handleActive}
        >
            <PriorityLevel title={title} />
            {active && <CheckOutlinedIcon style={{ color: '#50f8ef' }} />}
        </div>
    );
};

DropDownItem.propTypes = {
    classNames: PropTypes.string,
    title: PropTypes.string,
};

export default DropDownItem;
