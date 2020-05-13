
import { uri } from '../../config'
const initialState = []

const transactionsReducer = async (state = initialState, action) => {
  if (!state) return initialState

  switch (action.type) {
    case 'GET_TRANSACTIONS':
      const fetchedTrans = await fetch(`${uri}/transactions`)
      return fetchedTrans.json()

    default: return state
  }
}

export default transactionsReducer
