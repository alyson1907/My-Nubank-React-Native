import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Text from '../Components/Text'
import Icon from 'react-native-vector-icons/AntDesign'
import Colors from '../Colors'
import styles from './Styles/ScreenItem'

/**
 * @param {String} title
 * @param {String} icon AntDesign vector-icon
 * @param {String} text
 * @param {String} navigateTo Page name
 */
const ScreenItem = (props) => {
  const navigation = useNavigation()
  const navigateTo = pageName => pageName && navigation.navigate(pageName)

  const renderTitle = (title) => props.title && <Text style={styles.title}>{title}</Text>
  const renderIcon = (icon, size) => props.icon && <Icon name={icon} size={size || 32} color={Colors.primary} />
  const renderDescription = (description) => props.description && <Text style={styles.description}>{description}</Text>

  return (
    <View style={styles.container} onTouchStart={() => navigateTo(props.navigateTo)}>
      {renderIcon(props.icon)}

      <View style={styles.txtContainer}>
        {renderTitle(props.title)}
        {renderDescription(props.description)}
      </View>

      {renderIcon('right', 16)}
    </View>
  )
}

export default ScreenItem
