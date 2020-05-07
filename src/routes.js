import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// Using Stack Navigator
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
// Pages
import Home from './pages/Home'

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
