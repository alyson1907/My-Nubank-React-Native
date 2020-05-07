import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    borderRadius: 5
  },

  headerContainer: {
    flexDirection: 'row',
    padding: 24
  },

  headerImg: {
    width: 28,
    height: 28,
    tintColor: Colors.secondary
  },

  headerText: {
    color: Colors.fontSecondary,
    fontSize: 18,
    marginLeft: 28
  }
})

export default styles
