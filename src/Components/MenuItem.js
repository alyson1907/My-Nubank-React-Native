import React from 'react'
import Text from './Text'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/MenuItem'

/** single item for Slide-Down menu
 * @param {String} icon MaterialIcons icon name
 * @param {String} text
 * @param {String} navigateTo Page name
 */
const MenuItem = (props) => {
  const navigation = useNavigation()
  const navigateTo = pageName => pageName && navigation.navigate(pageName)

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo(props.navigateTo)}>
        <Icon name={props.icon} style={styles.icon} size={22} />
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuItem
