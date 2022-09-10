import css from 'components/TransactionHistory/TransactionHistory.module.css'
import PropTypes from 'prop-types';



  export const TransactionHistory = ({ items }) => {
   
    return(
        <>
            {items.map(({id, type, amount, currency}) => (
            
  <table key={id} className={css.table}>
  <thead>
    <tr>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>))}
        </>
    )
  };

  TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        })
    )
}
