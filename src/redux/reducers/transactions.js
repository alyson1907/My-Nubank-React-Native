
const initialState = []

const transactionsReducer = (state = initialState, action) => {
  if (!state) return initialState

  switch (action.type) {
    case 'GET_TRANSACTIONS':
      return action.transactions

    default: return state
  }
}

export default transactionsReducer
