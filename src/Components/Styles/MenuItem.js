import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const styles = StyleSheet.create({
  icon: {
    color: Colors.fontPrimary,
    marginHorizontal: 32,
  },

  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: '15%',
    borderColor: Colors.fontPrimary

  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginHorizontal: 32,
  },

  text: {
    color: Colors.fontPrimary,
    fontSize: 18
  }
})

export default styles
