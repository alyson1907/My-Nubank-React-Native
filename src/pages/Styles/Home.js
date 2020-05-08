import { StyleSheet } from 'react-native'
import Colors from '../../Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between'
  },

  content: {
    height: '45%',
    width: '100%'
  },

  footer: {
    marginBottom: 32,
  },

  /* MainCards Content Styles */
  // Account
  accountCard: {
    color: Colors.fontSecondary,
    fontSize: 18
  },
  accountCardLarge: {
    color: Colors.fontSecondaryAlternative,
    fontSize: 42
  },
  // Credit Card
  creditCard: {
    color: Colors.fontColorfulPrimary
  },
  creditCardValue: {
    color: Colors.fontColorfulPrimary,
    fontSize: 42
  },
  creditCardLimit: {
    color: Colors.fontSecondary,
  },
  creditCardLimitValue: {
    color: Colors.fontColorfulSecondary,
  },

  // Nubank Rewards
  rewardsContainer: {
    flex:1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  rewardsTxt: {
    fontSize: 18,
    color: Colors.fontSecondary,
    textAlign: 'center',
    paddingHorizontal: 64,
    lineHeight: 32
  },
  rewardsBtn: {
    height: 32,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: 4,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  rewardsBtnTxt: {
    color: Colors.primary
  }
})

export default styles
