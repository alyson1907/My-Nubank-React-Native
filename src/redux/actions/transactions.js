import { uri } from '../../config'

const actionCreator = {
  fetchTransactions: () => {
    return (dispatch) => {
      fetch(`${uri}/transactions`)
        .then(response => response.json())
        .then(json => dispatch({
          type: 'SET_TRANSACTIONS',
          transactions: json
        }))
        .catch(err => console.error('Error when fetching Transactions'))
    }
  }
}

export default actionCreator
