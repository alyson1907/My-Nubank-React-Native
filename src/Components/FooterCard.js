import React from 'react'
import Text from './Text'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/AntDesign'
import Colors from '../Colors'
import styles from './Styles/FooterCard'

const FooterCard = (props) => {
  const navigation = useNavigation()
  const navigateTo = pageName => pageName && navigation.navigate(pageName)

  return (
    // TODO add link to navigate to another screen
    <TouchableOpacity style={styles.container} onPress={() => navigateTo(props.navigateTo)}>
      <Icon name={props.icon} size={22} color={Colors.secondary} />
      <Text style={styles.contentText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default FooterCard
