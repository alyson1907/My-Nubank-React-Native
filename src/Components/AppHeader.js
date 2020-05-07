import React from 'react'
import { View, Image, Text } from 'react-native'
// Images/Assets
import logo from '../img/logo/Nubank_Logo.png'
import arrow from '../img/icons/nav_arrow.png'
import styles from './Styles/AppHeader'

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Image source={logo} />
        <Text style={styles.textName}>Alyson</Text>
      </View>
      <Image source={arrow} style={styles.imgArrow} />
    </View>
  )
}

export default AppHeader
