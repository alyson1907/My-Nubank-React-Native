import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../Colors'

const leftOffset = 32

const styles = StyleSheet.create({
  // Outer Container
  container: {
    width: '25%',
    justifyContent: 'space-between',
    backgroundColor: Colors.secondary,
    borderRadius: 4,
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
    fontSize: 16,
    marginLeft: 32
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    marginLeft: -leftOffset,
    marginRight: -leftOffset,
    paddingHorizontal: leftOffset,
    paddingVertical: 32,
    backgroundColor: Colors.brightGrey,
  },

  footerTxt: {
    flex: 4,
    color: Colors.fontSecondaryAlternative,
    paddingHorizontal: 32
  }
})

export default styles
