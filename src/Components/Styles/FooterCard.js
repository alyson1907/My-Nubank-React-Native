import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    padding: 14,
    marginHorizontal: 8,
    backgroundColor: Colors.primaryAlternative,
    borderRadius: 8,
    justifyContent: 'space-between'
  },

  contentText: {
    color: Colors.fontPrimary,
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default styles
