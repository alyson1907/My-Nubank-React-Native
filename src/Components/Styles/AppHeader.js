import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    alignItems: 'center'
  },

  innerView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  textName: {
    color: Colors.fontPrimary,
    fontWeight: 'bold',
    fontSize: 22,
    marginHorizontal: 8
  }
})

export default styles
