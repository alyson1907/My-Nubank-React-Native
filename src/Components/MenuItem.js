import React from 'react'
import { View } from 'react-native'
import Text from './Text'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/MenuItem'

const MenuItem = (props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.button}>
        <Icon name={props.icon} style={styles.icon} size={22} />
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuItem
