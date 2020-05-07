import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../Colors'

const vw = Dimensions.get('window').width
const vh = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    width: 0.8 * vw,
    backgroundColor: Colors.secondary,
    borderRadius: 5,
    marginHorizontal: 24
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24
  },

  headerText: {
    color: Colors.fontSecondary,
    fontSize: 20,
    marginLeft: 28
  }
})

export default styles
