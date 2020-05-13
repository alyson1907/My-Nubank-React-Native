import { combineReducers } from 'redux'
import transactions from './transactions'

console.log(transactions)
const reducers = combineReducers({
  trans: transactions
})

export default reducers
