import React from 'react'
import { View } from 'react-native'
// import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Text from './Text'
import styles from './Styles/TransactionItem'
import Colors from '../Colors'

import moment from 'moment'

const TransactionItem = (props) => {
  const splitTime = (time) => {
    const splitted = time.split(' ')
    return {
      day: splitted[0],
      hour: splitted[1]
    }
  }

  const transaction = props.transaction
  const time = moment(transaction.createdAt).format('DD/MM hh:mm')
  const splittedTime = splitTime(time)
  return (
    <View style={styles.container}>
      {/* <Icon name="wallet" size={32} color={Colors.fontSecondary} /> */}
      <View style={styles.txtContainer}>
        <Text style={styles.title}>{transaction.category}</Text>
        <Text style={styles.description}>{transaction.establishment}</Text>
      </View>
      <View>
        <Text style={styles.date}>{splittedTime.day}</Text>
        <Text style={styles.date}>{splittedTime.hour}</Text>
      </View>
    </View>
  )
}

export default TransactionItem
