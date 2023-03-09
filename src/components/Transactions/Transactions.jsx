import React from 'react';
import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const Transactions = ( 
    { transactions }) => {
  return (
      
    
 <table className={css.transactions}>
  <thead className={css.transactions_titles}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody className={css.transactions_list}>
       {transactions.map(transaction => (
         <tr key={transaction.id}
           className={css.transactions_item}>
         <td>{transaction.type}</td>
         <td>{transaction.amount}</td>
         <td>{transaction.currency}</td>
       </tr>
       ))}
    </tbody>
 </table>
      
    )
}


Transactions.propTypes = {
    transactions:
        PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })).isRequired,
};