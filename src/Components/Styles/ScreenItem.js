import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.fontSecondary,
    borderBottomWidth: 1
  },

  txtContainer: {
    width: '75%',
    paddingHorizontal: 32
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18
  },

  description: {
    fontSize: 18
  }
})

export default styles
