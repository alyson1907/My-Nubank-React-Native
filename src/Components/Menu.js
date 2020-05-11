import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// Components
import MenuItem from './MenuItem'

import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/Menu'

const Menu = () => {
  return (
    <View style={styles.container}>
      <MenuItem icon='help-outline' text='Me ajuda' />
      <MenuItem icon='person-outline' text='Perfil' />
      <MenuItem icon='credit-card' text='Configurar cartão' />
      <MenuItem icon='smartphone' text='Configurações do App' />
    </View>
  )
}

export default Menu
