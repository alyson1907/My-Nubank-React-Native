import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import Text from '../Components/Text'

import defaultStyle from './Styles/SecondaryPage' // Default white card
import styles from './Styles/BoletoDeposit' // Specific styles for the page
import ExitCross from '../Components/ExitCross'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BoletoDeposit = () => {
  // Value will contain Integer value
  // ShowValue will contain string to be shown in screen
  const [value, setValue] = useState(0)
  const [showValue, setShowValue] = useState('0,00')
  const [isValuePermitted, setIsValuePermitted] = useState(false)

  const formatValue = value => {
    if (isNaN(value) || value === 0) return '0,00'
    const cents = value / 100
    return cents.toFixed(2).replace('.', ',')
  }

  const onValueChange = e => {
    const textValue = e.nativeEvent.text.replace(',', '')
    const value = parseInt(textValue)
    const formattedValue = formatValue(value)
    setValue(value)
    setShowValue(formattedValue)
    if (value >= 2000 && value <= 1500000) setIsValuePermitted(true)
    else setIsValuePermitted(false)
  }

  const pickButtonStyle = (isValuePermitted) => {
    return isValuePermitted ? styles.confirmColorful : styles.confirmGrey
  }

  const pickTextStyle = (isValuePermitted) => {
    return isValuePermitted ? styles.confirmTxtColorful : styles.confirmTxtGrey
  }

  return (
    <View style={defaultStyle.container}>
      <ExitCross />
      {/* Title */}
      <View style={styles.container}>
        <Text style={styles.title}>
          <Text style={{ fontWeight: 'bold' }}>Quanto </Text>
          você quer
          <Text style={{ fontWeight: 'bold' }}> depositar</Text>
          ?
          </Text>

        {/* Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.input}>R$ </Text>
          <TextInput style={styles.input} keyboardType="numeric" onChange={onValueChange}>{showValue}</TextInput>
        </View>
        <Text style={styles.footerText}>Digite um valor entre R$ 20,00 e R$ 15.000,00</Text>
      </View>

      {/* Confirm */}
      <View style={[styles.footerContainer]}>
        <TouchableOpacity style={pickButtonStyle(isValuePermitted)}>
          <Text style={pickTextStyle(isValuePermitted)}>CONFIRMAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BoletoDeposit
