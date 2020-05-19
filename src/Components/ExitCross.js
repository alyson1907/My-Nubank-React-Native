import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../Colors'

export default (props) => {
  const navigation = useNavigation()
  const returnScreen = () => navigation.canGoBack() && navigation.goBack()

  return (
    <TouchableOpacity onPress={returnScreen}>
      <Icon name="close" size={32} color={Colors.fontSecondary} />
    </TouchableOpacity>
  )
}
