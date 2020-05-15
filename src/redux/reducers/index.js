import { combineReducers } from 'redux'
import transactions from './transactions'

const reducers = combineReducers({
  trans: transactions
})

export default reducers
