
const initialState = []

const transactionsReducer = (state = initialState, action) => {
  if (!state) return initialState

  switch (action.type) {
    case 'INSERT_TRANSACTION':
      return [...state, action.transaction]

    default: return state
  }
}

export default transactionsReducer
