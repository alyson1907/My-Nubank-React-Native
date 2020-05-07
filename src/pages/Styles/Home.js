import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between'
  },

  content: {
    height: '45%',
    width: '100%'
  },

  footer: {
    marginBottom: 32,
  }
})

export default styles
