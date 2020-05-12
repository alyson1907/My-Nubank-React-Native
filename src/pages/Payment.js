import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Text from '../Components/Text'
// Styles
import styles from './Styles/SecondaryPage'
// Components
import ExitCross from '../Components/ExitCross'
import ScreenItem from '../Components/ScreenItem'

const Payment = () => {
  const screenItems = [
    {
      icon: 'creditcard',
      title: 'Pagar fatura do cartão',
      description: 'Usando o saldo da sua conta',
      navigateTo: 'Home'
    },
    {
      icon: 'barcode',
      title: 'Pagar um boleto',
      description: 'Contas de luz, água, etc',
      navigateTo: 'Home'
    }
  ]

  const renderScreenItems = (screenItems) => {
    return screenItems.map(item => (
      <ScreenItem key={item.title}
        icon={item.icon}
        title={item.title}
        description={item.description}
        navigateTo={item.navigateTo}
      />
    ))
  }

  return (
    <View style={styles.container}>
      <ExitCross />
      {renderScreenItems(screenItems)}
    </View>
  )
}

export default Payment
