import React from 'react'
import { View, Text, Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../Colors'
import styles from './Styles/MainCard'

const MainCard = (props) => {
  return (
    <View style={styles.container}>
      {/* Card Header */}
      <View style={styles.headerContainer}>
        {props.headerIcon && (<Icon name={props.headerIcon} size={28} color={Colors.fontSecondary} />)}
        <Text style={styles.headerText}>{props.headerText}</Text>
      </View>
      {/* Card Content */}
      <View style={styles.content}>

      </View>
    </View>
  )
}

export default MainCard
