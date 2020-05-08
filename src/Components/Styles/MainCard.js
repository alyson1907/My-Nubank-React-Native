import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../Colors'

const vw = Dimensions.get('window').width
const width = 0.75 * vw
const leftOffset = 24

const styles = StyleSheet.create({
  // Outer Container
  container: {
    width,
    justifyContent: 'space-between',
    backgroundColor: Colors.secondary,
    borderRadius: 4,
    marginHorizontal: vw / 8,
    paddingHorizontal: leftOffset,
  },

// Header inside card
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32
  },

  headerText: {
    color: Colors.fontSecondary,
    fontSize: 18,
    marginLeft: 28
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width,
    height: 84,
    borderRadius: 4,
    marginLeft: -leftOffset,
    paddingHorizontal: leftOffset,
    backgroundColor: Colors.brightGrey,
  },

  footerTxt: {
    flex: 4,
    color: Colors.fontSecondaryAlternative,
    paddingHorizontal: 24
  }
})

export default styles
