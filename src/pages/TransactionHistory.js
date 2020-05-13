import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Text from '../Components/Text'
import ExitCross from '../Components/ExitCross'

import defaultStyle from './Styles/SecondaryPage'
import styles from './Styles/TransactionHistory'

import actions from '../redux/actions'
import { connect } from 'react-redux'

const TransactionHistory = (props) => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
   const loadTransactions = async () => {
     await props.fetchTransactions()
   }
   loadTransactions().then(() => setLoading(false))

  },[isLoading])

  const renderSummary = () => {
   if (!isLoading) {

   } else {
     return (
       <Text>Loading...</Text>
     )
   }

  }

  return (
    <View style={defaultStyle.container}>
      <ExitCross />
      <View style={styles.container}>
        {renderSummary()}
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
    fetchTransactions: () => dispatch(actions.transactions.fetchTransactions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistory)
