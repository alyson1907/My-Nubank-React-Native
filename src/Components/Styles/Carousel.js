import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const styles = StyleSheet.create({
  bulletsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  bullet: {
    width: 10,
    height: 10,
    backgroundColor: Colors.primaryAlternative,
    borderRadius: 10,
    marginHorizontal: 8,
    marginTop: 8
  },

  selectedBullet: {
    width: 11,
    height: 11,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    marginHorizontal: 8,
    marginTop: 8
  }
})

export default styles
