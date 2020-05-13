const actionCreator = {
  insertTransaction: transaction => ({
    type: 'INSERT_TRANSACTION',
    transaction
  })
}

export default actionCreator
