import React from 'react'
import { View, Image } from 'react-native'
import Text from './Text'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../Colors'
import styles from './Styles/MainCard'

const MainCard = (props) => {
  const navigation = useNavigation()
  const navigateTo = pageName => pageName && navigation.navigate(pageName)

  const header = props => (
    <View style={styles.headerContainer}>
      {props.header && props.header.icon && (<Icon name={props.header.icon} size={28} color={Colors.fontSecondary} />)}
      <Text style={styles.headerText}>{props.header.text}</Text>
    </View>
  )

  const footer = props => {
    if (props.footer) {
      return (
        <View style={styles.footer}>
          <Icon name={props.footer.icon} size={28} color={Colors.fontSecondary} />
          <Text style={styles.footerTxt}>{props.footer.text}</Text>
          <Icon name='arrow-right' size={18} color={Colors.fontSecondary} />
        </View>
      )
    }
  }

  return (
    <View style={styles.container} onTouchEnd={() => {navigateTo(props.navigateTo)}}>
      {/* Card Header */}
      {header(props)}

      {/* Card Content */}
      {props.children}

      {/* Card Footer */}
      {footer(props)}
    </View>
  )
}

export default MainCard
