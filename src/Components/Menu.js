import React, { useState } from 'react'
import { View, Animated, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
// Components
import MenuItem from './MenuItem'

import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/Menu'

const Menu = () => {
  const [height, setHeight] = useState(Dimensions.get('window').height)
  const handleLayout = e => {
    setHeight(e.nativeEvent.layout.height)
  }

  return (
    <View style={[styles.container, { top: height / 2 }]} onLayout={handleLayout}>
      <ScrollView>
        <MenuItem icon='help-outline' text='Me ajuda' />
        <MenuItem icon='person-outline' text='Perfil' />
        <MenuItem icon='credit-card' text='Configurar cartão' />
        <MenuItem icon='smartphone' text='Configurações do App' />
      </ScrollView>
    </View>
  )
}

export default Menu
