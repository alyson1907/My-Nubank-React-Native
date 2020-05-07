import React from 'react'
import { Text } from 'react-native'

export default (props) => {
  return <Text {...props} style={[{ fontFamily: 'sans-serif-medium' }, props.style]}>{props.children}</Text>
}
