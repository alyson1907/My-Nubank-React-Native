import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Text from '../Components/Text'
// Styles
import Colors from '../Colors'
import styles from './Styles/Payment'
// Components
import ExitCross from '../Components/ExitCross'

const Payment = () => {
  return (
    <View style={styles.container}>
      <ExitCross />
      <Text>SAODASDASDASD</Text>
    </View>
  )
}

export default Payment
