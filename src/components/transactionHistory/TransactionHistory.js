import React from 'react'
import PropTypes from 'prop-types'
import { TransactionItem } from './TransactionItem';
import styles from './transactionHistory.module.css'


export const TransactionHistory = ({items}) =>
  (
    <table className = {styles.transaction_history}>
  <thead>
    <tr className = {styles.header}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  
  {items.map((item,indx) => <TransactionItem item={item} key={item.id} indx={indx}/>)}

</table>
  ) 

TransactionHistory.propTypes = {
    items:PropTypes.arrayOf(PropTypes.object),
}
