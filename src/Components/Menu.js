import React, { useState } from 'react'
import { View, Animated, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
// Components
import MenuItem from './MenuItem'

import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/Menu'

export const handleLayout = (e, setHeight) => {
  setHeight(e.nativeEvent.layout.height)
}

const Menu = (props) => {
  const [height, setHeight] = useState(Dimensions.get('window').height)

  const interpolateAnimation = translateY => {
    return translateY.interpolate({
      inputRange: [0, 256],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })
  }

  return (
    <Animated.View style={[
      styles.container, // StyleSheet
      { top: height / 2 }, // onLayout
      { opacity: interpolateAnimation(props.translateY) } //Animation
    ]}
      onLayout={e => handleLayout(e, setHeight)}
    >
      <ScrollView>
        <MenuItem icon='help-outline' text='Me ajuda' />
        <MenuItem icon='person-outline' text='Perfil' />
        <MenuItem icon='credit-card' text='Configurar cartão' />
        <MenuItem icon='smartphone' text='Configurações do App' />
      </ScrollView>
    </Animated.View>
  )
}

export default Menu
