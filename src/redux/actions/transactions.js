const actionCreator = {
  insertTransaction: transaction => ({
    type: 'INSERT_TRANSACTION',
    transaction
  }),

  fetchTransactions: () => ({
    type: 'GET_TRANSACTIONS'
  })
}

export default actionCreator
