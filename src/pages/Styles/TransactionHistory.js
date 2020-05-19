import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const styles = StyleSheet.create({
  summary: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 64,
    borderBottomColor: Colors.fontSecondary,
    borderBottomWidth: 1
  },

  summaryTxt: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.fontSecondaryAlternative
  },
})

export default styles
