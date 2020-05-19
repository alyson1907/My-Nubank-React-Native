import React from 'react'
import { Text } from 'react-native'

export default (props) => {
  const { style, children, ...restProps} = props
  return <Text {...restProps} style={[{ fontFamily: 'sans-serif-medium' }, style]}>{children}</Text>
}
