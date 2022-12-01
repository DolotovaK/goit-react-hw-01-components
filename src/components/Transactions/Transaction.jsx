import PropTypes from 'prop-types';
import css from '../Transactions/Transactions.module.css'

export function Transaction({transaction: {type, amount, currency}}) {
    return (
        <>
            <td className={css.row}>{type}</td>
            <td className={css.row}>{amount}</td>
            <td className={css.row}>{currency}</td>
        </>
    )
}

Transaction.propTypes = {
    transaction: PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
}