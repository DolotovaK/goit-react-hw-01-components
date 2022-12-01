import PropTypes from 'prop-types';
import css from '../Statistics/Statictics.module.css'

export function Statistics({stat: {label, percentage}}) {
    return (
        <>
            <span className={css.label}>{label}</span>
            <span>{percentage}%</span>
        </>
    );
}

Statistics.propTypes = {
    stat: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
}