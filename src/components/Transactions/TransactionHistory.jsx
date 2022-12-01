import PropTypes from 'prop-types';
import { Transaction } from "./Transaction"
import css from '../Transactions/Transactions.module.css'

export function TransactionHistory({ transactions }) {
    return (
        <table className={css.table}>
        <thead className={css.title}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <Transaction transaction={transaction} />
                    </tr>
                ))}
            </tbody>           
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    ).isRequired
}
