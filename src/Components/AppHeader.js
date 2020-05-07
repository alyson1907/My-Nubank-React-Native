import React from 'react'
import { View, Image } from 'react-native'
import Text from './Text'
// Images/Assets
import logo from '../img/logo/Nubank_Logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/AppHeader'
import Colors from '../Colors'

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Image source={logo} />
        <Text style={styles.textName}>Alyson</Text>
      </View>
      <Icon name="keyboard-arrow-down" size={24} color={Colors.secondary} />
    </View>
  )
}

export default AppHeader
