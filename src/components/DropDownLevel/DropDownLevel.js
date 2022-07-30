import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import PriorityLevel from '../PriorityLevel';
import styles from './DropDownLevel.module.scss';

const levelArray = [
    { title: 'high', value: 'high' },
    { title: 'medium', value: 'medium' },
    { title: 'low', value: 'low' },
];
const cx = classNames.bind(styles);
const DropDownLevel = ({ className, setShowDropDownLevel, level, setLevel, down }) => {
    const leverList = levelArray;

    return (
        <div
            className={cx('wrapper', {
                down: down,
            })}
        >
            <div className={cx('level-list', className)}>
                {leverList &&
                    leverList.length > 0 &&
                    leverList.map((levelItem, index) => {
                        return (
                            <div
                                key={index}
                                className={cx('level-item', {
                                    active: level === levelItem.value,
                                })}
                                onClick={() => {
                                    setShowDropDownLevel(false);
                                    setLevel(levelItem.value);
                                }}
                            >
                                <PriorityLevel title={levelItem.title} className={cx('content')} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

DropDownLevel.propTypes = {
    className: PropTypes.string,
    setShowDropDownLevel: PropTypes.func,
    level: PropTypes.string,
    setLevel: PropTypes.func,
    down: PropTypes.bool,
};

export default DropDownLevel;
