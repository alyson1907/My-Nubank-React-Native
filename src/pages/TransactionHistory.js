import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Text from '../Components/Text'
import ExitCross from '../Components/ExitCross'
import TransactionItem from '../Components/TransactionItem'

import defaultStyle from './Styles/SecondaryPage'
import styles from './Styles/TransactionHistory'

import actions from '../redux/actions'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'

const TransactionHistory = (props) => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const loadTransactions = async () => {
      await props.fetchTransactions()
    }
    loadTransactions().then(() => setLoading(false))

  }, [isLoading])

  const renderSummary = (transactions) => {
    const reduceTransactions = transactions => {
      return transactions.reduce((acc, trans) => {
        return {
          count: acc.count + 1,
          totalValue: acc.totalValue + parseInt(trans.value)
        }
      },
        {
          count: 0,
          totalValue: 0
        })
    }
    const renderLoading = () => (<Text>Loading...</Text>)
    const renderTransactionSummary = ({ count, totalValue }) => (
      <View style={styles.summary}>
        <Text style={styles.summaryTxt}>Você fez {count} compras nos últimos 30 dias, com um total de R$ {(totalValue/100).toFixed(2)}</Text>
      </View>
    )

    const transactionsInfo = reduceTransactions(transactions)

    return isLoading ? renderLoading() : renderTransactionSummary(transactionsInfo)
  }

  const renderTransactions = transactions => {
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
    transactions: state.trans
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: () => dispatch(actions.transactions.fetchTransactions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistory)
