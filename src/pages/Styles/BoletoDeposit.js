import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const confirmBtnDefault = {
  borderWidth: 2,
  borderRadius: 4,
  padding: 8
}

const confirmTxtDefault = {
  fontSize: 16
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  footerContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
    padding: 16,
    borderTopColor: Colors.fontSecondary,
    borderTopWidth: 1
  },

  title: {
    fontSize: 32,
    textAlign: 'center',
    paddingHorizontal: 64
  },

  input: {
    fontSize: 32
  },

  confirmGrey: {
    ...confirmBtnDefault,
    borderColor: Colors.fontSecondary,
  },

  confirmColorful: {
    ...confirmBtnDefault,
    borderColor: Colors.primary,
  },

  confirmTxtGrey: {
    ...confirmTxtDefault,
    color: Colors.fontSecondary
  },

  confirmTxtColorful: {
    ...confirmTxtDefault,
    color: Colors.primary
  }
})

export default styles
