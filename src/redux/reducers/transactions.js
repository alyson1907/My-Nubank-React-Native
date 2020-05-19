
const initialState = {
  transactionList: []
}

const transactionsReducer = (state = initialState, action) => {
  if (!state) return initialState

  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactionList: action.transactions
      }

    default: return state
  }
}

export default transactionsReducer
