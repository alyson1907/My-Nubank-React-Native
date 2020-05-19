import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16
  },

  txtContainer: {
    width: '60%',
    padding: 16
  },

  title: {
    color: Colors.fontSecondaryAlternative,
    fontSize: 18
  },

  description: {
    color: Colors.fontSecondary,
    fontSize: 16

  },

  date: {
    color: Colors.fontSecondary,
    fontSize: 14
  }
})

export default styles
