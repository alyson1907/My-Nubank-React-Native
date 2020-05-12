import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Text from '../Components/Text'
// Styles
import styles from './Styles/Payment'
// Components
import ExitCross from '../Components/ExitCross'
import ScreenItem from '../Components/ScreenItem'

const Payment = () => {
  return (
    <View style={styles.container}>
      <ExitCross />
      <ScreenItem title="Lorem ipsum title" icon="barcode" description="asdasd a sd asd as da sdasdasdasd asdasd asdasd " navigateTo="Home"></ScreenItem>
      <ScreenItem title="Lorem ipsum title" icon="barcode" description="asdasd a sd asd as da sdasdasdasd asdasd asdasd " navigateTo="Home"></ScreenItem>
      <ScreenItem title="Lorem ipsum title" icon="barcode" description="asdasd a sd asd as da sdasdasdasd asdasd asdasd " navigateTo="Home"></ScreenItem>
    </View>
  )
}

export default Payment
