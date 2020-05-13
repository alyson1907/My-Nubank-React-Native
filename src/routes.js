import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// Using Stack Navigator
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
// Pages
import Home from './pages/Home'
import Payment from './pages/Payment'
import Deposit from './pages/Deposit'
import BoletoDeposit from './pages/BoletoDeposit'
import TransactionHistory from './pages/TransactionHistory'

import { Dimensions } from 'react-native'

const Routes = () => {
  const transitionAnimation = ({ current: { progress } }) => {
    return {
      // Styles applied to the background screen
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.4],
          extrapolate: 'clamp',
        })
      },
      // transition applied to the front screen opening
      cardStyle: {
        transform: [
          {
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [Dimensions.get('window').height, 0]
            })
          }
        ]
      }
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardStyleInterpolator: transitionAnimation
        // cardOverlayEnabled: true,
      }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Deposit" component={Deposit} />
        <Stack.Screen name="BoletoDeposit" component={BoletoDeposit} />
        <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
