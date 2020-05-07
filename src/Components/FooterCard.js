import React from 'react'
import { Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/AntDesign'
import Colors from '../Colors'
import styles from './Styles/FooterCard'

const FooterCard = (props) => {
  return (
    // TODO add link to navigate to another screen
    <TouchableOpacity style={styles.container}>
      <Icon name={props.icon} size={22} color={Colors.secondary} />
      <Text style={styles.contentText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default FooterCard
