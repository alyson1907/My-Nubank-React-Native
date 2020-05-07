import React from 'react'
import { View } from "react-native"
// Components
import MainCard from '../Components/MainCard'
import AppHeader from '../Components/AppHeader'
import styles from './Styles/Home'

const Home = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <MainCard />
    </View>
  )
}

export default Home
