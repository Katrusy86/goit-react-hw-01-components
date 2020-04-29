import React from 'react'
import PropTypes from 'prop-types'
import styles from './transactionHistory.module.css'

export const TransactionItem = ({item:{type,amount,currency},indx}) => (
<tbody className={styles.row}>
<tr className = {indx % 2 === 0 ? styles.odd : styles.even}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
</tr>
</tbody>
    
);



TransactionItem.propTypes = {
    item:PropTypes.shape({    
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string
    })
}