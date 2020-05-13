import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
// Components
import Text from '../Components/Text'
import ExitCross from '../Components/ExitCross'
import TransactionItem from '../Components/TransactionItem'
// Style
import defaultStyle from './Styles/SecondaryPage'
import styles from './Styles/TransactionHistory'
// Redux
import actions from '../redux/actions'
import { connect } from 'react-redux'

import { getTotalValue, renderLoading } from '../helpers'

const TransactionHistory = (props) => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const loadTransactions = async () => {
      await props.fetchTransactions()
    }
    loadTransactions().then(() => setLoading(false))
  }, [])
  
  const renderSummary = (transactions) => {
    const renderTransactionSummary = ({ count, totalValue }) => (
      <View style={styles.summary}>
        <Text style={styles.summaryTxt}>Você fez {count} compras nos últimos 30 dias, com um total de R$ {totalValue.integer},{totalValue.cents}</Text>
      </View>
    )

    const transactionsInfo = {
      count: transactions.length,
      totalValue: getTotalValue(props.transactions)
    }
    return (isLoading || !props.transactions) ? renderLoading() : renderTransactionSummary(transactionsInfo)
  }

  const renderTransactions = transactions => {
    if (isLoading || !props.transactions) return renderLoading()
    const orderedTrans = transactions.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
    return (
      <ScrollView contentContainerStyle={{flexDirection: 'column-reverse'}} showsVerticalScrollIndicator={false}>
        {transactions.map(trans => (
          <TransactionItem key={trans.id} transaction={trans} />
        ))}
      </ScrollView>

    )
  }

  return (
    <View style={defaultStyle.container}>
      <ExitCross />
      <View>
        {renderSummary(props.transactions)}
        
        {renderTransactions(props.transactions)}
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    transactions: state.trans.transactionList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: () => dispatch(actions.transactions.fetchTransactions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistory)
