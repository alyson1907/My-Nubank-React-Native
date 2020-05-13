import React, { useEffect } from 'react'
import { View } from 'react-native'
import Text from '../Components/Text'
import ExitCross from '../Components/ExitCross'

import defaultStyle from './Styles/SecondaryPage'
import styles from './Styles/TransactionHistory'

import actions from '../redux/actions'
import { connect } from 'react-redux'

const TransactionHistory = (props) => {
  useEffect(() => {
    props.fetchTransactions()
  })

  const renderSummary = () => {

  }

  return (
    <View style={defaultStyle.container}>
      <ExitCross />
      <View style={styles.container}>
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    transactions: state.trans
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: () => dispatch(actions.transactions.fetchTransactions)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistory)
