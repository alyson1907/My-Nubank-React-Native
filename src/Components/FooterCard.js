import React from 'react'
import Text from './Text'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/AntDesign'
import Colors from '../Colors'
import styles from './Styles/FooterCard'

/** Single footer button
 * @param {String} icon AntDesign icon name
 * @param {String} text
 * @param {String} navigateTo Page name
 */
const FooterCard = ({ navigation , ...props }) => {
  const navigateTo = pageName => pageName && navigation.navigate(pageName)

  return (
    // TODO add link to navigate to another screen
    <TouchableOpacity style={styles.container} onPress={() => navigateTo(props.navigateTo)} testID='footer-card'>
      <Icon name={props.icon} size={22} color={Colors.secondary} />
      <Text style={styles.contentText} testID='footer-card-text'>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default FooterCard
