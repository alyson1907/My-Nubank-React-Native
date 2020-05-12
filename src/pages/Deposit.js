import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Text from '../Components/Text'
// Styles
import styles from './Styles/Payment'
// Components
import ExitCross from '../Components/ExitCross'
import ScreenItem from '../Components/ScreenItem'

const Deposit = () => {
  const screenItems = [
    {
      icon: 'barcode',
      title: 'Gerar um boleto de depósito',
      description: 'Pague onde preferir e receba o dinheiro na sua conta em até 3 dias úteis.',
      navigateTo: 'Home'
    },
    {
      icon: 'export',
      title: 'Depositar por TED ou DOC',
      description: 'Transfira de outro banco para a sua conta do Nubank, se for TED cai no mesmo dia.',
      navigateTo: 'Home'
    },
    {
      icon: 'carryout',
      title: 'Trazer seu salário',
      description: 'Receba todo mês direto na sua conta e não perca nenhum dia de rendimento.',
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

export default Deposit
